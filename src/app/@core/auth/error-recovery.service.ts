import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer, of, throwError, from } from 'rxjs';
import { switchMap, catchError, tap, retry, delay, mergeMap } from 'rxjs/operators';
import { AuthService, AuthProvider } from './auth.service';
import { SessionManagerService, ProviderSession } from './session-manager.service';
import { SecurityAuditService } from './security-audit.service';
import { UserPreferencesService } from './user-preferences.service';

export interface ErrorRecoveryAction {
  id: string;
  type: 'retry' | 'fallback' | 'refresh' | 'reauth' | 'manual' | 'ignore';
  provider: AuthProvider;
  description: string;
  automated: boolean;
  priority: number; // 1 = highest, 5 = lowest
  retryCount?: number;
  maxRetries?: number;
  delay?: number; // milliseconds
  fallbackProvider?: AuthProvider;
  userConfirmationRequired?: boolean;
}

export interface RecoveryAttempt {
  id: string;
  errorType: string;
  provider: AuthProvider;
  timestamp: Date;
  action: ErrorRecoveryAction;
  success: boolean;
  duration: number;
  errorMessage?: string;
  recoveryData?: any;
}

export interface ErrorContext {
  provider: AuthProvider;
  errorType: string;
  errorMessage: string;
  sessionId?: string;
  timestamp: Date;
  networkConnected: boolean;
  retryCount: number;
  userAgent: string;
  lastSuccessfulLogin?: Date;
  additionalData?: any;
}

@Injectable({
  providedIn: 'root',
})
export class ErrorRecoveryService {
  private readonly MAX_RETRY_ATTEMPTS = 3;
  private readonly RETRY_DELAYS = [1000, 3000, 5000]; // Progressive delays
  private readonly NETWORK_CHECK_INTERVAL = 5000;
  private readonly SESSION_RECOVERY_TIMEOUT = 30000;

  private recoveryActionsSubject$ = new BehaviorSubject<ErrorRecoveryAction[]>([]);
  private recoveryAttemptsSubject$ = new BehaviorSubject<RecoveryAttempt[]>([]);
  private networkStatusSubject$ = new BehaviorSubject<boolean>(navigator.onLine);
  private isRecoveringSubject$ = new BehaviorSubject<boolean>(false);

  public recoveryActions$ = this.recoveryActionsSubject$.asObservable();
  public recoveryAttempts$ = this.recoveryAttemptsSubject$.asObservable();
  public networkStatus$ = this.networkStatusSubject$.asObservable();
  public isRecovering$ = this.isRecoveringSubject$.asObservable();

  private activeRecoveries = new Map<string, Promise<boolean>>();
  private networkCheckTimer?: number;

  constructor(
    private authService: AuthService,
    private sessionManager: SessionManagerService,
    private securityAudit: SecurityAuditService,
    private userPreferences: UserPreferencesService
  ) {
    this.initializeNetworkMonitoring();
    this.initializeErrorHandling();
  }

  private initializeNetworkMonitoring(): void {
    // Monitor online/offline events
    window.addEventListener('online', () => {
      this.networkStatusSubject$.next(true);
      this.handleNetworkReconnection();
    });

    window.addEventListener('offline', () => {
      this.networkStatusSubject$.next(false);
      this.handleNetworkDisconnection();
    });

    // Periodic network connectivity check
    this.startNetworkChecking();
  }

  private initializeErrorHandling(): void {
    // Monitor session errors
    this.sessionManager.conflicts$.subscribe((conflicts) => {
      conflicts.forEach((conflict) => {
        this.handleSessionConflictError(conflict);
      });
    });

    // Monitor session health
    this.authService.monitorSessionHealth().subscribe((healthStatuses) => {
      healthStatuses.forEach((status) => {
        if (status.status === 'expired' || status.status === 'invalid') {
          this.handleSessionExpiredError(status.provider);
        } else if (status.status === 'expiring') {
          this.handleSessionExpiringWarning(status.provider, status.expiresIn);
        }
      });
    });
  }

  private startNetworkChecking(): void {
    this.networkCheckTimer = window.setInterval(() => {
      this.checkNetworkConnectivity();
    }, this.NETWORK_CHECK_INTERVAL);
  }

  private async checkNetworkConnectivity(): Promise<void> {
    try {
      // Try to fetch a small resource to verify actual connectivity
      const response = await fetch('/favicon.ico', {
        method: 'HEAD',
        cache: 'no-cache',
        signal: AbortSignal.timeout(3000),
      });

      const isConnected = response.ok;
      if (isConnected !== this.networkStatusSubject$.value) {
        this.networkStatusSubject$.next(isConnected);

        if (isConnected) {
          this.handleNetworkReconnection();
        } else {
          this.handleNetworkDisconnection();
        }
      }
    } catch (error) {
      // Network is likely down
      if (this.networkStatusSubject$.value) {
        this.networkStatusSubject$.next(false);
        this.handleNetworkDisconnection();
      }
    }
  }

  /**
   * Handle authentication errors with automatic recovery
   */
  public async handleAuthError(
    provider: AuthProvider,
    error: any,
    context: Partial<ErrorContext> = {}
  ): Promise<boolean> {
    const errorContext: ErrorContext = {
      provider,
      errorType: this.classifyError(error),
      errorMessage: error.message || error.toString(),
      timestamp: new Date(),
      networkConnected: this.networkStatusSubject$.value,
      retryCount: context.retryCount || 0,
      userAgent: navigator.userAgent,
      lastSuccessfulLogin: context.lastSuccessfulLogin,
      sessionId: context.sessionId,
      additionalData: context.additionalData,
    };

    // Log the error
    this.securityAudit.logAuthEvent('auth_error', provider, {
      ipAddress: 'unknown',
      userAgent: navigator.userAgent,
      sessionId: errorContext.sessionId,
      error: errorContext.errorMessage,
      errorType: errorContext.errorType,
    });

    // Generate recovery actions
    const recoveryActions = this.generateRecoveryActions(errorContext);
    this.recoveryActionsSubject$.next(recoveryActions);

    // Attempt automatic recovery
    return this.attemptRecovery(errorContext, recoveryActions);
  }

  /**
   * Handle session-related errors
   */
  public async handleSessionError(provider: AuthProvider, sessionId: string, error: any): Promise<boolean> {
    const errorContext: ErrorContext = {
      provider,
      errorType: 'session_error',
      errorMessage: error.message || error.toString(),
      sessionId,
      timestamp: new Date(),
      networkConnected: this.networkStatusSubject$.value,
      retryCount: 0,
      userAgent: navigator.userAgent,
    };

    const recoveryActions = this.generateSessionRecoveryActions(errorContext);
    return this.attemptRecovery(errorContext, recoveryActions);
  }

  /**
   * Handle network-related authentication errors
   */
  public async handleNetworkError(provider: AuthProvider, error: any, retryCount = 0): Promise<boolean> {
    if (!this.networkStatusSubject$.value) {
      // Wait for network to come back online
      return this.waitForNetworkRecovery(provider, error, retryCount);
    }

    const errorContext: ErrorContext = {
      provider,
      errorType: 'network_error',
      errorMessage: error.message || error.toString(),
      timestamp: new Date(),
      networkConnected: false,
      retryCount,
      userAgent: navigator.userAgent,
    };

    const recoveryActions = this.generateNetworkRecoveryActions(errorContext);
    return this.attemptRecovery(errorContext, recoveryActions);
  }

  private classifyError(error: any): string {
    const errorStr = error.message || error.toString().toLowerCase();

    if (errorStr.includes('network') || errorStr.includes('fetch')) {
      return 'network_error';
    }
    if (errorStr.includes('unauthorized') || errorStr.includes('403') || errorStr.includes('401')) {
      return 'auth_failure';
    }
    if (errorStr.includes('expired') || errorStr.includes('invalid_token')) {
      return 'token_expired';
    }
    if (errorStr.includes('csrf') || errorStr.includes('state')) {
      return 'csrf_error';
    }
    if (errorStr.includes('rate') || errorStr.includes('limit')) {
      return 'rate_limit';
    }
    if (errorStr.includes('timeout')) {
      return 'timeout_error';
    }
    if (errorStr.includes('cors')) {
      return 'cors_error';
    }

    return 'unknown_error';
  }

  private generateRecoveryActions(context: ErrorContext): ErrorRecoveryAction[] {
    const actions: ErrorRecoveryAction[] = [];

    switch (context.errorType) {
      case 'network_error':
        actions.push(...this.generateNetworkRecoveryActions(context));
        break;

      case 'auth_failure':
        actions.push(...this.generateAuthFailureRecoveryActions(context));
        break;

      case 'token_expired':
        actions.push(...this.generateTokenExpiredRecoveryActions(context));
        break;

      case 'csrf_error':
        actions.push(...this.generateCSRFRecoveryActions(context));
        break;

      case 'rate_limit':
        actions.push(...this.generateRateLimitRecoveryActions(context));
        break;

      case 'session_error':
        actions.push(...this.generateSessionRecoveryActions(context));
        break;

      default:
        actions.push(...this.generateGenericRecoveryActions(context));
        break;
    }

    // Sort by priority (1 = highest)
    return actions.sort((a, b) => a.priority - b.priority);
  }

  private generateNetworkRecoveryActions(context: ErrorContext): ErrorRecoveryAction[] {
    return [
      {
        id: `network_retry_${context.provider}`,
        type: 'retry',
        provider: context.provider,
        description: 'Retry authentication when network is restored',
        automated: true,
        priority: 1,
        retryCount: 0,
        maxRetries: this.MAX_RETRY_ATTEMPTS,
        delay: 2000,
      },
      {
        id: `network_offline_mode_${context.provider}`,
        type: 'fallback',
        provider: context.provider,
        description: 'Switch to offline/anonymous mode',
        automated: false,
        priority: 3,
        fallbackProvider: 'anonymous',
        userConfirmationRequired: true,
      },
    ];
  }

  private generateAuthFailureRecoveryActions(context: ErrorContext): ErrorRecoveryAction[] {
    const actions: ErrorRecoveryAction[] = [
      {
        id: `reauth_${context.provider}`,
        type: 'reauth',
        provider: context.provider,
        description: 'Re-authenticate with provider',
        automated: false,
        priority: 1,
        userConfirmationRequired: true,
      },
    ];

    // Add fallback to other providers if available
    const availableProviders = this.authService.getAvailableProviders().filter((p) => p !== context.provider);

    if (availableProviders.length > 0) {
      const preferredFallback = this.userPreferences.getRecommendedProvider();
      const fallbackProvider =
        preferredFallback && preferredFallback !== context.provider ? preferredFallback : availableProviders[0];

      actions.push({
        id: `fallback_${context.provider}_to_${fallbackProvider}`,
        type: 'fallback',
        provider: context.provider,
        description: `Switch to ${this.getProviderDisplayName(fallbackProvider)}`,
        automated: false,
        priority: 2,
        fallbackProvider,
        userConfirmationRequired: true,
      });
    }

    return actions;
  }

  private generateTokenExpiredRecoveryActions(context: ErrorContext): ErrorRecoveryAction[] {
    return [
      {
        id: `refresh_token_${context.provider}`,
        type: 'refresh',
        provider: context.provider,
        description: 'Refresh access token',
        automated: true,
        priority: 1,
        retryCount: 0,
        maxRetries: 2,
      },
      {
        id: `reauth_expired_${context.provider}`,
        type: 'reauth',
        provider: context.provider,
        description: 'Re-authenticate due to expired session',
        automated: false,
        priority: 2,
        userConfirmationRequired: true,
      },
    ];
  }

  private generateCSRFRecoveryActions(context: ErrorContext): ErrorRecoveryAction[] {
    return [
      {
        id: `csrf_refresh_${context.provider}`,
        type: 'refresh',
        provider: context.provider,
        description: 'Refresh CSRF token and retry',
        automated: true,
        priority: 1,
        retryCount: 0,
        maxRetries: 1,
      },
      {
        id: `csrf_reauth_${context.provider}`,
        type: 'reauth',
        provider: context.provider,
        description: 'Re-authenticate to fix CSRF issue',
        automated: false,
        priority: 2,
        userConfirmationRequired: true,
      },
    ];
  }

  private generateRateLimitRecoveryActions(context: ErrorContext): ErrorRecoveryAction[] {
    return [
      {
        id: `rate_limit_wait_${context.provider}`,
        type: 'retry',
        provider: context.provider,
        description: 'Wait and retry after rate limit cooldown',
        automated: true,
        priority: 1,
        retryCount: 0,
        maxRetries: 2,
        delay: 60000, // 1 minute
      },
      {
        id: `rate_limit_fallback_${context.provider}`,
        type: 'fallback',
        provider: context.provider,
        description: 'Switch to alternative provider',
        automated: false,
        priority: 2,
        fallbackProvider: this.userPreferences.getRecommendedProvider() || 'anonymous',
        userConfirmationRequired: true,
      },
    ];
  }

  private generateSessionRecoveryActions(context: ErrorContext): ErrorRecoveryAction[] {
    return [
      {
        id: `session_refresh_${context.provider}`,
        type: 'refresh',
        provider: context.provider,
        description: 'Refresh session data',
        automated: true,
        priority: 1,
      },
      {
        id: `session_recreate_${context.provider}`,
        type: 'reauth',
        provider: context.provider,
        description: 'Create new session',
        automated: false,
        priority: 2,
        userConfirmationRequired: true,
      },
    ];
  }

  private generateGenericRecoveryActions(context: ErrorContext): ErrorRecoveryAction[] {
    return [
      {
        id: `generic_retry_${context.provider}`,
        type: 'retry',
        provider: context.provider,
        description: 'Retry authentication',
        automated: true,
        priority: 1,
        retryCount: 0,
        maxRetries: this.MAX_RETRY_ATTEMPTS,
        delay: 1000,
      },
      {
        id: `generic_manual_${context.provider}`,
        type: 'manual',
        provider: context.provider,
        description: 'Manual intervention required',
        automated: false,
        priority: 5,
        userConfirmationRequired: true,
      },
    ];
  }

  private async attemptRecovery(context: ErrorContext, actions: ErrorRecoveryAction[]): Promise<boolean> {
    this.isRecoveringSubject$.next(true);

    try {
      for (const action of actions) {
        if (action.automated || !action.userConfirmationRequired) {
          const success = await this.executeRecoveryAction(action, context);
          this.recordRecoveryAttempt(action, context, success);

          if (success) {
            return true;
          }
        }
      }

      // No automated recovery succeeded
      return false;
    } finally {
      this.isRecoveringSubject$.next(false);
    }
  }

  private async executeRecoveryAction(action: ErrorRecoveryAction, context: ErrorContext): Promise<boolean> {
    const recoveryKey = `${action.provider}_${action.type}_${Date.now()}`;

    if (this.activeRecoveries.has(recoveryKey)) {
      return this.activeRecoveries.get(recoveryKey)!;
    }

    const recoveryPromise = this.performRecoveryAction(action, context);
    this.activeRecoveries.set(recoveryKey, recoveryPromise);

    try {
      const result = await recoveryPromise;
      return result;
    } finally {
      this.activeRecoveries.delete(recoveryKey);
    }
  }

  private async performRecoveryAction(action: ErrorRecoveryAction, context: ErrorContext): Promise<boolean> {
    const startTime = Date.now();

    try {
      switch (action.type) {
        case 'retry':
          return await this.performRetry(action, context);

        case 'refresh':
          return await this.performRefresh(action, context);

        case 'reauth':
          return await this.performReauth(action, context);

        case 'fallback':
          return await this.performFallback(action, context);

        default:
          return false;
      }
    } catch (error) {
      console.error(`Recovery action ${action.id} failed:`, error);
      return false;
    }
  }

  private async performRetry(action: ErrorRecoveryAction, context: ErrorContext): Promise<boolean> {
    const currentRetry = action.retryCount || 0;

    if (currentRetry >= (action.maxRetries || this.MAX_RETRY_ATTEMPTS)) {
      return false;
    }

    // Wait for the specified delay
    if (action.delay) {
      await new Promise((resolve) => setTimeout(resolve, action.delay));
    }

    try {
      // Increment retry count
      action.retryCount = currentRetry + 1;

      // Attempt the original operation again
      await this.authService.loginWithProvider(action.provider);
      return true;
    } catch (error) {
      // If we haven't exhausted retries, try again
      if (action.retryCount < (action.maxRetries || this.MAX_RETRY_ATTEMPTS)) {
        return this.performRetry(action, context);
      }
      return false;
    }
  }

  private async performRefresh(action: ErrorRecoveryAction, context: ErrorContext): Promise<boolean> {
    try {
      if (context.errorType === 'token_expired') {
        await this.authService.refresh();
      } else if (context.errorType === 'csrf_error') {
        this.authService.refreshCSRFToken(action.provider);
      } else {
        // Generic session refresh
        await this.authService.refreshExpiringSessions();
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  private async performReauth(action: ErrorRecoveryAction, context: ErrorContext): Promise<boolean> {
    try {
      // First logout the problematic session
      await this.authService.logoutProvider(action.provider);

      // Then attempt to login again
      await this.authService.loginWithProvider(action.provider);
      return true;
    } catch (error) {
      return false;
    }
  }

  private async performFallback(action: ErrorRecoveryAction, context: ErrorContext): Promise<boolean> {
    if (!action.fallbackProvider) {
      return false;
    }

    try {
      await this.authService.loginWithProvider(action.fallbackProvider);
      return true;
    } catch (error) {
      return false;
    }
  }

  private recordRecoveryAttempt(
    action: ErrorRecoveryAction,
    context: ErrorContext,
    success: boolean,
    duration?: number
  ): void {
    const attempt: RecoveryAttempt = {
      id: `${action.id}_${Date.now()}`,
      errorType: context.errorType,
      provider: action.provider,
      timestamp: new Date(),
      action,
      success,
      duration: duration || 0,
      errorMessage: success ? undefined : context.errorMessage,
    };

    const attempts = this.recoveryAttemptsSubject$.value;
    attempts.unshift(attempt);

    // Keep only last 50 attempts
    if (attempts.length > 50) {
      attempts.splice(50);
    }

    this.recoveryAttemptsSubject$.next(attempts);

    // Log to security audit
    this.securityAudit.logEvent(
      success ? 'recovery_success' : 'recovery_failure',
      success ? 'info' : 'warning',
      'error_recovery',
      `${action.type} recovery ${success ? 'succeeded' : 'failed'} for ${action.provider}`,
      { action, context, duration },
      {
        provider: action.provider,
        sessionId: context.sessionId,
        ipAddress: 'unknown',
        userAgent: navigator.userAgent,
      }
    );
  }

  private async waitForNetworkRecovery(provider: AuthProvider, error: any, retryCount: number): Promise<boolean> {
    return new Promise((resolve) => {
      const subscription = this.networkStatus$.subscribe((isOnline) => {
        if (isOnline && retryCount < this.MAX_RETRY_ATTEMPTS) {
          subscription.unsubscribe();
          // Retry after network is back
          this.handleAuthError(provider, error, { retryCount: retryCount + 1 }).then(resolve);
        }
      });

      // Timeout after 30 seconds
      setTimeout(() => {
        subscription.unsubscribe();
        resolve(false);
      }, this.SESSION_RECOVERY_TIMEOUT);
    });
  }

  private handleNetworkReconnection(): void {
    console.log('Network reconnected, checking for recovery opportunities');

    // Check for any pending recovery actions that were waiting for network
    const pendingActions = this.recoveryActionsSubject$.value.filter(
      (action) => action.type === 'retry' && action.automated
    );

    pendingActions.forEach((action) => {
      this.executeRecoveryAction(action, {
        provider: action.provider,
        errorType: 'network_error',
        errorMessage: 'Network reconnection recovery',
        timestamp: new Date(),
        networkConnected: true,
        retryCount: action.retryCount || 0,
        userAgent: navigator.userAgent,
      });
    });
  }

  private handleNetworkDisconnection(): void {
    console.log('Network disconnected, suspending authentication operations');

    // Clear any pending recovery actions that require network
    const actions = this.recoveryActionsSubject$.value.filter((action) => action.type !== 'retry');

    this.recoveryActionsSubject$.next(actions);
  }

  private handleSessionConflictError(conflict: any): void {
    const context: ErrorContext = {
      provider: conflict.primarySession.provider,
      errorType: 'session_conflict',
      errorMessage: `Session conflict: ${conflict.type}`,
      sessionId: conflict.primarySession.sessionId,
      timestamp: new Date(),
      networkConnected: this.networkStatusSubject$.value,
      retryCount: 0,
      userAgent: navigator.userAgent,
    };

    const actions = this.generateSessionConflictRecoveryActions(context, conflict);
    this.recoveryActionsSubject$.next(actions);
  }

  private generateSessionConflictRecoveryActions(context: ErrorContext, conflict: any): ErrorRecoveryAction[] {
    return [
      {
        id: `conflict_auto_merge_${context.provider}`,
        type: 'refresh',
        provider: context.provider,
        description: 'Automatically merge conflicting sessions',
        automated: true,
        priority: 1,
      },
      {
        id: `conflict_manual_${context.provider}`,
        type: 'manual',
        provider: context.provider,
        description: 'Manual session conflict resolution required',
        automated: false,
        priority: 2,
        userConfirmationRequired: true,
      },
    ];
  }

  private handleSessionExpiredError(provider: AuthProvider): void {
    this.handleAuthError(provider, new Error('Session expired'), {
      errorType: 'token_expired',
    });
  }

  private handleSessionExpiringWarning(provider: AuthProvider, minutesLeft?: number): void {
    // Proactively refresh sessions that are expiring soon
    const action: ErrorRecoveryAction = {
      id: `proactive_refresh_${provider}`,
      type: 'refresh',
      provider,
      description: `Proactively refresh session expiring in ${minutesLeft}m`,
      automated: true,
      priority: 1,
    };

    this.executeRecoveryAction(action, {
      provider,
      errorType: 'token_expiring',
      errorMessage: `Session expiring in ${minutesLeft} minutes`,
      timestamp: new Date(),
      networkConnected: this.networkStatusSubject$.value,
      retryCount: 0,
      userAgent: navigator.userAgent,
    });
  }

  private getProviderDisplayName(provider: AuthProvider): string {
    switch (provider) {
      case 'anonymous':
        return 'Guest';
      case 'oidc':
        return 'Organization';
      case 'google':
        return 'Google';
      case 'facebook':
        return 'Facebook';
      case 'github':
        return 'GitHub';
      case 'microsoft':
        return 'Microsoft';
      default:
        return provider.charAt(0).toUpperCase() + provider.slice(1);
    }
  }

  /**
   * Public API methods
   */

  public getActiveRecoveryActions(): ErrorRecoveryAction[] {
    return this.recoveryActionsSubject$.value;
  }

  public getRecentRecoveryAttempts(limit = 10): RecoveryAttempt[] {
    return this.recoveryAttemptsSubject$.value.slice(0, limit);
  }

  public clearRecoveryActions(): void {
    this.recoveryActionsSubject$.next([]);
  }

  public async executeManualRecovery(actionId: string): Promise<boolean> {
    const action = this.recoveryActionsSubject$.value.find((a) => a.id === actionId);
    if (!action) {
      return false;
    }

    const context: ErrorContext = {
      provider: action.provider,
      errorType: 'manual_recovery',
      errorMessage: 'Manual recovery initiated',
      timestamp: new Date(),
      networkConnected: this.networkStatusSubject$.value,
      retryCount: 0,
      userAgent: navigator.userAgent,
    };

    return this.executeRecoveryAction(action, context);
  }

  public getRecoveryStatistics(): {
    totalAttempts: number;
    successfulAttempts: number;
    failedAttempts: number;
    successRate: number;
    commonErrorTypes: { [key: string]: number };
    averageRecoveryTime: number;
  } {
    const attempts = this.recoveryAttemptsSubject$.value;
    const successful = attempts.filter((a) => a.success);
    const failed = attempts.filter((a) => !a.success);

    const errorTypes: { [key: string]: number } = {};
    attempts.forEach((attempt) => {
      errorTypes[attempt.errorType] = (errorTypes[attempt.errorType] || 0) + 1;
    });

    const totalDuration = attempts.reduce((sum, attempt) => sum + attempt.duration, 0);

    return {
      totalAttempts: attempts.length,
      successfulAttempts: successful.length,
      failedAttempts: failed.length,
      successRate: attempts.length > 0 ? successful.length / attempts.length : 0,
      commonErrorTypes: errorTypes,
      averageRecoveryTime: attempts.length > 0 ? totalDuration / attempts.length : 0,
    };
  }

  public ngOnDestroy(): void {
    if (this.networkCheckTimer) {
      clearInterval(this.networkCheckTimer);
    }
  }
}
