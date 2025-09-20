import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthProvider } from './auth.service';
import { environment } from '@env/environment';

export interface ProviderSession {
  provider: AuthProvider;
  isActive: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: Date | null;
  userProfile: any;
  loginTime: Date;
  lastActivity: Date;
  sessionId: string;
  metadata: {
    loginMethod?: string;
    deviceInfo?: string;
    ipAddress?: string;
    userAgent?: string;
    customTimeout?: number; // Provider-specific timeout in milliseconds
    idleTimeout?: number; // Idle timeout in milliseconds
    lastHeartbeat?: Date; // For keepalive tracking
  };
}

export interface SessionConflict {
  type: 'duplicate_email' | 'concurrent_login' | 'expired_session';
  primarySession: ProviderSession;
  conflictingSession: ProviderSession;
  resolution?: 'merge' | 'replace' | 'keep_both' | 'user_choice';
}

@Injectable({
  providedIn: 'root',
})
export class SessionManagerService {
  private readonly STORAGE_KEY = 'multi_auth_sessions';
  private readonly MAX_CONCURRENT_SESSIONS = 3;
  private readonly SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours
  private readonly IDLE_TIMEOUT = 30 * 60 * 1000; // 30 minutes of inactivity
  private readonly HEARTBEAT_INTERVAL = 5 * 60 * 1000; // 5 minutes

  // Provider-specific timeouts (in milliseconds)
  private readonly PROVIDER_TIMEOUTS = {
    anonymous: 8 * 60 * 60 * 1000, // 8 hours
    oidc: 24 * 60 * 60 * 1000, // 24 hours
    google: 12 * 60 * 60 * 1000, // 12 hours
    facebook: 6 * 60 * 60 * 1000, // 6 hours
    github: 24 * 60 * 60 * 1000, // 24 hours
    microsoft: 12 * 60 * 60 * 1000, // 12 hours
  };

  private sessionsSubject$ = new BehaviorSubject<Map<AuthProvider, ProviderSession>>(new Map());
  private activeSessionSubject$ = new BehaviorSubject<ProviderSession | null>(null);
  private conflictsSubject$ = new BehaviorSubject<SessionConflict[]>([]);

  public sessions$ = this.sessionsSubject$.asObservable();
  public activeSession$ = this.activeSessionSubject$.asObservable();
  public conflicts$ = this.conflictsSubject$.asObservable();

  constructor() {
    this.loadStoredSessions();
    this.startSessionMonitoring();
  }

  /**
   * Create or update a session for a provider
   */
  public createSession(
    provider: AuthProvider,
    accessToken: string | null,
    refreshToken: string | null,
    expiresAt: Date | null,
    userProfile: any
  ): ProviderSession {
    const sessionId = this.generateSessionId(provider);
    const now = new Date();

    const session: ProviderSession = {
      provider,
      isActive: true,
      accessToken,
      refreshToken,
      expiresAt,
      userProfile,
      loginTime: now,
      lastActivity: now,
      sessionId,
      metadata: {
        loginMethod: provider,
        deviceInfo: this.getDeviceInfo(),
        userAgent: navigator.userAgent,
        customTimeout: this.getProviderTimeout(provider),
        idleTimeout: this.IDLE_TIMEOUT,
        lastHeartbeat: now,
      },
    };

    // Check for session conflicts before creating
    this.checkForConflicts(session);

    // Update sessions map
    const currentSessions = this.sessionsSubject$.value;
    currentSessions.set(provider, session);
    this.sessionsSubject$.next(currentSessions);

    // Set as active session
    this.setActiveSession(session);

    // Persist to storage
    this.persistSessions();

    console.log(`Session created for provider: ${provider}`, session);
    return session;
  }

  /**
   * Get session for a specific provider
   */
  public getSession(provider: AuthProvider): ProviderSession | null {
    return this.sessionsSubject$.value.get(provider) || null;
  }

  /**
   * Get all active sessions
   */
  public getAllSessions(): ProviderSession[] {
    return Array.from(this.sessionsSubject$.value.values()).filter((session) => session.isActive);
  }

  /**
   * Get current active session
   */
  public getActiveSession(): ProviderSession | null {
    return this.activeSessionSubject$.value;
  }

  /**
   * Set active session (for provider switching)
   */
  public setActiveSession(session: ProviderSession | null): void {
    if (session) {
      // Update last activity
      session.lastActivity = new Date();

      // Update sessions map
      const currentSessions = this.sessionsSubject$.value;
      currentSessions.set(session.provider, session);
      this.sessionsSubject$.next(currentSessions);
    }

    this.activeSessionSubject$.next(session);
    this.persistSessions();

    console.log(`Active session set to: ${session?.provider || 'none'}`);
  }

  /**
   * Switch between providers without logout
   */
  public async switchToProvider(provider: AuthProvider): Promise<ProviderSession | null> {
    const targetSession = this.getSession(provider);

    if (!targetSession) {
      throw new Error(`No active session found for provider: ${provider}`);
    }

    if (!this.isSessionValid(targetSession)) {
      throw new Error(`Session for provider ${provider} has expired`);
    }

    this.setActiveSession(targetSession);
    return targetSession;
  }

  /**
   * Remove session for a specific provider
   */
  public removeSession(provider: AuthProvider): void {
    const currentSessions = this.sessionsSubject$.value;
    const session = currentSessions.get(provider);

    if (session) {
      session.isActive = false;
      currentSessions.delete(provider);
      this.sessionsSubject$.next(currentSessions);

      // If this was the active session, clear it
      if (this.activeSessionSubject$.value?.provider === provider) {
        this.activeSessionSubject$.next(null);
      }

      this.persistSessions();
      console.log(`Session removed for provider: ${provider}`);
    }
  }

  /**
   * Logout from specific provider
   */
  public async logoutProvider(provider: AuthProvider): Promise<void> {
    const session = this.getSession(provider);
    if (session) {
      // Mark session as inactive
      session.isActive = false;
      this.removeSession(provider);

      console.log(`Logged out from provider: ${provider}`);
    }
  }

  /**
   * Logout from all providers
   */
  public async logoutAll(): Promise<void> {
    const sessions = this.getAllSessions();

    for (const session of sessions) {
      await this.logoutProvider(session.provider);
    }

    this.sessionsSubject$.next(new Map());
    this.activeSessionSubject$.next(null);
    this.clearStoredSessions();

    console.log('Logged out from all providers');
  }

  /**
   * Check if session is valid (not expired)
   */
  public isSessionValid(session: ProviderSession): boolean {
    const now = new Date();

    if (!session.isActive) {
      return false;
    }

    // Check token expiration (OAuth tokens)
    if (session.expiresAt && now > session.expiresAt) {
      return false;
    }

    // Check provider-specific session timeout
    const providerTimeout = session.metadata.customTimeout || this.getProviderTimeout(session.provider);
    const sessionAge = now.getTime() - session.loginTime.getTime();
    if (sessionAge > providerTimeout) {
      return false;
    }

    // Check idle timeout
    const idleTime = now.getTime() - session.lastActivity.getTime();
    const idleTimeout = session.metadata.idleTimeout || this.IDLE_TIMEOUT;
    if (idleTime > idleTimeout) {
      return false;
    }

    return true;
  }

  /**
   * Get provider-specific timeout
   */
  private getProviderTimeout(provider: AuthProvider): number {
    return this.PROVIDER_TIMEOUTS[provider] || this.SESSION_TIMEOUT;
  }

  /**
   * Set custom timeout for a provider session
   */
  public setProviderTimeout(provider: AuthProvider, timeoutMs: number): void {
    const session = this.getSession(provider);
    if (session) {
      session.metadata.customTimeout = timeoutMs;

      const currentSessions = this.sessionsSubject$.value;
      currentSessions.set(provider, session);
      this.sessionsSubject$.next(currentSessions);

      this.persistSessions();
      console.log(`Updated timeout for ${provider}: ${timeoutMs}ms`);
    }
  }

  /**
   * Set idle timeout for a provider session
   */
  public setIdleTimeout(provider: AuthProvider, idleTimeoutMs: number): void {
    const session = this.getSession(provider);
    if (session) {
      session.metadata.idleTimeout = idleTimeoutMs;

      const currentSessions = this.sessionsSubject$.value;
      currentSessions.set(provider, session);
      this.sessionsSubject$.next(currentSessions);

      this.persistSessions();
      console.log(`Updated idle timeout for ${provider}: ${idleTimeoutMs}ms`);
    }
  }

  /**
   * Send heartbeat to keep session alive
   */
  public sendHeartbeat(provider?: AuthProvider): void {
    const targetProvider = provider || this.activeSessionSubject$.value?.provider;
    if (!targetProvider) return;

    const session = this.getSession(targetProvider);
    if (session) {
      session.metadata.lastHeartbeat = new Date();
      session.lastActivity = new Date();

      const currentSessions = this.sessionsSubject$.value;
      currentSessions.set(targetProvider, session);
      this.sessionsSubject$.next(currentSessions);

      console.log(`Heartbeat sent for ${targetProvider}`);
    }
  }

  /**
   * Get session timeout information
   */
  public getSessionTimeoutInfo(provider: AuthProvider): {
    sessionTimeout: number;
    idleTimeout: number;
    timeUntilSessionExpiry: number;
    timeUntilIdleExpiry: number;
    isNearExpiry: boolean;
  } | null {
    const session = this.getSession(provider);
    if (!session) return null;

    const now = new Date();
    const sessionTimeout = session.metadata.customTimeout || this.getProviderTimeout(provider);
    const idleTimeout = session.metadata.idleTimeout || this.IDLE_TIMEOUT;

    const sessionAge = now.getTime() - session.loginTime.getTime();
    const idleTime = now.getTime() - session.lastActivity.getTime();

    const timeUntilSessionExpiry = sessionTimeout - sessionAge;
    const timeUntilIdleExpiry = idleTimeout - idleTime;

    // Consider "near expiry" if less than 15 minutes remaining
    const isNearExpiry = Math.min(timeUntilSessionExpiry, timeUntilIdleExpiry) < 15 * 60 * 1000;

    return {
      sessionTimeout,
      idleTimeout,
      timeUntilSessionExpiry: Math.max(0, timeUntilSessionExpiry),
      timeUntilIdleExpiry: Math.max(0, timeUntilIdleExpiry),
      isNearExpiry,
    };
  }

  /**
   * Refresh session for a provider
   */
  public async refreshSession(provider: AuthProvider): Promise<ProviderSession | null> {
    const session = this.getSession(provider);
    if (!session) {
      return null;
    }

    // Update last activity
    session.lastActivity = new Date();

    // Update sessions map
    const currentSessions = this.sessionsSubject$.value;
    currentSessions.set(provider, session);
    this.sessionsSubject$.next(currentSessions);

    this.persistSessions();
    return session;
  }

  /**
   * Check for session conflicts
   */
  private checkForConflicts(newSession: ProviderSession): void {
    const existingSessions = this.getAllSessions();
    const conflicts: SessionConflict[] = [];

    for (const existing of existingSessions) {
      // Check for duplicate email across providers
      if (existing.provider !== newSession.provider && existing.userProfile?.email === newSession.userProfile?.email) {
        conflicts.push({
          type: 'duplicate_email',
          primarySession: existing,
          conflictingSession: newSession,
          resolution: 'user_choice',
        });
      }

      // Check for concurrent logins on same provider
      if (existing.provider === newSession.provider && existing.isActive) {
        conflicts.push({
          type: 'concurrent_login',
          primarySession: existing,
          conflictingSession: newSession,
          resolution: 'replace',
        });
      }
    }

    if (conflicts.length > 0) {
      this.conflictsSubject$.next(conflicts);
      this.handleSessionConflicts(conflicts);
    }
  }

  /**
   * Handle session conflicts automatically
   */
  private handleSessionConflicts(conflicts: SessionConflict[]): void {
    for (const conflict of conflicts) {
      switch (conflict.resolution) {
        case 'replace':
          // Replace old session with new one
          this.removeSession(conflict.primarySession.provider);
          break;

        case 'merge':
          // Merge sessions (keep most recent activity)
          this.mergeSessionData(conflict.primarySession, conflict.conflictingSession);
          break;

        case 'user_choice':
          // Let user decide - emit conflict for UI handling
          console.warn('Session conflict requires user resolution:', conflict);
          break;

        default:
          console.warn('Unhandled session conflict:', conflict);
      }
    }
  }

  /**
   * Merge session data from two sessions
   */
  private mergeSessionData(primary: ProviderSession, secondary: ProviderSession): void {
    // Keep the most recent activity
    if (secondary.lastActivity > primary.lastActivity) {
      primary.lastActivity = secondary.lastActivity;
    }

    // Merge user profile data
    primary.userProfile = {
      ...primary.userProfile,
      ...secondary.userProfile,
    };

    // Update sessions map
    const currentSessions = this.sessionsSubject$.value;
    currentSessions.set(primary.provider, primary);
    this.sessionsSubject$.next(currentSessions);

    this.persistSessions();
  }

  /**
   * Start monitoring sessions for expiration and activity
   */
  private startSessionMonitoring(): void {
    // Check every 5 minutes for expired sessions
    setInterval(() => {
      this.cleanupExpiredSessions();
    }, 5 * 60 * 1000);

    // Send heartbeat every 5 minutes for active session
    setInterval(() => {
      this.sendHeartbeat();
    }, this.HEARTBEAT_INTERVAL);

    // Update activity on user interaction
    ['click', 'keydown', 'scroll', 'mousemove', 'touchstart'].forEach((event) => {
      document.addEventListener(
        event,
        () => {
          this.updateCurrentSessionActivity();
        },
        { passive: true }
      );
    });

    // Handle visibility change (tab switching)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        // Tab became visible, send heartbeat
        this.sendHeartbeat();
      }
    });

    // Handle page unload
    window.addEventListener('beforeunload', () => {
      this.persistSessions();
    });
  }

  /**
   * Clean up expired sessions
   */
  private cleanupExpiredSessions(): void {
    const currentSessions = this.sessionsSubject$.value;
    let hasChanges = false;

    for (const [provider, session] of currentSessions.entries()) {
      if (!this.isSessionValid(session)) {
        console.log(`Cleaning up expired session for provider: ${provider}`);
        currentSessions.delete(provider);
        hasChanges = true;

        // Clear active session if it's the expired one
        if (this.activeSessionSubject$.value?.provider === provider) {
          this.activeSessionSubject$.next(null);
        }
      }
    }

    if (hasChanges) {
      this.sessionsSubject$.next(currentSessions);
      this.persistSessions();
    }
  }

  /**
   * Update current session activity timestamp
   */
  private updateCurrentSessionActivity(): void {
    const activeSession = this.activeSessionSubject$.value;
    if (activeSession) {
      activeSession.lastActivity = new Date();

      const currentSessions = this.sessionsSubject$.value;
      currentSessions.set(activeSession.provider, activeSession);
      this.sessionsSubject$.next(currentSessions);
    }
  }

  /**
   * Generate unique session ID
   */
  public generateSessionId(provider: AuthProvider): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    return `${provider}_${timestamp}_${random}`;
  }

  /**
   * Get device information
   */
  private getDeviceInfo(): string {
    const screen = window.screen;
    const navigator = window.navigator;
    return `${screen.width}x${screen.height}_${navigator.platform}`;
  }

  /**
   * Persist sessions to localStorage
   */
  private persistSessions(): void {
    try {
      const sessions = Array.from(this.sessionsSubject$.value.values());
      const activeSession = this.activeSessionSubject$.value;

      const data = {
        sessions: sessions.map((session) => ({
          ...session,
          loginTime: session.loginTime.toISOString(),
          lastActivity: session.lastActivity.toISOString(),
          expiresAt: session.expiresAt?.toISOString() || null,
        })),
        activeProvider: activeSession?.provider || null,
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to persist sessions:', error);
    }
  }

  /**
   * Load sessions from localStorage
   */
  private loadStoredSessions(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return;

      const data = JSON.parse(stored);
      const sessionsMap = new Map<AuthProvider, ProviderSession>();

      for (const sessionData of data.sessions || []) {
        const session: ProviderSession = {
          ...sessionData,
          loginTime: new Date(sessionData.loginTime),
          lastActivity: new Date(sessionData.lastActivity),
          expiresAt: sessionData.expiresAt ? new Date(sessionData.expiresAt) : null,
        };

        // Only load valid sessions
        if (this.isSessionValid(session)) {
          sessionsMap.set(session.provider, session);
        }
      }

      this.sessionsSubject$.next(sessionsMap);

      // Restore active session
      if (data.activeProvider && sessionsMap.has(data.activeProvider)) {
        this.activeSessionSubject$.next(sessionsMap.get(data.activeProvider)!);
      }

      console.log(`Loaded ${sessionsMap.size} valid sessions from storage`);
    } catch (error) {
      console.warn('Failed to load stored sessions:', error);
      this.clearStoredSessions();
    }
  }

  /**
   * Clear stored sessions
   */
  private clearStoredSessions(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear stored sessions:', error);
    }
  }

  /**
   * Get current conflicts
   */
  public getCurrentConflicts(): SessionConflict[] {
    return this.conflictsSubject$.value;
  }

  /**
   * Get session statistics
   */
  public getSessionStats(): {
    totalSessions: number;
    activeSessions: number;
    expiredSessions: number;
    oldestSession: Date | null;
    newestSession: Date | null;
  } {
    const allSessions = Array.from(this.sessionsSubject$.value.values());
    const activeSessions = allSessions.filter((s) => this.isSessionValid(s));
    const expiredSessions = allSessions.filter((s) => !this.isSessionValid(s));

    const loginTimes = allSessions.map((s) => s.loginTime);

    return {
      totalSessions: allSessions.length,
      activeSessions: activeSessions.length,
      expiredSessions: expiredSessions.length,
      oldestSession: loginTimes.length > 0 ? new Date(Math.min(...loginTimes.map((d) => d.getTime()))) : null,
      newestSession: loginTimes.length > 0 ? new Date(Math.max(...loginTimes.map((d) => d.getTime()))) : null,
    };
  }
}
