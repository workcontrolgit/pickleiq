import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthProvider } from './auth.service';

export interface UserPreferences {
  id: string;
  email: string;
  auth: {
    preferredProvider: AuthProvider;
    providerHistory: {
      provider: AuthProvider;
      lastUsed: Date;
      useCount: number;
      successRate: number; // 0-1, based on successful logins
    }[];
    autoSwitchEnabled: boolean;
    rememberProvider: boolean;
    sessionTimeout: number; // minutes, 0 = use default
  };
  ui: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    showProviderIcons: boolean;
    compactMode: boolean;
  };
  privacy: {
    allowAnalytics: boolean;
    allowSessionMerging: boolean;
    allowAutoLogin: boolean;
  };
  lastUpdated: Date;
}

export interface ProviderUsageStats {
  provider: AuthProvider;
  totalLogins: number;
  successfulLogins: number;
  lastUsed: Date;
  averageSessionDuration: number; // minutes
  preferenceScore: number; // 0-100, calculated score for recommendation
}

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesService {
  private readonly STORAGE_KEY = 'user_preferences';
  private readonly DEFAULT_SESSION_TIMEOUT = 480; // 8 hours in minutes

  private preferencesSubject$ = new BehaviorSubject<UserPreferences | null>(null);
  private providerStatsSubject$ = new BehaviorSubject<ProviderUsageStats[]>([]);

  public preferences$ = this.preferencesSubject$.asObservable();
  public providerStats$ = this.providerStatsSubject$.asObservable();

  constructor() {
    this.loadPreferences();
  }

  /**
   * Initialize preferences for a new user
   */
  public initializePreferences(email: string, preferredProvider: AuthProvider): UserPreferences {
    const preferences: UserPreferences = {
      id: `prefs_${Date.now()}`,
      email: email.toLowerCase(),
      auth: {
        preferredProvider,
        providerHistory: [
          {
            provider: preferredProvider,
            lastUsed: new Date(),
            useCount: 1,
            successRate: 1.0,
          },
        ],
        autoSwitchEnabled: true,
        rememberProvider: true,
        sessionTimeout: this.DEFAULT_SESSION_TIMEOUT,
      },
      ui: {
        theme: 'auto',
        language: 'en',
        showProviderIcons: true,
        compactMode: false,
      },
      privacy: {
        allowAnalytics: true,
        allowSessionMerging: true,
        allowAutoLogin: false,
      },
      lastUpdated: new Date(),
    };

    this.preferencesSubject$.next(preferences);
    this.savePreferences();
    return preferences;
  }

  /**
   * Get current user preferences
   */
  public getCurrentPreferences(): UserPreferences | null {
    return this.preferencesSubject$.value;
  }

  /**
   * Update user preferences
   */
  public updatePreferences(updates: Partial<UserPreferences>): void {
    const current = this.preferencesSubject$.value;
    if (!current) return;

    const updated: UserPreferences = {
      ...current,
      ...updates,
      lastUpdated: new Date(),
    };

    this.preferencesSubject$.next(updated);
    this.savePreferences();
  }

  /**
   * Record provider usage for analytics and recommendations
   */
  public recordProviderUsage(provider: AuthProvider, loginSuccess: boolean, sessionDuration?: number): void {
    const preferences = this.preferencesSubject$.value;
    if (!preferences) return;

    // Update provider history
    const historyIndex = preferences.auth.providerHistory.findIndex((h) => h.provider === provider);

    if (historyIndex >= 0) {
      const history = preferences.auth.providerHistory[historyIndex];
      history.lastUsed = new Date();
      history.useCount += 1;

      // Update success rate (weighted average)
      const totalAttempts = history.useCount;
      const successfulAttempts = Math.round(history.successRate * (totalAttempts - 1)) + (loginSuccess ? 1 : 0);
      history.successRate = successfulAttempts / totalAttempts;
    } else {
      // Add new provider to history
      preferences.auth.providerHistory.push({
        provider,
        lastUsed: new Date(),
        useCount: 1,
        successRate: loginSuccess ? 1.0 : 0.0,
      });
    }

    // Update provider stats
    this.updateProviderStats(provider, loginSuccess, sessionDuration);

    preferences.lastUpdated = new Date();
    this.preferencesSubject$.next(preferences);
    this.savePreferences();
  }

  /**
   * Update provider statistics
   */
  private updateProviderStats(provider: AuthProvider, loginSuccess: boolean, sessionDuration?: number): void {
    const currentStats = this.providerStatsSubject$.value;
    const statIndex = currentStats.findIndex((s) => s.provider === provider);

    if (statIndex >= 0) {
      const stat = currentStats[statIndex];
      stat.totalLogins += 1;
      if (loginSuccess) stat.successfulLogins += 1;
      stat.lastUsed = new Date();

      // Update average session duration
      if (sessionDuration && sessionDuration > 0) {
        const currentAvg = stat.averageSessionDuration;
        const newCount = stat.successfulLogins;
        stat.averageSessionDuration = (currentAvg * (newCount - 1) + sessionDuration) / newCount;
      }

      // Recalculate preference score
      stat.preferenceScore = this.calculatePreferenceScore(stat);
    } else {
      // Create new stat entry
      const newStat: ProviderUsageStats = {
        provider,
        totalLogins: 1,
        successfulLogins: loginSuccess ? 1 : 0,
        lastUsed: new Date(),
        averageSessionDuration: sessionDuration || 0,
        preferenceScore: loginSuccess ? 50 : 10, // Initial score
      };

      currentStats.push(newStat);
    }

    // Sort by preference score
    currentStats.sort((a, b) => b.preferenceScore - a.preferenceScore);

    this.providerStatsSubject$.next(currentStats);
  }

  /**
   * Calculate preference score for a provider
   */
  private calculatePreferenceScore(stat: ProviderUsageStats): number {
    let score = 0;

    // Success rate (40% weight)
    const successRate = stat.successfulLogins / stat.totalLogins;
    score += successRate * 40;

    // Usage frequency (30% weight)
    const now = new Date();
    const daysSinceLastUse = (now.getTime() - stat.lastUsed.getTime()) / (1000 * 60 * 60 * 24);
    const recencyScore = Math.max(0, 30 - daysSinceLastUse); // 30 days max
    score += (recencyScore / 30) * 30;

    // Total usage (20% weight)
    const usageScore = Math.min(stat.totalLogins, 20); // Cap at 20 logins
    score += (usageScore / 20) * 20;

    // Session duration (10% weight) - longer sessions suggest better UX
    const durationScore = Math.min(stat.averageSessionDuration / 60, 10); // Cap at 10 hours
    score += (durationScore / 10) * 10;

    return Math.min(score, 100);
  }

  /**
   * Get recommended provider based on usage history
   */
  public getRecommendedProvider(email?: string): AuthProvider | null {
    const preferences = this.preferencesSubject$.value;

    // If we have preferences and remember provider is enabled
    if (preferences && preferences.auth.rememberProvider) {
      return preferences.auth.preferredProvider;
    }

    // Get provider with highest preference score
    const stats = this.providerStatsSubject$.value;
    if (stats.length > 0) {
      return stats[0].provider; // Already sorted by preference score
    }

    return null;
  }

  /**
   * Get provider usage statistics
   */
  public getProviderStats(): ProviderUsageStats[] {
    return this.providerStatsSubject$.value;
  }

  /**
   * Set preferred provider
   */
  public setPreferredProvider(provider: AuthProvider): void {
    const preferences = this.preferencesSubject$.value;
    if (!preferences) return;

    preferences.auth.preferredProvider = provider;
    preferences.lastUpdated = new Date();

    this.preferencesSubject$.next(preferences);
    this.savePreferences();
  }

  /**
   * Enable/disable auto-switching
   */
  public setAutoSwitchEnabled(enabled: boolean): void {
    const preferences = this.preferencesSubject$.value;
    if (!preferences) return;

    preferences.auth.autoSwitchEnabled = enabled;
    preferences.lastUpdated = new Date();

    this.preferencesSubject$.next(preferences);
    this.savePreferences();
  }

  /**
   * Set custom session timeout
   */
  public setSessionTimeout(minutes: number): void {
    const preferences = this.preferencesSubject$.value;
    if (!preferences) return;

    preferences.auth.sessionTimeout = Math.max(0, minutes);
    preferences.lastUpdated = new Date();

    this.preferencesSubject$.next(preferences);
    this.savePreferences();
  }

  /**
   * Get session timeout for current user
   */
  public getSessionTimeout(): number {
    const preferences = this.preferencesSubject$.value;
    return preferences?.auth.sessionTimeout || this.DEFAULT_SESSION_TIMEOUT;
  }

  /**
   * Check if auto-switching is enabled
   */
  public isAutoSwitchEnabled(): boolean {
    const preferences = this.preferencesSubject$.value;
    return preferences?.auth.autoSwitchEnabled ?? true;
  }

  /**
   * Get provider history sorted by preference
   */
  public getProviderHistory(): { provider: AuthProvider; lastUsed: Date; useCount: number; successRate: number }[] {
    const preferences = this.preferencesSubject$.value;
    if (!preferences) return [];

    return preferences.auth.providerHistory.sort((a, b) => {
      // Sort by success rate first, then by last used
      const successDiff = b.successRate - a.successRate;
      if (Math.abs(successDiff) > 0.1) return successDiff;
      return b.lastUsed.getTime() - a.lastUsed.getTime();
    });
  }

  /**
   * Reset provider statistics
   */
  public resetProviderStats(): void {
    this.providerStatsSubject$.next([]);

    const preferences = this.preferencesSubject$.value;
    if (preferences) {
      preferences.auth.providerHistory = [];
      preferences.lastUpdated = new Date();
      this.preferencesSubject$.next(preferences);
      this.savePreferences();
    }
  }

  /**
   * Export preferences for backup
   */
  public exportPreferences(): string {
    const preferences = this.preferencesSubject$.value;
    const stats = this.providerStatsSubject$.value;

    return JSON.stringify(
      {
        preferences,
        stats,
        exportedAt: new Date().toISOString(),
      },
      null,
      2
    );
  }

  /**
   * Import preferences from backup
   */
  public importPreferences(data: string): boolean {
    try {
      const imported = JSON.parse(data);

      if (imported.preferences) {
        // Convert date strings back to Date objects
        imported.preferences.lastUpdated = new Date(imported.preferences.lastUpdated);
        imported.preferences.auth.providerHistory = imported.preferences.auth.providerHistory.map((h: any) => ({
          ...h,
          lastUsed: new Date(h.lastUsed),
        }));

        this.preferencesSubject$.next(imported.preferences);
      }

      if (imported.stats) {
        // Convert date strings back to Date objects
        imported.stats = imported.stats.map((s: any) => ({
          ...s,
          lastUsed: new Date(s.lastUsed),
        }));

        this.providerStatsSubject$.next(imported.stats);
      }

      this.savePreferences();
      console.log('Preferences imported successfully');
      return true;
    } catch (error) {
      console.error('Failed to import preferences:', error);
      return false;
    }
  }

  /**
   * Save preferences to localStorage
   */
  private savePreferences(): void {
    try {
      const preferences = this.preferencesSubject$.value;
      const stats = this.providerStatsSubject$.value;

      if (preferences) {
        const dataToSave = {
          preferences: {
            ...preferences,
            lastUpdated: preferences.lastUpdated.toISOString(),
            auth: {
              ...preferences.auth,
              providerHistory: preferences.auth.providerHistory.map((h) => ({
                ...h,
                lastUsed: h.lastUsed.toISOString(),
              })),
            },
          },
          stats: stats.map((s) => ({
            ...s,
            lastUsed: s.lastUsed.toISOString(),
          })),
        };

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dataToSave));
      }
    } catch (error) {
      console.warn('Failed to save preferences:', error);
    }
  }

  /**
   * Load preferences from localStorage
   */
  private loadPreferences(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return;

      const data = JSON.parse(stored);

      if (data.preferences) {
        // Convert date strings back to Date objects
        data.preferences.lastUpdated = new Date(data.preferences.lastUpdated);
        data.preferences.auth.providerHistory = data.preferences.auth.providerHistory.map((h: any) => ({
          ...h,
          lastUsed: new Date(h.lastUsed),
        }));

        this.preferencesSubject$.next(data.preferences);
      }

      if (data.stats) {
        // Convert date strings back to Date objects
        data.stats = data.stats.map((s: any) => ({
          ...s,
          lastUsed: new Date(s.lastUsed),
        }));

        this.providerStatsSubject$.next(data.stats);
      }

      console.log('Preferences loaded successfully');
    } catch (error) {
      console.warn('Failed to load preferences:', error);
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  /**
   * Clear all preferences
   */
  public clearPreferences(): void {
    this.preferencesSubject$.next(null);
    this.providerStatsSubject$.next([]);
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
