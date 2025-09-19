import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthProvider } from './auth.service';

export interface SecurityAuditEvent {
  id: string;
  timestamp: Date;
  eventType: SecurityEventType;
  severity: 'info' | 'warning' | 'error' | 'critical';
  source: 'auth' | 'session' | 'csrf' | 'rate_limit' | 'validation' | 'system';
  provider?: AuthProvider;
  userId?: string;
  sessionId?: string;
  ipAddress?: string;
  userAgent?: string;
  message: string;
  details: any;
  metadata?: {
    riskScore?: number;
    category?: string;
    tags?: string[];
    correlationId?: string;
  };
}

export type SecurityEventType =
  // Authentication events
  | 'login_attempt'
  | 'login_success'
  | 'login_failure'
  | 'logout'
  | 'token_refresh'
  | 'token_expired'
  | 'password_change'
  | 'account_locked'

  // Session events
  | 'session_created'
  | 'session_expired'
  | 'session_terminated'
  | 'session_hijack_detected'
  | 'concurrent_sessions'
  | 'session_switch'

  // Security events
  | 'csrf_token_mismatch'
  | 'csrf_token_missing'
  | 'rate_limit_exceeded'
  | 'suspicious_activity'
  | 'security_validation_failed'
  | 'unauthorized_access'
  | 'privilege_escalation'

  // System events
  | 'security_config_changed'
  | 'audit_log_accessed'
  | 'security_alert_triggered'
  | 'data_breach_detected'

  // Compliance events
  | 'gdpr_data_request'
  | 'data_export'
  | 'data_deletion'
  | 'consent_given'
  | 'consent_withdrawn';

export interface AuditSearchFilter {
  startDate?: Date;
  endDate?: Date;
  eventTypes?: SecurityEventType[];
  severities?: ('info' | 'warning' | 'error' | 'critical')[];
  sources?: ('auth' | 'session' | 'csrf' | 'rate_limit' | 'validation' | 'system')[];
  providers?: AuthProvider[];
  userId?: string;
  sessionId?: string;
  ipAddress?: string;
  riskScoreMin?: number;
  riskScoreMax?: number;
  searchText?: string;
}

export interface AuditStatistics {
  totalEvents: number;
  eventsByType: Map<SecurityEventType, number>;
  eventsBySeverity: Map<string, number>;
  eventsByProvider: Map<AuthProvider, number>;
  eventsLast24Hours: number;
  eventsLastWeek: number;
  averageRiskScore: number;
  highRiskEvents: number;
  uniqueUsers: number;
  uniqueIpAddresses: number;
}

@Injectable({
  providedIn: 'root',
})
export class SecurityAuditService {
  private readonly STORAGE_KEY = 'security_audit_logs';
  private readonly MAX_STORED_EVENTS = 10000;
  private readonly RETENTION_DAYS = 90;
  private readonly CLEANUP_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

  private eventsSubject$ = new BehaviorSubject<SecurityAuditEvent[]>([]);
  public events$ = this.eventsSubject$.asObservable();

  private cleanupTimer?: number;

  constructor() {
    this.loadStoredEvents();
    this.startCleanupTimer();
  }

  /**
   * Log a security audit event
   */
  public logEvent(
    eventType: SecurityEventType,
    severity: 'info' | 'warning' | 'error' | 'critical',
    source: 'auth' | 'session' | 'csrf' | 'rate_limit' | 'validation' | 'system',
    message: string,
    details: any = {},
    context: {
      provider?: AuthProvider;
      userId?: string;
      sessionId?: string;
      ipAddress?: string;
      userAgent?: string;
      riskScore?: number;
      category?: string;
      tags?: string[];
      correlationId?: string;
    } = {}
  ): SecurityAuditEvent {
    const event: SecurityAuditEvent = {
      id: this.generateEventId(),
      timestamp: new Date(),
      eventType,
      severity,
      source,
      provider: context.provider,
      userId: context.userId,
      sessionId: context.sessionId,
      ipAddress: context.ipAddress,
      userAgent: context.userAgent,
      message,
      details,
      metadata: {
        riskScore: context.riskScore,
        category: context.category,
        tags: context.tags,
        correlationId: context.correlationId,
      },
    };

    this.addEvent(event);

    // Log to console for development
    this.logToConsole(event);

    // Trigger alerts for critical events
    if (severity === 'critical') {
      this.triggerSecurityAlert(event);
    }

    return event;
  }

  /**
   * Log authentication event
   */
  public logAuthEvent(
    eventType: 'login_attempt' | 'login_success' | 'login_failure' | 'logout' | 'token_refresh' | 'token_expired',
    provider: AuthProvider,
    context: {
      userId?: string;
      sessionId?: string;
      ipAddress?: string;
      userAgent?: string;
      error?: string;
      details?: any;
    } = {}
  ): SecurityAuditEvent {
    const severity = eventType === 'login_failure' ? 'warning' : 'info';
    const message = this.generateAuthMessage(eventType, provider, context);

    return this.logEvent(
      eventType,
      severity,
      'auth',
      message,
      {
        provider,
        error: context.error,
        ...context.details,
      },
      {
        provider,
        userId: context.userId,
        sessionId: context.sessionId,
        ipAddress: context.ipAddress,
        userAgent: context.userAgent,
        category: 'authentication',
        tags: ['auth', provider],
      }
    );
  }

  /**
   * Log session event
   */
  public logSessionEvent(
    eventType:
      | 'session_created'
      | 'session_expired'
      | 'session_terminated'
      | 'session_hijack_detected'
      | 'concurrent_sessions'
      | 'session_switch',
    provider: AuthProvider,
    sessionId: string,
    context: {
      userId?: string;
      ipAddress?: string;
      userAgent?: string;
      details?: any;
      riskScore?: number;
    } = {}
  ): SecurityAuditEvent {
    const severity = this.getSessionEventSeverity(eventType);
    const message = this.generateSessionMessage(eventType, provider, sessionId, context);

    return this.logEvent(
      eventType,
      severity,
      'session',
      message,
      {
        provider,
        sessionId,
        ...context.details,
      },
      {
        provider,
        userId: context.userId,
        sessionId,
        ipAddress: context.ipAddress,
        userAgent: context.userAgent,
        riskScore: context.riskScore,
        category: 'session_management',
        tags: ['session', provider],
      }
    );
  }

  /**
   * Log CSRF event
   */
  public logCSRFEvent(
    eventType: 'csrf_token_mismatch' | 'csrf_token_missing',
    provider: AuthProvider,
    context: {
      sessionId?: string;
      ipAddress?: string;
      userAgent?: string;
      endpoint?: string;
      expectedToken?: string;
      receivedToken?: string;
    } = {}
  ): SecurityAuditEvent {
    const severity = 'error';
    const message = `CSRF ${eventType.replace('csrf_', '').replace('_', ' ')} for ${provider} provider`;

    return this.logEvent(
      eventType,
      severity,
      'csrf',
      message,
      {
        provider,
        endpoint: context.endpoint,
        expectedToken: context.expectedToken ? '***' : undefined, // Mask tokens
        receivedToken: context.receivedToken ? '***' : undefined,
      },
      {
        provider,
        sessionId: context.sessionId,
        ipAddress: context.ipAddress,
        userAgent: context.userAgent,
        riskScore: 75, // High risk for CSRF issues
        category: 'security_violation',
        tags: ['csrf', 'security', provider],
      }
    );
  }

  /**
   * Log rate limiting event
   */
  public logRateLimitEvent(
    provider: AuthProvider,
    context: {
      ruleId?: string;
      ruleName?: string;
      attemptsInWindow?: number;
      windowSizeMs?: number;
      blockDurationMs?: number;
      ipAddress?: string;
      userAgent?: string;
    } = {}
  ): SecurityAuditEvent {
    const severity = 'warning';
    const message = `Rate limit exceeded for ${provider} provider (rule: ${context.ruleName || context.ruleId})`;

    return this.logEvent(
      'rate_limit_exceeded',
      severity,
      'rate_limit',
      message,
      {
        provider,
        ruleId: context.ruleId,
        ruleName: context.ruleName,
        attemptsInWindow: context.attemptsInWindow,
        windowSizeMs: context.windowSizeMs,
        blockDurationMs: context.blockDurationMs,
      },
      {
        provider,
        ipAddress: context.ipAddress,
        userAgent: context.userAgent,
        riskScore: 60, // Moderate risk for rate limiting
        category: 'rate_limiting',
        tags: ['rate_limit', provider],
      }
    );
  }

  /**
   * Log security validation event
   */
  public logSecurityValidationEvent(
    provider: AuthProvider,
    validationResults: any,
    context: {
      userId?: string;
      sessionId?: string;
      ipAddress?: string;
      userAgent?: string;
    } = {}
  ): SecurityAuditEvent {
    const severity = this.getValidationEventSeverity(validationResults);
    const failedRules = validationResults.validationResults?.filter((r: any) => !r.isValid) || [];
    const message = `Security validation ${validationResults.isValid ? 'passed' : 'failed'} for ${provider} provider`;

    return this.logEvent(
      'security_validation_failed',
      severity,
      'validation',
      message,
      {
        provider,
        isValid: validationResults.isValid,
        riskScore: validationResults.overallRiskScore,
        failedRules: failedRules.map((r: any) => ({ id: r.ruleId, message: r.message })),
        recommendedAction: validationResults.recommendedAction,
      },
      {
        provider,
        userId: context.userId,
        sessionId: context.sessionId,
        ipAddress: context.ipAddress,
        userAgent: context.userAgent,
        riskScore: validationResults.overallRiskScore,
        category: 'security_validation',
        tags: ['validation', 'security', provider],
      }
    );
  }

  /**
   * Log suspicious activity event
   */
  public logSuspiciousActivity(
    provider: AuthProvider,
    suspiciousFactors: string[],
    riskScore: number,
    context: {
      userId?: string;
      sessionId?: string;
      ipAddress?: string;
      userAgent?: string;
      details?: any;
    } = {}
  ): SecurityAuditEvent {
    const severity = riskScore >= 75 ? 'critical' : riskScore >= 50 ? 'error' : 'warning';
    const message = `Suspicious activity detected for ${provider} provider: ${suspiciousFactors.join(', ')}`;

    return this.logEvent(
      'suspicious_activity',
      severity,
      'validation',
      message,
      {
        provider,
        suspiciousFactors,
        riskScore,
        ...context.details,
      },
      {
        provider,
        userId: context.userId,
        sessionId: context.sessionId,
        ipAddress: context.ipAddress,
        userAgent: context.userAgent,
        riskScore,
        category: 'threat_detection',
        tags: ['suspicious', 'threat', provider],
      }
    );
  }

  /**
   * Search audit events
   */
  public searchEvents(filter: AuditSearchFilter): SecurityAuditEvent[] {
    const events = this.eventsSubject$.value;

    return events
      .filter((event) => {
        // Date range filter
        if (filter.startDate && event.timestamp < filter.startDate) return false;
        if (filter.endDate && event.timestamp > filter.endDate) return false;

        // Event type filter
        if (filter.eventTypes && !filter.eventTypes.includes(event.eventType)) return false;

        // Severity filter
        if (filter.severities && !filter.severities.includes(event.severity)) return false;

        // Source filter
        if (filter.sources && !filter.sources.includes(event.source)) return false;

        // Provider filter
        if (filter.providers && event.provider && !filter.providers.includes(event.provider)) return false;

        // User ID filter
        if (filter.userId && event.userId !== filter.userId) return false;

        // Session ID filter
        if (filter.sessionId && event.sessionId !== filter.sessionId) return false;

        // IP address filter
        if (filter.ipAddress && event.ipAddress !== filter.ipAddress) return false;

        // Risk score filter
        if (filter.riskScoreMin && (!event.metadata?.riskScore || event.metadata.riskScore < filter.riskScoreMin))
          return false;
        if (filter.riskScoreMax && (!event.metadata?.riskScore || event.metadata.riskScore > filter.riskScoreMax))
          return false;

        // Text search filter
        if (filter.searchText) {
          const searchLower = filter.searchText.toLowerCase();
          const messageMatch = event.message.toLowerCase().includes(searchLower);
          const detailsMatch = JSON.stringify(event.details).toLowerCase().includes(searchLower);
          if (!messageMatch && !detailsMatch) return false;
        }

        return true;
      })
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()); // Most recent first
  }

  /**
   * Get audit statistics
   */
  public getStatistics(): AuditStatistics {
    const events = this.eventsSubject$.value;
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const eventsByType = new Map<SecurityEventType, number>();
    const eventsBySeverity = new Map<string, number>();
    const eventsByProvider = new Map<AuthProvider, number>();
    const uniqueUsers = new Set<string>();
    const uniqueIpAddresses = new Set<string>();

    let totalRiskScore = 0;
    let riskScoreCount = 0;
    let highRiskEvents = 0;

    events.forEach((event) => {
      // Count by type
      eventsByType.set(event.eventType, (eventsByType.get(event.eventType) || 0) + 1);

      // Count by severity
      eventsBySeverity.set(event.severity, (eventsBySeverity.get(event.severity) || 0) + 1);

      // Count by provider
      if (event.provider) {
        eventsByProvider.set(event.provider, (eventsByProvider.get(event.provider) || 0) + 1);
      }

      // Unique users and IPs
      if (event.userId) uniqueUsers.add(event.userId);
      if (event.ipAddress) uniqueIpAddresses.add(event.ipAddress);

      // Risk score analysis
      if (event.metadata?.riskScore) {
        totalRiskScore += event.metadata.riskScore;
        riskScoreCount++;
        if (event.metadata.riskScore >= 70) {
          highRiskEvents++;
        }
      }
    });

    const eventsLast24Hours = events.filter((e) => e.timestamp >= last24Hours).length;
    const eventsLastWeek = events.filter((e) => e.timestamp >= lastWeek).length;

    return {
      totalEvents: events.length,
      eventsByType,
      eventsBySeverity,
      eventsByProvider,
      eventsLast24Hours,
      eventsLastWeek,
      averageRiskScore: riskScoreCount > 0 ? totalRiskScore / riskScoreCount : 0,
      highRiskEvents,
      uniqueUsers: uniqueUsers.size,
      uniqueIpAddresses: uniqueIpAddresses.size,
    };
  }

  /**
   * Export audit logs
   */
  public exportEvents(filter?: AuditSearchFilter): string {
    const events = filter ? this.searchEvents(filter) : this.eventsSubject$.value;

    const exportData = {
      exportDate: new Date().toISOString(),
      totalEvents: events.length,
      events: events.map((event) => ({
        ...event,
        timestamp: event.timestamp.toISOString(),
      })),
    };

    return JSON.stringify(exportData, null, 2);
  }

  /**
   * Clear audit logs (with confirmation for security)
   */
  public clearLogs(confirmationToken: string): boolean {
    const expectedToken = btoa(`clear_logs_${new Date().getDate()}`);
    if (confirmationToken !== expectedToken) {
      this.logEvent('unauthorized_access', 'critical', 'system', 'Unauthorized attempt to clear audit logs', {
        confirmationToken,
      });
      return false;
    }

    this.logEvent('audit_log_accessed', 'warning', 'system', 'Audit logs cleared by user', { action: 'clear_all' });

    this.eventsSubject$.next([]);
    this.saveEvents();
    return true;
  }

  /**
   * Get events for specific correlation ID (to track related events)
   */
  public getCorrelatedEvents(correlationId: string): SecurityAuditEvent[] {
    return this.eventsSubject$.value.filter((event) => event.metadata?.correlationId === correlationId);
  }

  // Private utility methods

  /**
   * Add event to the store
   */
  private addEvent(event: SecurityAuditEvent): void {
    const currentEvents = this.eventsSubject$.value;
    const updatedEvents = [event, ...currentEvents];

    // Limit stored events
    if (updatedEvents.length > this.MAX_STORED_EVENTS) {
      updatedEvents.splice(this.MAX_STORED_EVENTS);
    }

    this.eventsSubject$.next(updatedEvents);
    this.saveEvents();
  }

  /**
   * Generate unique event ID
   */
  private generateEventId(): string {
    return `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Generate authentication event message
   */
  private generateAuthMessage(eventType: string, provider: AuthProvider, context: any): string {
    const action = eventType.replace('_', ' ');
    const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);

    switch (eventType) {
      case 'login_attempt':
        return `${providerName} login attempt initiated`;
      case 'login_success':
        return `${providerName} login successful`;
      case 'login_failure':
        return `${providerName} login failed: ${context.error || 'Unknown error'}`;
      case 'logout':
        return `${providerName} logout completed`;
      case 'token_refresh':
        return `${providerName} token refreshed`;
      case 'token_expired':
        return `${providerName} token expired`;
      default:
        return `${providerName} ${action}`;
    }
  }

  /**
   * Generate session event message
   */
  private generateSessionMessage(eventType: string, provider: AuthProvider, sessionId: string, context: any): string {
    const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);

    switch (eventType) {
      case 'session_created':
        return `${providerName} session created (${sessionId})`;
      case 'session_expired':
        return `${providerName} session expired (${sessionId})`;
      case 'session_terminated':
        return `${providerName} session terminated (${sessionId})`;
      case 'session_hijack_detected':
        return `Potential session hijacking detected for ${providerName} session (${sessionId})`;
      case 'concurrent_sessions':
        return `Concurrent ${providerName} sessions detected`;
      case 'session_switch':
        return `Session switched to ${providerName} provider (${sessionId})`;
      default:
        return `${providerName} session event: ${eventType}`;
    }
  }

  /**
   * Get session event severity
   */
  private getSessionEventSeverity(eventType: string): 'info' | 'warning' | 'error' | 'critical' {
    switch (eventType) {
      case 'session_hijack_detected':
        return 'critical';
      case 'session_expired':
      case 'concurrent_sessions':
        return 'warning';
      default:
        return 'info';
    }
  }

  /**
   * Get validation event severity
   */
  private getValidationEventSeverity(validationResults: any): 'info' | 'warning' | 'error' | 'critical' {
    if (!validationResults.isValid) {
      if (validationResults.recommendedAction === 'block') return 'critical';
      if (validationResults.recommendedAction === 'require_mfa') return 'error';
      if (validationResults.recommendedAction === 'warn') return 'warning';
    }
    return 'info';
  }

  /**
   * Log to console for development
   */
  private logToConsole(event: SecurityAuditEvent): void {
    const logMethod =
      event.severity === 'critical' || event.severity === 'error'
        ? 'error'
        : event.severity === 'warning'
        ? 'warn'
        : 'log';

    console[logMethod](`[SECURITY AUDIT] ${event.severity.toUpperCase()}: ${event.message}`, {
      eventType: event.eventType,
      source: event.source,
      provider: event.provider,
      timestamp: event.timestamp,
      details: event.details,
    });
  }

  /**
   * Trigger security alert for critical events
   */
  private triggerSecurityAlert(event: SecurityAuditEvent): void {
    // In a real implementation, this would send alerts via email, SMS, etc.
    console.error('🚨 SECURITY ALERT:', event.message, event.details);

    // Could integrate with external alerting systems here
    // this.alertingService.sendAlert(event);
  }

  /**
   * Start cleanup timer for old events
   */
  private startCleanupTimer(): void {
    this.cleanupTimer = window.setInterval(() => {
      this.cleanupOldEvents();
    }, this.CLEANUP_INTERVAL);
  }

  /**
   * Clean up old events beyond retention period
   */
  private cleanupOldEvents(): void {
    const retentionCutoff = new Date(Date.now() - this.RETENTION_DAYS * 24 * 60 * 60 * 1000);
    const currentEvents = this.eventsSubject$.value;
    const filteredEvents = currentEvents.filter((event) => event.timestamp >= retentionCutoff);

    if (filteredEvents.length !== currentEvents.length) {
      this.eventsSubject$.next(filteredEvents);
      this.saveEvents();
      console.log(`Security audit: Cleaned up ${currentEvents.length - filteredEvents.length} old events`);
    }
  }

  /**
   * Save events to localStorage
   */
  private saveEvents(): void {
    try {
      const events = this.eventsSubject$.value;
      const serializable = events.map((event) => ({
        ...event,
        timestamp: event.timestamp.toISOString(),
      }));

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(serializable));
    } catch (error) {
      console.warn('Failed to save security audit events:', error);
    }
  }

  /**
   * Load events from localStorage
   */
  private loadStoredEvents(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return;

      const serialized = JSON.parse(stored);
      const events = serialized.map((item: any) => ({
        ...item,
        timestamp: new Date(item.timestamp),
      }));

      this.eventsSubject$.next(events);
    } catch (error) {
      console.warn('Failed to load security audit events:', error);
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  /**
   * Destroy service and cleanup timers
   */
  public ngOnDestroy(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
    }
  }
}
