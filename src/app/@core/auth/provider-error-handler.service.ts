import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, timer } from 'rxjs';
import { catchError, retry, mergeMap, delay } from 'rxjs/operators';
import { AuthProvider } from './auth.service';
import { ErrorRecoveryService } from './error-recovery.service';
import { SecurityAuditService } from './security-audit.service';
import { RateLimitingService } from './rate-limiting.service';

export interface ProviderErrorPattern {
  provider: AuthProvider;
  pattern: RegExp | string;
  errorCode?: string | number;
  httpStatus?: number;
  category: 'auth_failure' | 'network_error' | 'rate_limit' | 'validation_error' | 'server_error' | 'config_error';
  severity: 'low' | 'medium' | 'high' | 'critical';
  userMessage: string;
  techMessage: string;
  recoverable: boolean;
  retryable: boolean;
  requiresUserAction: boolean;
  suggestedActions: string[];
}

export interface ProcessedError {
  originalError: any;
  provider: AuthProvider;
  category: string;
  severity: string;
  userMessage: string;
  techMessage: string;
  errorCode?: string;
  httpStatus?: number;
  recoverable: boolean;
  retryable: boolean;
  requiresUserAction: boolean;
  suggestedActions: string[];
  timestamp: Date;
  correlationId: string;
  context?: any;
}

@Injectable({
  providedIn: 'root',
})
export class ProviderErrorHandlerService {
  private errorPatterns: ProviderErrorPattern[] = [];
  private errorCounts = new Map<string, number>();
  private readonly MAX_ERROR_HISTORY = 100;
  private errorHistory: ProcessedError[] = [];

  constructor(
    private errorRecovery: ErrorRecoveryService,
    private securityAudit: SecurityAuditService,
    private rateLimiting: RateLimitingService
  ) {
    this.initializeErrorPatterns();
  }

  private initializeErrorPatterns(): void {
    this.errorPatterns = [
      // Google OAuth Errors
      {
        provider: 'google',
        pattern: /access_denied|consent_required|user_denied/i,
        category: 'auth_failure',
        severity: 'medium',
        userMessage: 'Access was denied by Google. Please try signing in again and grant the necessary permissions.',
        techMessage: 'Google OAuth access denied or consent required',
        recoverable: true,
        retryable: true,
        requiresUserAction: true,
        suggestedActions: ['retry_auth', 'check_permissions'],
      },
      {
        provider: 'google',
        pattern: /invalid_grant|authorization_pending/i,
        category: 'auth_failure',
        severity: 'medium',
        userMessage: 'Google login session has expired. Please sign in again.',
        techMessage: 'Google OAuth grant invalid or authorization pending',
        recoverable: true,
        retryable: true,
        requiresUserAction: true,
        suggestedActions: ['reauth', 'refresh_token'],
      },
      {
        provider: 'google',
        pattern: /invalid_client|client_id|unauthorized_client/i,
        category: 'config_error',
        severity: 'critical',
        userMessage: 'There is a configuration issue with Google login. Please contact support.',
        techMessage: 'Google OAuth client configuration error',
        recoverable: false,
        retryable: false,
        requiresUserAction: false,
        suggestedActions: ['contact_support', 'check_config'],
      },
      {
        provider: 'google',
        pattern: /rate_limit|quota|limit_exceeded/i,
        httpStatus: 429,
        category: 'rate_limit',
        severity: 'medium',
        userMessage: 'Too many login attempts. Please wait a moment and try again.',
        techMessage: 'Google API rate limit exceeded',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['wait_and_retry', 'use_alternative'],
      },

      // Facebook OAuth Errors
      {
        provider: 'facebook',
        pattern: /access_denied|user_denied|permissions_error/i,
        category: 'auth_failure',
        severity: 'medium',
        userMessage: 'Facebook login was cancelled or permissions were denied. Please try again.',
        techMessage: 'Facebook OAuth access denied',
        recoverable: true,
        retryable: true,
        requiresUserAction: true,
        suggestedActions: ['retry_auth', 'check_permissions'],
      },
      {
        provider: 'facebook',
        pattern: /invalid_grant|token_expired|expired_token/i,
        category: 'auth_failure',
        severity: 'medium',
        userMessage: 'Your Facebook session has expired. Please sign in again.',
        techMessage: 'Facebook token expired or invalid grant',
        recoverable: true,
        retryable: true,
        requiresUserAction: true,
        suggestedActions: ['reauth', 'refresh_token'],
      },
      {
        provider: 'facebook',
        pattern: /invalid_client|app_not_setup|invalid_app_id/i,
        category: 'config_error',
        severity: 'critical',
        userMessage: 'Facebook login is not properly configured. Please contact support.',
        techMessage: 'Facebook app configuration error',
        recoverable: false,
        retryable: false,
        requiresUserAction: false,
        suggestedActions: ['contact_support', 'check_config'],
      },
      {
        provider: 'facebook',
        pattern: /rate_limit|too_many_calls|api_too_many_calls/i,
        httpStatus: 429,
        category: 'rate_limit',
        severity: 'medium',
        userMessage: 'Too many Facebook login attempts. Please wait and try again.',
        techMessage: 'Facebook API rate limit exceeded',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['wait_and_retry', 'use_alternative'],
      },

      // GitHub OAuth Errors
      {
        provider: 'github',
        pattern: /access_denied|user_denied/i,
        category: 'auth_failure',
        severity: 'medium',
        userMessage: 'GitHub login was cancelled. Please try again to continue.',
        techMessage: 'GitHub OAuth access denied',
        recoverable: true,
        retryable: true,
        requiresUserAction: true,
        suggestedActions: ['retry_auth'],
      },
      {
        provider: 'github',
        pattern: /bad_verification_code|incorrect_client_credentials/i,
        category: 'auth_failure',
        severity: 'high',
        userMessage: 'GitHub authentication failed. Please try signing in again.',
        techMessage: 'GitHub OAuth verification failed',
        recoverable: true,
        retryable: true,
        requiresUserAction: true,
        suggestedActions: ['reauth', 'clear_cache'],
      },
      {
        provider: 'github',
        pattern: /invalid_client_id|unregistered_client/i,
        category: 'config_error',
        severity: 'critical',
        userMessage: 'GitHub login configuration error. Please contact support.',
        techMessage: 'GitHub OAuth client configuration invalid',
        recoverable: false,
        retryable: false,
        requiresUserAction: false,
        suggestedActions: ['contact_support', 'check_config'],
      },
      {
        provider: 'github',
        pattern: /rate_limit|abuse_detection|secondary_rate_limit/i,
        httpStatus: 429,
        category: 'rate_limit',
        severity: 'medium',
        userMessage: 'GitHub rate limit reached. Please wait before trying again.',
        techMessage: 'GitHub API rate limit or abuse detection triggered',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['wait_and_retry', 'use_alternative'],
      },

      // Microsoft OAuth Errors
      {
        provider: 'microsoft',
        pattern: /access_denied|consent_required|user_cancelled/i,
        category: 'auth_failure',
        severity: 'medium',
        userMessage: 'Microsoft login was cancelled or consent was not provided. Please try again.',
        techMessage: 'Microsoft OAuth access denied or consent required',
        recoverable: true,
        retryable: true,
        requiresUserAction: true,
        suggestedActions: ['retry_auth', 'admin_consent'],
      },
      {
        provider: 'microsoft',
        pattern: /invalid_grant|token_expired|refresh_token_expired/i,
        category: 'auth_failure',
        severity: 'medium',
        userMessage: 'Your Microsoft session has expired. Please sign in again.',
        techMessage: 'Microsoft token expired or invalid grant',
        recoverable: true,
        retryable: true,
        requiresUserAction: true,
        suggestedActions: ['reauth', 'refresh_token'],
      },
      {
        provider: 'microsoft',
        pattern: /invalid_client|client_authentication_failed/i,
        category: 'config_error',
        severity: 'critical',
        userMessage: 'Microsoft login configuration error. Please contact support.',
        techMessage: 'Microsoft OAuth client authentication failed',
        recoverable: false,
        retryable: false,
        requiresUserAction: false,
        suggestedActions: ['contact_support', 'check_config'],
      },
      {
        provider: 'microsoft',
        pattern: /throttled_request|too_many_requests/i,
        httpStatus: 429,
        category: 'rate_limit',
        severity: 'medium',
        userMessage: 'Too many Microsoft login requests. Please wait and try again.',
        techMessage: 'Microsoft Graph API throttling applied',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['wait_and_retry', 'exponential_backoff'],
      },

      // OIDC Generic Errors
      {
        provider: 'oidc',
        pattern: /access_denied|consent_required/i,
        category: 'auth_failure',
        severity: 'medium',
        userMessage: 'Login was cancelled or permissions were not granted. Please try again.',
        techMessage: 'OIDC access denied or consent required',
        recoverable: true,
        retryable: true,
        requiresUserAction: true,
        suggestedActions: ['retry_auth', 'check_permissions'],
      },
      {
        provider: 'oidc',
        pattern: /invalid_grant|authorization_pending|expired_token/i,
        category: 'auth_failure',
        severity: 'medium',
        userMessage: 'Your session has expired. Please sign in again.',
        techMessage: 'OIDC grant invalid or token expired',
        recoverable: true,
        retryable: true,
        requiresUserAction: true,
        suggestedActions: ['reauth', 'refresh_token'],
      },
      {
        provider: 'oidc',
        pattern: /invalid_client|unauthorized_client|invalid_client_id/i,
        category: 'config_error',
        severity: 'critical',
        userMessage: 'Login service configuration error. Please contact support.',
        techMessage: 'OIDC client configuration invalid',
        recoverable: false,
        retryable: false,
        requiresUserAction: false,
        suggestedActions: ['contact_support', 'check_config'],
      },

      // Anonymous Auth Errors
      {
        provider: 'anonymous',
        pattern: /session_expired|invalid_session/i,
        category: 'auth_failure',
        severity: 'low',
        userMessage: 'Your guest session has expired. Starting a new session.',
        techMessage: 'Anonymous session expired',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['create_new_session'],
      },
      {
        provider: 'anonymous',
        pattern: /permission_denied|insufficient_privileges/i,
        category: 'auth_failure',
        severity: 'medium',
        userMessage: 'Guest access is limited. Sign in with an account for full access.',
        techMessage: 'Anonymous user insufficient permissions',
        recoverable: true,
        retryable: false,
        requiresUserAction: true,
        suggestedActions: ['upgrade_account', 'signin_required'],
      },

      // Network and General Errors
      {
        provider: 'google',
        pattern: /network|fetch|connection|timeout/i,
        category: 'network_error',
        severity: 'medium',
        userMessage: 'Connection issue detected. Please check your internet and try again.',
        techMessage: 'Network connectivity issue',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['check_network', 'retry_later'],
      },
      {
        provider: 'facebook',
        pattern: /network|fetch|connection|timeout/i,
        category: 'network_error',
        severity: 'medium',
        userMessage: 'Connection issue detected. Please check your internet and try again.',
        techMessage: 'Network connectivity issue',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['check_network', 'retry_later'],
      },
      {
        provider: 'github',
        pattern: /network|fetch|connection|timeout/i,
        category: 'network_error',
        severity: 'medium',
        userMessage: 'Connection issue detected. Please check your internet and try again.',
        techMessage: 'Network connectivity issue',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['check_network', 'retry_later'],
      },
      {
        provider: 'microsoft',
        pattern: /network|fetch|connection|timeout/i,
        category: 'network_error',
        severity: 'medium',
        userMessage: 'Connection issue detected. Please check your internet and try again.',
        techMessage: 'Network connectivity issue',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['check_network', 'retry_later'],
      },
      {
        provider: 'oidc',
        pattern: /network|fetch|connection|timeout/i,
        category: 'network_error',
        severity: 'medium',
        userMessage: 'Connection issue detected. Please check your internet and try again.',
        techMessage: 'Network connectivity issue',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['check_network', 'retry_later'],
      },
      {
        provider: 'anonymous',
        pattern: /network|fetch|connection|timeout/i,
        category: 'network_error',
        severity: 'low',
        userMessage: 'Connection issue detected. Some features may be limited.',
        techMessage: 'Network connectivity issue in anonymous mode',
        recoverable: true,
        retryable: true,
        requiresUserAction: false,
        suggestedActions: ['offline_mode', 'retry_later'],
      },
    ];
  }

  /**
   * Process an error for a specific provider
   */
  public processError(provider: AuthProvider, error: any, context?: any): ProcessedError {
    const correlationId = this.generateCorrelationId();
    const timestamp = new Date();

    // Find matching error pattern
    const pattern = this.findMatchingPattern(provider, error);

    const processedError: ProcessedError = {
      originalError: error,
      provider,
      category: pattern?.category || 'unknown_error',
      severity: pattern?.severity || 'medium',
      userMessage: pattern?.userMessage || this.getGenericUserMessage(error),
      techMessage: pattern?.techMessage || error.message || error.toString(),
      errorCode: this.extractErrorCode(error),
      httpStatus: this.extractHttpStatus(error),
      recoverable: pattern?.recoverable ?? true,
      retryable: pattern?.retryable ?? true,
      requiresUserAction: pattern?.requiresUserAction ?? false,
      suggestedActions: pattern?.suggestedActions || ['retry'],
      timestamp,
      correlationId,
      context,
    };

    // Track error occurrence
    this.trackErrorOccurrence(processedError);

    // Log to security audit
    this.logToSecurityAudit(processedError);

    // Add to error history
    this.addToErrorHistory(processedError);

    return processedError;
  }

  /**
   * Handle error with automatic recovery
   */
  public handleError(provider: AuthProvider, error: any, context?: any): Observable<never> {
    const processedError = this.processError(provider, error, context);

    // Trigger error recovery if appropriate
    if (processedError.recoverable) {
      this.errorRecovery.handleAuthError(provider, error, {
        errorType: processedError.category,
        sessionId: context?.sessionId,
        retryCount: context?.retryCount || 0,
        additionalData: processedError,
      });
    }

    // Apply rate limiting if needed
    if (processedError.category === 'rate_limit') {
      this.rateLimiting.recordAttempt(provider, false, {
        ipAddress: 'unknown',
        userAgent: navigator.userAgent,
      });
    }

    return throwError(() => processedError);
  }

  /**
   * Create error handler function for RxJS operators
   */
  public createErrorHandler(provider: AuthProvider, context?: any) {
    return (error: any): Observable<never> => {
      return this.handleError(provider, error, context);
    };
  }

  /**
   * Retry operator with provider-specific configuration
   */
  public createRetryOperator(provider: AuthProvider, maxRetries = 3) {
    return retry({
      count: maxRetries,
      delay: (error: any, retryCount: number) => {
        const processedError = this.processError(provider, error);

        if (!processedError.retryable) {
          throw error;
        }

        // Calculate delay based on error type and retry count
        const baseDelay = this.getRetryDelay(processedError.category, retryCount);
        return timer(baseDelay);
      },
    });
  }

  /**
   * Advanced error handler with recovery and fallback
   */
  public handleErrorWithRecovery<T>(provider: AuthProvider, fallbackValue?: T, context?: any) {
    return (error: any): Observable<T> => {
      const processedError = this.processError(provider, error, context);

      // Try recovery first
      if (processedError.recoverable) {
        return this.errorRecovery
          .handleAuthError(provider, error, {
            errorType: processedError.category,
            sessionId: context?.sessionId,
            retryCount: context?.retryCount || 0,
            additionalData: processedError,
          })
          .then((recovered) => {
            if (recovered && fallbackValue !== undefined) {
              return of(fallbackValue);
            }
            throw processedError;
          })
          .catch(() => {
            if (fallbackValue !== undefined) {
              return of(fallbackValue);
            }
            throw processedError;
          });
      }

      // Return fallback if provided
      if (fallbackValue !== undefined) {
        return of(fallbackValue);
      }

      return throwError(() => processedError);
    };
  }

  private findMatchingPattern(provider: AuthProvider, error: any): ProviderErrorPattern | undefined {
    const errorString = this.errorToString(error);
    const httpStatus = this.extractHttpStatus(error);

    return this.errorPatterns.find((pattern) => {
      // Check provider match
      if (pattern.provider !== provider) {
        return false;
      }

      // Check HTTP status if specified
      if (pattern.httpStatus && httpStatus !== pattern.httpStatus) {
        return false;
      }

      // Check pattern match
      if (pattern.pattern instanceof RegExp) {
        return pattern.pattern.test(errorString);
      } else {
        return errorString.toLowerCase().includes(pattern.pattern.toLowerCase());
      }
    });
  }

  private errorToString(error: any): string {
    if (typeof error === 'string') {
      return error;
    }

    if (error instanceof HttpErrorResponse) {
      return `${error.message} ${error.error?.error_description || ''} ${error.error?.error || ''}`;
    }

    if (error.message) {
      return error.message;
    }

    if (error.error) {
      return this.errorToString(error.error);
    }

    return JSON.stringify(error);
  }

  private extractErrorCode(error: any): string | undefined {
    if (error.error?.error) {
      return error.error.error;
    }

    if (error.error_code) {
      return error.error_code;
    }

    if (error.code) {
      return error.code;
    }

    return undefined;
  }

  private extractHttpStatus(error: any): number | undefined {
    if (error instanceof HttpErrorResponse) {
      return error.status;
    }

    if (error.status) {
      return error.status;
    }

    if (error.statusCode) {
      return error.statusCode;
    }

    return undefined;
  }

  private getGenericUserMessage(error: any): string {
    const httpStatus = this.extractHttpStatus(error);

    switch (httpStatus) {
      case 400:
        return 'Invalid request. Please check your input and try again.';
      case 401:
        return 'Authentication failed. Please sign in again.';
      case 403:
        return "Access denied. You don't have permission for this action.";
      case 404:
        return 'Service not found. Please try again later.';
      case 429:
        return 'Too many requests. Please wait and try again.';
      case 500:
        return 'Server error occurred. Please try again later.';
      case 502:
      case 503:
      case 504:
        return 'Service temporarily unavailable. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  private getRetryDelay(category: string, retryCount: number): number {
    const baseDelays: { [key: string]: number } = {
      network_error: 1000,
      rate_limit: 5000,
      auth_failure: 2000,
      server_error: 3000,
      validation_error: 1000,
      config_error: 0, // Don't retry config errors
    };

    const baseDelay = baseDelays[category] || 1000;

    if (baseDelay === 0) {
      throw new Error('Non-retryable error');
    }

    // Exponential backoff with jitter
    const exponentialDelay = baseDelay * Math.pow(2, retryCount - 1);
    const jitter = Math.random() * 1000;

    return Math.min(exponentialDelay + jitter, 30000); // Max 30 seconds
  }

  private generateCorrelationId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private trackErrorOccurrence(error: ProcessedError): void {
    const key = `${error.provider}_${error.category}`;
    const count = this.errorCounts.get(key) || 0;
    this.errorCounts.set(key, count + 1);

    // Log patterns if errors are frequent
    if (count > 5) {
      console.warn(`Frequent errors detected for ${error.provider}: ${error.category} (${count + 1} occurrences)`);
    }
  }

  private logToSecurityAudit(error: ProcessedError): void {
    const severity =
      error.severity === 'critical'
        ? 'critical'
        : error.severity === 'high'
        ? 'error'
        : error.severity === 'medium'
        ? 'warning'
        : 'info';

    this.securityAudit.logEvent(
      'provider_error',
      severity,
      'authentication',
      error.techMessage,
      {
        category: error.category,
        errorCode: error.errorCode,
        httpStatus: error.httpStatus,
        recoverable: error.recoverable,
        retryable: error.retryable,
        suggestedActions: error.suggestedActions,
        correlationId: error.correlationId,
      },
      {
        provider: error.provider,
        ipAddress: 'unknown',
        userAgent: navigator.userAgent,
      }
    );
  }

  private addToErrorHistory(error: ProcessedError): void {
    this.errorHistory.unshift(error);

    // Keep only recent errors
    if (this.errorHistory.length > this.MAX_ERROR_HISTORY) {
      this.errorHistory.splice(this.MAX_ERROR_HISTORY);
    }
  }

  /**
   * Public API methods
   */

  public getErrorHistory(provider?: AuthProvider, limit = 20): ProcessedError[] {
    let filtered = this.errorHistory;

    if (provider) {
      filtered = filtered.filter((e) => e.provider === provider);
    }

    return filtered.slice(0, limit);
  }

  public getErrorStatistics(): {
    totalErrors: number;
    errorsByProvider: { [provider: string]: number };
    errorsByCategory: { [category: string]: number };
    errorsBySeverity: { [severity: string]: number };
    recoverableErrors: number;
    retryableErrors: number;
  } {
    const stats = {
      totalErrors: this.errorHistory.length,
      errorsByProvider: {} as { [provider: string]: number },
      errorsByCategory: {} as { [category: string]: number },
      errorsBySeverity: {} as { [severity: string]: number },
      recoverableErrors: 0,
      retryableErrors: 0,
    };

    this.errorHistory.forEach((error) => {
      // By provider
      stats.errorsByProvider[error.provider] = (stats.errorsByProvider[error.provider] || 0) + 1;

      // By category
      stats.errorsByCategory[error.category] = (stats.errorsByCategory[error.category] || 0) + 1;

      // By severity
      stats.errorsBySeverity[error.severity] = (stats.errorsBySeverity[error.severity] || 0) + 1;

      // Recovery flags
      if (error.recoverable) stats.recoverableErrors++;
      if (error.retryable) stats.retryableErrors++;
    });

    return stats;
  }

  public clearErrorHistory(): void {
    this.errorHistory = [];
    this.errorCounts.clear();
  }

  public addCustomErrorPattern(pattern: ProviderErrorPattern): void {
    this.errorPatterns.push(pattern);
  }

  public removeErrorPattern(provider: AuthProvider, patternId: string): void {
    this.errorPatterns = this.errorPatterns.filter(
      (p) => !(p.provider === provider && p.pattern.toString().includes(patternId))
    );
  }

  public getErrorPatterns(provider?: AuthProvider): ProviderErrorPattern[] {
    if (provider) {
      return this.errorPatterns.filter((p) => p.provider === provider);
    }
    return [...this.errorPatterns];
  }
}
