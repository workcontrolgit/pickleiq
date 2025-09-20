import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, combineLatest } from 'rxjs';
import { map, filter, startWith } from 'rxjs/operators';
import { AuthService, AuthProvider } from './auth.service';
import { SessionManagerService, ProviderSession } from './session-manager.service';
import { SecurityAuditService, SecurityAuditEvent } from './security-audit.service';
import { UserPreferencesService } from './user-preferences.service';
import { ErrorRecoveryService } from './error-recovery.service';

export interface AuthFlow {
  id: string;
  provider: AuthProvider;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  status: 'started' | 'in_progress' | 'completed' | 'failed' | 'abandoned';
  steps: AuthFlowStep[];
  metadata: {
    userAgent: string;
    ipAddress: string;
    referrer?: string;
    sessionId?: string;
    correlationId: string;
  };
  performance: {
    redirectTime?: number;
    tokenExchangeTime?: number;
    profileFetchTime?: number;
    totalTime?: number;
  };
  errors?: string[];
  recoveryAttempts?: number;
  finalOutcome?: 'success' | 'failure' | 'timeout' | 'user_cancelled';
}

export interface AuthFlowStep {
  id: string;
  name: string;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  status: 'started' | 'completed' | 'failed' | 'skipped';
  data?: any;
  error?: string;
}

export interface AuthMetrics {
  totalLogins: number;
  successfulLogins: number;
  failedLogins: number;
  averageLoginTime: number;
  successRate: number;
  mostUsedProvider: AuthProvider | null;
  providerMetrics: { [provider: string]: ProviderMetrics };
  recentFlows: AuthFlow[];
  errorPatterns: { [pattern: string]: number };
  performanceMetrics: PerformanceMetrics;
  securityMetrics: SecurityMetrics;
}

export interface ProviderMetrics {
  provider: AuthProvider;
  totalAttempts: number;
  successfulAttempts: number;
  failedAttempts: number;
  averageTime: number;
  successRate: number;
  lastUsed?: Date;
  commonErrors: string[];
  performanceP95: number;
  performanceP99: number;
}

export interface PerformanceMetrics {
  averageRedirectTime: number;
  averageTokenExchangeTime: number;
  averageProfileFetchTime: number;
  averageTotalTime: number;
  p95TotalTime: number;
  p99TotalTime: number;
  slowestFlow?: AuthFlow;
  fastestFlow?: AuthFlow;
}

export interface SecurityMetrics {
  securityEvents: number;
  suspiciousAttempts: number;
  blockedAttempts: number;
  rateLimitHits: number;
  csrfFailures: number;
  sessionConflicts: number;
  riskScore: number;
}

export interface MonitoringAlert {
  id: string;
  type: 'performance' | 'security' | 'availability' | 'error_rate';
  severity: 'info' | 'warning' | 'error' | 'critical';
  message: string;
  details: any;
  timestamp: Date;
  acknowledged: boolean;
  resolvedAt?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AuthMonitoringService {
  private readonly MAX_FLOWS_HISTORY = 500;
  private readonly METRICS_UPDATE_INTERVAL = 30000; // 30 seconds
  private readonly ALERT_THRESHOLD_ERROR_RATE = 0.3; // 30%
  private readonly ALERT_THRESHOLD_SLOW_LOGIN = 10000; // 10 seconds
  private readonly ALERT_THRESHOLD_SECURITY_EVENTS = 5; // per hour

  private activeFlowsSubject$ = new BehaviorSubject<Map<string, AuthFlow>>(new Map());
  private completedFlowsSubject$ = new BehaviorSubject<AuthFlow[]>([]);
  private metricsSubject$ = new BehaviorSubject<AuthMetrics | null>(null);
  private alertsSubject$ = new BehaviorSubject<MonitoringAlert[]>([]);

  public activeFlows$ = this.activeFlowsSubject$.asObservable();
  public completedFlows$ = this.completedFlowsSubject$.asObservable();
  public metrics$ = this.metricsSubject$.asObservable();
  public alerts$ = this.alertsSubject$.asObservable();

  private metricsUpdateTimer?: number;

  constructor(
    private authService: AuthService,
    private sessionManager: SessionManagerService,
    private securityAudit: SecurityAuditService,
    private userPreferences: UserPreferencesService,
    private errorRecovery: ErrorRecoveryService
  ) {
    this.initializeMonitoring();
    this.startMetricsUpdates();
  }

  private initializeMonitoring(): void {
    // Monitor authentication events
    this.authService.isAuthenticated$.subscribe((isAuth) => {
      if (isAuth) {
        this.recordAuthEvent('authentication_success');
      }
    });

    // Monitor provider changes
    this.authService.authProvider$.subscribe((provider) => {
      if (provider) {
        this.recordAuthEvent('provider_activated', { provider });
      }
    });

    // Monitor session events
    this.sessionManager.sessions$.subscribe((sessions) => {
      this.recordAuthEvent('sessions_updated', {
        sessionCount: sessions.size,
        providers: Array.from(sessions.keys()),
      });
    });

    // Monitor session conflicts
    this.sessionManager.conflicts$.subscribe((conflicts) => {
      if (conflicts.length > 0) {
        this.recordAuthEvent('session_conflicts', { conflicts });
        this.checkSecurityAlerts();
      }
    });

    // Monitor error recovery events
    this.errorRecovery.recoveryAttempts$.subscribe((attempts) => {
      attempts.forEach((attempt) => {
        this.recordAuthEvent('error_recovery', {
          provider: attempt.provider,
          success: attempt.success,
          errorType: attempt.errorType,
        });
      });
    });

    // Monitor security audit events
    this.securityAudit.events$.subscribe((events) => {
      const recentEvents = events.filter(
        (e) => Date.now() - e.timestamp.getTime() < 60000 // Last minute
      );

      if (recentEvents.length > 0) {
        this.checkSecurityAlerts();
      }
    });
  }

  private startMetricsUpdates(): void {
    this.metricsUpdateTimer = window.setInterval(() => {
      this.updateMetrics();
    }, this.METRICS_UPDATE_INTERVAL);

    // Initial metrics calculation
    this.updateMetrics();
  }

  /**
   * Start tracking an authentication flow
   */
  public startAuthFlow(provider: AuthProvider, metadata: Partial<AuthFlow['metadata']> = {}): string {
    const flowId = this.generateFlowId();
    const correlationId = this.generateCorrelationId();

    const flow: AuthFlow = {
      id: flowId,
      provider,
      startTime: new Date(),
      status: 'started',
      steps: [],
      metadata: {
        userAgent: navigator.userAgent,
        ipAddress: 'unknown',
        correlationId,
        ...metadata,
      },
      performance: {},
      errors: [],
      recoveryAttempts: 0,
    };

    this.addFlowStep(flowId, 'auth_initiation', { provider });

    const activeFlows = this.activeFlowsSubject$.value;
    activeFlows.set(flowId, flow);
    this.activeFlowsSubject$.next(activeFlows);

    // Log flow start
    this.securityAudit.logAuthEvent('auth_flow_started', provider, {
      flowId,
      correlationId,
      ipAddress: flow.metadata.ipAddress,
      userAgent: flow.metadata.userAgent,
    });

    return flowId;
  }

  /**
   * Add a step to an authentication flow
   */
  public addFlowStep(flowId: string, stepName: string, data?: any, startTime?: Date): void {
    const activeFlows = this.activeFlowsSubject_.value;
    const flow = activeFlows.get(flowId);

    if (!flow) {
      console.warn(`Auth flow ${flowId} not found`);
      return;
    }

    const stepId = `${flowId}_${stepName}_${Date.now()}`;
    const step: AuthFlowStep = {
      id: stepId,
      name: stepName,
      startTime: startTime || new Date(),
      status: 'started',
      data,
    };

    flow.steps.push(step);
    flow.status = 'in_progress';

    activeFlows.set(flowId, flow);
    this.activeFlowsSubject$.next(activeFlows);
  }

  /**
   * Complete a flow step
   */
  public completeFlowStep(flowId: string, stepName: string, result?: any, error?: string): void {
    const activeFlows = this.activeFlowsSubject$.value;
    const flow = activeFlows.get(flowId);

    if (!flow) {
      return;
    }

    const step = flow.steps.find((s) => s.name === stepName && !s.endTime);
    if (step) {
      step.endTime = new Date();
      step.duration = step.endTime.getTime() - step.startTime.getTime();
      step.status = error ? 'failed' : 'completed';
      step.data = { ...step.data, result };

      if (error) {
        step.error = error;
        flow.errors?.push(`${stepName}: ${error}`);
      }

      // Record performance metrics
      this.recordStepPerformance(flow, step);
    }

    activeFlows.set(flowId, flow);
    this.activeFlowsSubject$.next(activeFlows);
  }

  /**
   * Complete an authentication flow
   */
  public completeAuthFlow(flowId: string, outcome: AuthFlow['finalOutcome'], result?: any): void {
    const activeFlows = this.activeFlowsSubject$.value;
    const flow = activeFlows.get(flowId);

    if (!flow) {
      return;
    }

    flow.endTime = new Date();
    flow.duration = flow.endTime.getTime() - flow.startTime.getTime();
    flow.finalOutcome = outcome;
    flow.status = outcome === 'success' ? 'completed' : 'failed';

    // Calculate total performance metrics
    flow.performance.totalTime = flow.duration;

    // Add to completed flows
    const completedFlows = this.completedFlowsSubject_.value;
    completedFlows.unshift(flow);

    // Keep only recent flows
    if (completedFlows.length > this.MAX_FLOWS_HISTORY) {
      completedFlows.splice(this.MAX_FLOWS_HISTORY);
    }

    this.completedFlowsSubject$.next(completedFlows);

    // Remove from active flows
    activeFlows.delete(flowId);
    this.activeFlowsSubject$.next(activeFlows);

    // Log flow completion
    this.securityAudit.logAuthEvent(outcome === 'success' ? 'auth_flow_completed' : 'auth_flow_failed', flow.provider, {
      flowId,
      correlationId: flow.metadata.correlationId,
      duration: flow.duration,
      stepCount: flow.steps.length,
      errors: flow.errors,
      ipAddress: flow.metadata.ipAddress,
      userAgent: flow.metadata.userAgent,
    });

    // Check for performance alerts
    this.checkPerformanceAlerts(flow);

    // Update metrics
    this.updateMetrics();
  }

  /**
   * Record error recovery attempt
   */
  public recordRecoveryAttempt(flowId: string, errorType: string, success: boolean): void {
    const activeFlows = this.activeFlowsSubject_.value;
    const flow = activeFlows.get(flowId);

    if (flow) {
      flow.recoveryAttempts = (flow.recoveryAttempts || 0) + 1;
      this.addFlowStep(flowId, 'error_recovery', { errorType, success });

      if (success) {
        this.completeFlowStep(flowId, 'error_recovery', { recovered: true });
      } else {
        this.completeFlowStep(flowId, 'error_recovery', undefined, `Recovery failed: ${errorType}`);
      }
    }
  }

  /**
   * Record authentication event
   */
  public recordAuthEvent(eventType: string, data?: any): void {
    // This creates a lightweight event record for monitoring
    const event = {
      type: eventType,
      timestamp: new Date(),
      data: data || {},
    };

    // Add to any active flows if relevant
    if (data?.flowId) {
      this.addFlowStep(data.flowId, eventType, data);
    }
  }

  private recordStepPerformance(flow: AuthFlow, step: AuthFlowStep): void {
    switch (step.name) {
      case 'oauth_redirect':
        flow.performance.redirectTime = step.duration;
        break;
      case 'token_exchange':
        flow.performance.tokenExchangeTime = step.duration;
        break;
      case 'profile_fetch':
        flow.performance.profileFetchTime = step.duration;
        break;
    }
  }

  private updateMetrics(): void {
    const completedFlows = this.completedFlowsSubject_.value;
    const securityEvents = this.securityAudit.getAllEvents();

    if (completedFlows.length === 0) {
      return;
    }

    const metrics: AuthMetrics = {
      totalLogins: completedFlows.length,
      successfulLogins: completedFlows.filter((f) => f.finalOutcome === 'success').length,
      failedLogins: completedFlows.filter((f) => f.finalOutcome === 'failure').length,
      averageLoginTime: this.calculateAverageTime(completedFlows),
      successRate: this.calculateSuccessRate(completedFlows),
      mostUsedProvider: this.findMostUsedProvider(completedFlows),
      providerMetrics: this.calculateProviderMetrics(completedFlows),
      recentFlows: completedFlows.slice(0, 10),
      errorPatterns: this.analyzeErrorPatterns(completedFlows),
      performanceMetrics: this.calculatePerformanceMetrics(completedFlows),
      securityMetrics: this.calculateSecurityMetrics(securityEvents),
    };

    this.metricsSubject$.next(metrics);

    // Check for alerts
    this.checkErrorRateAlerts(metrics);
  }

  private calculateAverageTime(flows: AuthFlow[]): number {
    const validFlows = flows.filter((f) => f.duration && f.duration > 0);
    if (validFlows.length === 0) return 0;

    const totalTime = validFlows.reduce((sum, f) => sum + (f.duration || 0), 0);
    return totalTime / validFlows.length;
  }

  private calculateSuccessRate(flows: AuthFlow[]): number {
    if (flows.length === 0) return 0;
    const successful = flows.filter((f) => f.finalOutcome === 'success').length;
    return successful / flows.length;
  }

  private findMostUsedProvider(flows: AuthFlow[]): AuthProvider | null {
    const providerCounts = new Map<AuthProvider, number>();

    flows.forEach((flow) => {
      const count = providerCounts.get(flow.provider) || 0;
      providerCounts.set(flow.provider, count + 1);
    });

    let maxCount = 0;
    let mostUsed: AuthProvider | null = null;

    providerCounts.forEach((count, provider) => {
      if (count > maxCount) {
        maxCount = count;
        mostUsed = provider;
      }
    });

    return mostUsed;
  }

  private calculateProviderMetrics(flows: AuthFlow[]): { [provider: string]: ProviderMetrics } {
    const metrics: { [provider: string]: ProviderMetrics } = {};

    // Group flows by provider
    const providerFlows = new Map<AuthProvider, AuthFlow[]>();
    flows.forEach((flow) => {
      const existing = providerFlows.get(flow.provider) || [];
      existing.push(flow);
      providerFlows.set(flow.provider, existing);
    });

    providerFlows.forEach((providerFlowList, provider) => {
      const successful = providerFlowList.filter((f) => f.finalOutcome === 'success');
      const failed = providerFlowList.filter((f) => f.finalOutcome === 'failure');
      const times = providerFlowList.filter((f) => f.duration).map((f) => f.duration!);

      const commonErrors = this.extractCommonErrors(failed);

      metrics[provider] = {
        provider,
        totalAttempts: providerFlowList.length,
        successfulAttempts: successful.length,
        failedAttempts: failed.length,
        averageTime: times.length > 0 ? times.reduce((a, b) => a + b, 0) / times.length : 0,
        successRate: providerFlowList.length > 0 ? successful.length / providerFlowList.length : 0,
        lastUsed: Math.max(...providerFlowList.map((f) => f.startTime.getTime()))
          ? new Date(Math.max(...providerFlowList.map((f) => f.startTime.getTime())))
          : undefined,
        commonErrors,
        performanceP95: this.calculatePercentile(times, 0.95),
        performanceP99: this.calculatePercentile(times, 0.99),
      };
    });

    return metrics;
  }

  private extractCommonErrors(failedFlows: AuthFlow[]): string[] {
    const errorCounts = new Map<string, number>();

    failedFlows.forEach((flow) => {
      flow.errors?.forEach((error) => {
        // Extract main error type
        const errorType = error.split(':')[0];
        const count = errorCounts.get(errorType) || 0;
        errorCounts.set(errorType, count + 1);
      });
    });

    return Array.from(errorCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([error]) => error);
  }

  private analyzeErrorPatterns(flows: AuthFlow[]): { [pattern: string]: number } {
    const patterns: { [pattern: string]: number } = {};

    flows.forEach((flow) => {
      flow.errors?.forEach((error) => {
        const pattern = this.categorizeError(error);
        patterns[pattern] = (patterns[pattern] || 0) + 1;
      });
    });

    return patterns;
  }

  private categorizeError(error: string): string {
    const errorLower = error.toLowerCase();

    if (errorLower.includes('network') || errorLower.includes('timeout')) {
      return 'network_issues';
    }
    if (errorLower.includes('denied') || errorLower.includes('cancelled')) {
      return 'user_cancelled';
    }
    if (errorLower.includes('expired') || errorLower.includes('invalid')) {
      return 'token_issues';
    }
    if (errorLower.includes('config') || errorLower.includes('client')) {
      return 'configuration_errors';
    }
    if (errorLower.includes('rate') || errorLower.includes('limit')) {
      return 'rate_limiting';
    }

    return 'other_errors';
  }

  private calculatePerformanceMetrics(flows: AuthFlow[]): PerformanceMetrics {
    const times = flows.filter((f) => f.duration).map((f) => f.duration!);
    const redirectTimes = flows.filter((f) => f.performance.redirectTime).map((f) => f.performance.redirectTime!);
    const tokenTimes = flows
      .filter((f) => f.performance.tokenExchangeTime)
      .map((f) => f.performance.tokenExchangeTime!);
    const profileTimes = flows
      .filter((f) => f.performance.profileFetchTime)
      .map((f) => f.performance.profileFetchTime!);

    return {
      averageRedirectTime: this.average(redirectTimes),
      averageTokenExchangeTime: this.average(tokenTimes),
      averageProfileFetchTime: this.average(profileTimes),
      averageTotalTime: this.average(times),
      p95TotalTime: this.calculatePercentile(times, 0.95),
      p99TotalTime: this.calculatePercentile(times, 0.99),
      slowestFlow: flows.reduce(
        (slowest, flow) => (!slowest || (flow.duration && flow.duration > (slowest.duration || 0)) ? flow : slowest),
        undefined as AuthFlow | undefined
      ),
      fastestFlow: flows.reduce(
        (fastest, flow) =>
          !fastest || (flow.duration && flow.duration < (fastest.duration || Infinity)) ? flow : fastest,
        undefined as AuthFlow | undefined
      ),
    };
  }

  private calculateSecurityMetrics(events: SecurityAuditEvent[]): SecurityMetrics {
    const recentEvents = events.filter(
      (e) => Date.now() - e.timestamp.getTime() < 24 * 60 * 60 * 1000 // Last 24 hours
    );

    const suspiciousEvents = recentEvents.filter(
      (e) => e.eventType.includes('suspicious') || e.severity === 'error' || e.severity === 'critical'
    );

    const blockedEvents = recentEvents.filter((e) => e.eventType.includes('blocked') || e.eventType.includes('denied'));

    const rateLimitEvents = recentEvents.filter((e) => e.eventType.includes('rate_limit'));

    const csrfEvents = recentEvents.filter((e) => e.eventType.includes('csrf'));

    const conflictEvents = recentEvents.filter((e) => e.eventType.includes('conflict'));

    // Calculate risk score based on recent events
    const riskScore = Math.min(
      100,
      suspiciousEvents.length * 10 + blockedEvents.length * 5 + rateLimitEvents.length * 3
    );

    return {
      securityEvents: recentEvents.length,
      suspiciousAttempts: suspiciousEvents.length,
      blockedAttempts: blockedEvents.length,
      rateLimitHits: rateLimitEvents.length,
      csrfFailures: csrfEvents.length,
      sessionConflicts: conflictEvents.length,
      riskScore,
    };
  }

  private checkErrorRateAlerts(metrics: AuthMetrics): void {
    if (metrics.successRate < 1 - this.ALERT_THRESHOLD_ERROR_RATE) {
      this.createAlert(
        'error_rate',
        'warning',
        `High error rate detected: ${((1 - metrics.successRate) * 100).toFixed(1)}%`,
        { successRate: metrics.successRate, threshold: this.ALERT_THRESHOLD_ERROR_RATE }
      );
    }
  }

  private checkPerformanceAlerts(flow: AuthFlow): void {
    if (flow.duration && flow.duration > this.ALERT_THRESHOLD_SLOW_LOGIN) {
      this.createAlert('performance', 'warning', `Slow login detected: ${flow.duration}ms for ${flow.provider}`, {
        flowId: flow.id,
        duration: flow.duration,
        provider: flow.provider,
      });
    }
  }

  private checkSecurityAlerts(): void {
    const metrics = this.metricsSubject_.value;
    if (metrics?.securityMetrics.riskScore > 50) {
      this.createAlert('security', 'error', `Elevated security risk score: ${metrics.securityMetrics.riskScore}`, {
        riskScore: metrics.securityMetrics.riskScore,
      });
    }
  }

  private createAlert(
    type: MonitoringAlert['type'],
    severity: MonitoringAlert['severity'],
    message: string,
    details: any
  ): void {
    const alert: MonitoringAlert = {
      id: this.generateAlertId(),
      type,
      severity,
      message,
      details,
      timestamp: new Date(),
      acknowledged: false,
    };

    const alerts = this.alertsSubject_.value;
    alerts.unshift(alert);

    // Keep only recent alerts
    if (alerts.length > 100) {
      alerts.splice(100);
    }

    this.alertsSubject$.next(alerts);

    // Log high severity alerts
    if (severity === 'error' || severity === 'critical') {
      this.securityAudit.logEvent('monitoring_alert', severity, 'monitoring', message, details, {
        alertId: alert.id,
        ipAddress: 'unknown',
        userAgent: navigator.userAgent,
      });
    }
  }

  private average(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
  }

  private calculatePercentile(numbers: number[], percentile: number): number {
    if (numbers.length === 0) return 0;

    const sorted = [...numbers].sort((a, b) => a - b);
    const index = Math.ceil(sorted.length * percentile) - 1;
    return sorted[Math.max(0, index)];
  }

  private generateFlowId(): string {
    return `flow_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateCorrelationId(): string {
    return `corr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateAlertId(): string {
    return `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Public API methods
   */

  public getActiveFlows(): AuthFlow[] {
    return Array.from(this.activeFlowsSubject_.value.values());
  }

  public getRecentFlows(limit = 50): AuthFlow[] {
    return this.completedFlowsSubject_.value.slice(0, limit);
  }

  public getFlowById(flowId: string): AuthFlow | undefined {
    return this.activeFlowsSubject_.value.get(flowId) || this.completedFlowsSubject_.value.find((f) => f.id === flowId);
  }

  public getCurrentMetrics(): AuthMetrics | null {
    return this.metricsSubject_.value;
  }

  public getActiveAlerts(): MonitoringAlert[] {
    return this.alertsSubject_.value.filter((a) => !a.acknowledged);
  }

  public acknowledgeAlert(alertId: string): void {
    const alerts = this.alertsSubject_.value;
    const alert = alerts.find((a) => a.id === alertId);
    if (alert) {
      alert.acknowledged = true;
      this.alertsSubject$.next([...alerts]);
    }
  }

  public resolveAlert(alertId: string): void {
    const alerts = this.alertsSubject_.value;
    const alert = alerts.find((a) => a.id === alertId);
    if (alert) {
      alert.acknowledged = true;
      alert.resolvedAt = new Date();
      this.alertsSubject$.next([...alerts]);
    }
  }

  public clearResolvedAlerts(): void {
    const alerts = this.alertsSubject_.value.filter((a) => !a.resolvedAt);
    this.alertsSubject$.next(alerts);
  }

  public exportMetrics(): string {
    const metrics = this.getCurrentMetrics();
    const flows = this.getRecentFlows(100);
    const alerts = this.alertsSubject_.value;

    const exportData = {
      timestamp: new Date().toISOString(),
      metrics,
      flows,
      alerts,
    };

    return JSON.stringify(exportData, null, 2);
  }

  public ngOnDestroy(): void {
    if (this.metricsUpdateTimer) {
      clearInterval(this.metricsUpdateTimer);
    }
  }
}
