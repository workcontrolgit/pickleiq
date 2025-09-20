import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthProvider } from './auth.service';

export interface RateLimitRule {
  id: string;
  name: string;
  description: string;
  scope: 'global' | 'provider' | 'ip' | 'user';
  provider?: AuthProvider;
  windowSizeMs: number; // Time window in milliseconds
  maxAttempts: number; // Maximum attempts within window
  blockDurationMs: number; // How long to block after limit exceeded
  enabled: boolean;
}

export interface RateLimitAttempt {
  id: string;
  scope: string;
  scopeValue: string; // IP, user ID, provider, etc.
  provider?: AuthProvider;
  timestamp: Date;
  success: boolean;
  userAgent?: string;
  ipAddress?: string;
}

export interface RateLimitStatus {
  scope: string;
  scopeValue: string;
  rule: RateLimitRule;
  isBlocked: boolean;
  attemptsInWindow: number;
  remainingAttempts: number;
  windowResetTime: Date;
  blockExpiresAt?: Date;
  lastAttemptTime?: Date;
}

export interface RateLimitResult {
  allowed: boolean;
  status: RateLimitStatus;
  blockedByRules: RateLimitRule[];
  message: string;
  retryAfterMs?: number;
}

@Injectable({
  providedIn: 'root',
})
export class RateLimitingService {
  private readonly STORAGE_KEY = 'rate_limit_attempts';
  private readonly CLEANUP_INTERVAL = 60000; // Clean up old attempts every minute

  private attemptsSubject$ = new BehaviorSubject<RateLimitAttempt[]>([]);
  private rulesSubject$ = new BehaviorSubject<RateLimitRule[]>([]);

  public attempts$ = this.attemptsSubject$.asObservable();
  public rules$ = this.rulesSubject$.asObservable();

  private cleanupTimer?: number;

  constructor() {
    this.initializeDefaultRules();
    this.loadStoredAttempts();
    this.startCleanupTimer();
  }

  /**
   * Initialize default rate limiting rules
   */
  private initializeDefaultRules(): void {
    const defaultRules: RateLimitRule[] = [
      // Global rate limits
      {
        id: 'global_login_attempts',
        name: 'Global Login Attempts',
        description: 'Limits total login attempts across all providers',
        scope: 'global',
        windowSizeMs: 15 * 60 * 1000, // 15 minutes
        maxAttempts: 20,
        blockDurationMs: 30 * 60 * 1000, // 30 minutes
        enabled: true,
      },

      // IP-based rate limits
      {
        id: 'ip_login_attempts',
        name: 'IP-based Login Attempts',
        description: 'Limits login attempts per IP address',
        scope: 'ip',
        windowSizeMs: 15 * 60 * 1000, // 15 minutes
        maxAttempts: 10,
        blockDurationMs: 60 * 60 * 1000, // 1 hour
        enabled: true,
      },
      {
        id: 'ip_rapid_attempts',
        name: 'IP Rapid Attempts',
        description: 'Prevents rapid-fire attempts from same IP',
        scope: 'ip',
        windowSizeMs: 2 * 60 * 1000, // 2 minutes
        maxAttempts: 5,
        blockDurationMs: 10 * 60 * 1000, // 10 minutes
        enabled: true,
      },

      // Provider-specific rate limits
      {
        id: 'google_login_attempts',
        name: 'Google Login Attempts',
        description: 'Limits Google OAuth login attempts',
        scope: 'provider',
        provider: 'google',
        windowSizeMs: 10 * 60 * 1000, // 10 minutes
        maxAttempts: 8,
        blockDurationMs: 20 * 60 * 1000, // 20 minutes
        enabled: true,
      },
      {
        id: 'facebook_login_attempts',
        name: 'Facebook Login Attempts',
        description: 'Limits Facebook OAuth login attempts',
        scope: 'provider',
        provider: 'facebook',
        windowSizeMs: 10 * 60 * 1000, // 10 minutes
        maxAttempts: 8,
        blockDurationMs: 20 * 60 * 1000, // 20 minutes
        enabled: true,
      },
      {
        id: 'github_login_attempts',
        name: 'GitHub Login Attempts',
        description: 'Limits GitHub OAuth login attempts',
        scope: 'provider',
        provider: 'github',
        windowSizeMs: 10 * 60 * 1000, // 10 minutes
        maxAttempts: 8,
        blockDurationMs: 20 * 60 * 1000, // 20 minutes
        enabled: true,
      },
      {
        id: 'microsoft_login_attempts',
        name: 'Microsoft Login Attempts',
        description: 'Limits Microsoft OAuth login attempts',
        scope: 'provider',
        provider: 'microsoft',
        windowSizeMs: 10 * 60 * 1000, // 10 minutes
        maxAttempts: 8,
        blockDurationMs: 20 * 60 * 1000, // 20 minutes
        enabled: true,
      },
      {
        id: 'anonymous_login_attempts',
        name: 'Anonymous Login Attempts',
        description: 'Limits anonymous authentication attempts',
        scope: 'provider',
        provider: 'anonymous',
        windowSizeMs: 5 * 60 * 1000, // 5 minutes
        maxAttempts: 15, // More lenient for anonymous
        blockDurationMs: 10 * 60 * 1000, // 10 minutes
        enabled: true,
      },

      // User-based rate limits (if user identification is available)
      {
        id: 'user_failed_attempts',
        name: 'User Failed Attempts',
        description: 'Limits failed login attempts per user',
        scope: 'user',
        windowSizeMs: 30 * 60 * 1000, // 30 minutes
        maxAttempts: 5,
        blockDurationMs: 60 * 60 * 1000, // 1 hour
        enabled: true,
      },
    ];

    this.rulesSubject$.next(defaultRules);
  }

  /**
   * Check if an authentication attempt is allowed
   */
  public checkRateLimit(
    provider: AuthProvider,
    context: {
      ipAddress?: string;
      userAgent?: string;
      userId?: string;
      email?: string;
    } = {}
  ): RateLimitResult {
    const rules = this.rulesSubject$.value.filter((rule) => rule.enabled);
    const now = new Date();
    const blockedByRules: RateLimitRule[] = [];
    const statuses: RateLimitStatus[] = [];

    // Check each applicable rule
    for (const rule of rules) {
      const status = this.checkRuleStatus(rule, provider, context, now);
      statuses.push(status);

      if (status.isBlocked) {
        blockedByRules.push(rule);
      }
    }

    const isAllowed = blockedByRules.length === 0;
    const earliestRetry =
      blockedByRules.length > 0
        ? Math.min(
            ...blockedByRules.map((rule) => {
              const status = statuses.find((s) => s.rule.id === rule.id);
              return status?.blockExpiresAt?.getTime() || 0;
            })
          )
        : undefined;

    const retryAfterMs = earliestRetry ? Math.max(0, earliestRetry - now.getTime()) : undefined;

    let message = '';
    if (isAllowed) {
      message = 'Authentication attempt allowed';
    } else {
      const ruleNames = blockedByRules.map((rule) => rule.name).join(', ');
      message = `Authentication blocked by rate limiting rules: ${ruleNames}`;
    }

    return {
      allowed: isAllowed,
      status: statuses[0] || this.createDefaultStatus(provider, context),
      blockedByRules,
      message,
      retryAfterMs,
    };
  }

  /**
   * Record an authentication attempt
   */
  public recordAttempt(
    provider: AuthProvider,
    success: boolean,
    context: {
      ipAddress?: string;
      userAgent?: string;
      userId?: string;
      email?: string;
    } = {}
  ): void {
    const attempt: RateLimitAttempt = {
      id: this.generateAttemptId(),
      scope: 'mixed', // Will be processed by rules based on their scope
      scopeValue: provider,
      provider,
      timestamp: new Date(),
      success,
      userAgent: context.userAgent,
      ipAddress: context.ipAddress,
    };

    const currentAttempts = this.attemptsSubject$.value;
    const updatedAttempts = [...currentAttempts, attempt];

    this.attemptsSubject$.next(updatedAttempts);
    this.saveAttempts();

    console.log(`Rate limiting: Recorded ${success ? 'successful' : 'failed'} attempt for ${provider}`, {
      ip: context.ipAddress,
      userAgent: context.userAgent?.substring(0, 50),
    });
  }

  /**
   * Check status for a specific rule
   */
  private checkRuleStatus(rule: RateLimitRule, provider: AuthProvider, context: any, now: Date): RateLimitStatus {
    const scopeValue = this.getScopeValue(rule, provider, context);
    const windowStart = new Date(now.getTime() - rule.windowSizeMs);

    // Get attempts within the window for this scope
    const attempts = this.getAttemptsForScope(rule, scopeValue, windowStart, now);
    const attemptsInWindow = attempts.length;
    const failedAttempts = attempts.filter((a) => !a.success);

    // Determine if blocked
    let isBlocked = false;
    let blockExpiresAt: Date | undefined;

    // Check if we've exceeded the limit
    if (attemptsInWindow >= rule.maxAttempts) {
      // Find the oldest attempt that would trigger the block
      const triggerAttempt = attempts[attempts.length - rule.maxAttempts];
      blockExpiresAt = new Date(triggerAttempt.timestamp.getTime() + rule.blockDurationMs);
      isBlocked = now < blockExpiresAt;
    }

    // Calculate when the rate limit window resets
    const oldestAttempt = attempts[0];
    const windowResetTime = oldestAttempt ? new Date(oldestAttempt.timestamp.getTime() + rule.windowSizeMs) : now;

    const lastAttemptTime = attempts.length > 0 ? attempts[attempts.length - 1].timestamp : undefined;

    return {
      scope: `${rule.scope}:${scopeValue}`,
      scopeValue,
      rule,
      isBlocked,
      attemptsInWindow,
      remainingAttempts: Math.max(0, rule.maxAttempts - attemptsInWindow),
      windowResetTime,
      blockExpiresAt,
      lastAttemptTime,
    };
  }

  /**
   * Get scope value for a rule
   */
  private getScopeValue(rule: RateLimitRule, provider: AuthProvider, context: any): string {
    switch (rule.scope) {
      case 'global':
        return 'global';
      case 'provider':
        return provider;
      case 'ip':
        return context.ipAddress || 'unknown';
      case 'user':
        return context.userId || context.email || 'anonymous';
      default:
        return 'unknown';
    }
  }

  /**
   * Get attempts for specific scope within time window
   */
  private getAttemptsForScope(
    rule: RateLimitRule,
    scopeValue: string,
    windowStart: Date,
    windowEnd: Date
  ): RateLimitAttempt[] {
    const allAttempts = this.attemptsSubject$.value;

    return allAttempts
      .filter((attempt) => {
        // Check time window
        if (attempt.timestamp < windowStart || attempt.timestamp > windowEnd) {
          return false;
        }

        // Check scope matching
        switch (rule.scope) {
          case 'global':
            return true;
          case 'provider':
            return attempt.provider === rule.provider;
          case 'ip':
            return attempt.ipAddress === scopeValue;
          case 'user':
            // Would need user identification in attempts
            return false; // Skip user-based for now without user tracking
          default:
            return false;
        }
      })
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }

  /**
   * Create default status for when no rules apply
   */
  private createDefaultStatus(provider: AuthProvider, context: any): RateLimitStatus {
    const defaultRule: RateLimitRule = {
      id: 'default',
      name: 'Default Rule',
      description: 'Default fallback rule',
      scope: 'provider',
      windowSizeMs: 60000,
      maxAttempts: 100,
      blockDurationMs: 0,
      enabled: false,
    };

    return {
      scope: `provider:${provider}`,
      scopeValue: provider,
      rule: defaultRule,
      isBlocked: false,
      attemptsInWindow: 0,
      remainingAttempts: 100,
      windowResetTime: new Date(),
      lastAttemptTime: undefined,
    };
  }

  /**
   * Get rate limit status for specific scope
   */
  public getRateLimitStatus(
    provider: AuthProvider,
    scope: 'global' | 'provider' | 'ip' | 'user' = 'provider',
    scopeValue?: string
  ): RateLimitStatus[] {
    const rules = this.rulesSubject$.value.filter(
      (rule) => rule.enabled && rule.scope === scope && (scope !== 'provider' || rule.provider === provider)
    );

    const now = new Date();
    const context = { ipAddress: scopeValue };

    return rules.map((rule) => this.checkRuleStatus(rule, provider, context, now));
  }

  /**
   * Clear rate limiting for specific scope
   */
  public clearRateLimit(scope: string, scopeValue?: string): void {
    const currentAttempts = this.attemptsSubject$.value;
    let filteredAttempts = currentAttempts;

    if (scope === 'global') {
      filteredAttempts = [];
    } else if (scope === 'ip' && scopeValue) {
      filteredAttempts = currentAttempts.filter((attempt) => attempt.ipAddress !== scopeValue);
    } else if (scope === 'provider' && scopeValue) {
      filteredAttempts = currentAttempts.filter((attempt) => attempt.provider !== scopeValue);
    }

    this.attemptsSubject$.next(filteredAttempts);
    this.saveAttempts();

    console.log(`Rate limiting: Cleared ${scope} rate limit for ${scopeValue || 'all'}`);
  }

  /**
   * Get rate limiting statistics
   */
  public getRateLimitingStats(): {
    totalAttempts: number;
    successfulAttempts: number;
    failedAttempts: number;
    blockedAttempts: number;
    mostActiveProvider: AuthProvider | null;
    averageAttemptsPerHour: number;
  } {
    const attempts = this.attemptsSubject$.value;
    const now = new Date();
    const lastHour = new Date(now.getTime() - 60 * 60 * 1000);

    const recentAttempts = attempts.filter((attempt) => attempt.timestamp >= lastHour);
    const successfulAttempts = attempts.filter((attempt) => attempt.success).length;
    const failedAttempts = attempts.filter((attempt) => !attempt.success).length;

    // Calculate blocked attempts (attempts that would be blocked now)
    let blockedAttempts = 0;
    for (const provider of ['google', 'facebook', 'github', 'microsoft', 'anonymous'] as AuthProvider[]) {
      const result = this.checkRateLimit(provider);
      if (!result.allowed) {
        blockedAttempts++;
      }
    }

    // Find most active provider
    const providerCounts = new Map<AuthProvider, number>();
    attempts.forEach((attempt) => {
      if (attempt.provider) {
        providerCounts.set(attempt.provider, (providerCounts.get(attempt.provider) || 0) + 1);
      }
    });

    const mostActiveProvider = Array.from(providerCounts.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || null;

    return {
      totalAttempts: attempts.length,
      successfulAttempts,
      failedAttempts,
      blockedAttempts,
      mostActiveProvider,
      averageAttemptsPerHour: recentAttempts.length,
    };
  }

  /**
   * Add custom rate limiting rule
   */
  public addRule(rule: RateLimitRule): void {
    const currentRules = this.rulesSubject$.value;
    const updatedRules = [...currentRules, rule];
    this.rulesSubject$.next(updatedRules);
  }

  /**
   * Update rate limiting rule
   */
  public updateRule(ruleId: string, updates: Partial<RateLimitRule>): void {
    const currentRules = this.rulesSubject$.value;
    const updatedRules = currentRules.map((rule) => (rule.id === ruleId ? { ...rule, ...updates } : rule));
    this.rulesSubject$.next(updatedRules);
  }

  /**
   * Enable/disable rate limiting rule
   */
  public setRuleEnabled(ruleId: string, enabled: boolean): void {
    this.updateRule(ruleId, { enabled });
  }

  /**
   * Get all rate limiting rules
   */
  public getRules(): RateLimitRule[] {
    return this.rulesSubject$.value;
  }

  /**
   * Get rules for specific provider
   */
  public getRulesForProvider(provider: AuthProvider): RateLimitRule[] {
    return this.rulesSubject$.value.filter(
      (rule) =>
        rule.scope === 'global' ||
        rule.scope === 'ip' ||
        rule.scope === 'user' ||
        (rule.scope === 'provider' && rule.provider === provider)
    );
  }

  // Private utility methods

  /**
   * Generate unique attempt ID
   */
  private generateAttemptId(): string {
    return `attempt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Start cleanup timer to remove old attempts
   */
  private startCleanupTimer(): void {
    this.cleanupTimer = window.setInterval(() => {
      this.cleanupOldAttempts();
    }, this.CLEANUP_INTERVAL);
  }

  /**
   * Clean up old attempts beyond any rule's window
   */
  private cleanupOldAttempts(): void {
    const rules = this.rulesSubject$.value;
    const maxWindowSize = Math.max(...rules.map((rule) => rule.windowSizeMs));
    const cutoffTime = new Date(Date.now() - maxWindowSize - 60 * 60 * 1000); // Add 1 hour buffer

    const currentAttempts = this.attemptsSubject$.value;
    const filteredAttempts = currentAttempts.filter((attempt) => attempt.timestamp >= cutoffTime);

    if (filteredAttempts.length !== currentAttempts.length) {
      this.attemptsSubject$.next(filteredAttempts);
      this.saveAttempts();
      console.log(`Rate limiting: Cleaned up ${currentAttempts.length - filteredAttempts.length} old attempts`);
    }
  }

  /**
   * Save attempts to localStorage
   */
  private saveAttempts(): void {
    try {
      const attempts = this.attemptsSubject$.value;
      const serializable = attempts.map((attempt) => ({
        ...attempt,
        timestamp: attempt.timestamp.toISOString(),
      }));

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(serializable));
    } catch (error) {
      console.warn('Failed to save rate limiting attempts:', error);
    }
  }

  /**
   * Load attempts from localStorage
   */
  private loadStoredAttempts(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return;

      const serialized = JSON.parse(stored);
      const attempts = serialized.map((item: any) => ({
        ...item,
        timestamp: new Date(item.timestamp),
      }));

      this.attemptsSubject$.next(attempts);
    } catch (error) {
      console.warn('Failed to load rate limiting attempts:', error);
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  /**
   * Clear all data (useful for testing or reset)
   */
  public clearAllData(): void {
    this.attemptsSubject$.next([]);
    localStorage.removeItem(this.STORAGE_KEY);
    console.log('Rate limiting: Cleared all data');
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
