import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil, map, combineLatest } from 'rxjs';
import { AuthService, AuthProvider } from '@app/@core/auth/auth.service';
import { SessionManagerService, ProviderSession } from '@app/@core/auth/session-manager.service';
import { OAuthProviderFactoryService } from '@app/@core/auth/oauth-provider-factory.service';

export interface ProviderStatus {
  provider: AuthProvider;
  isConnected: boolean;
  isActive: boolean;
  isExpiring: boolean;
  isExpired: boolean;
  lastLogin?: Date;
  expiresAt?: Date;
  minutesToExpiry?: number;
  sessionId?: string;
  hasErrors?: boolean;
  errorMessage?: string;
}

@Component({
  selector: 'app-provider-status-indicator',
  templateUrl: './provider-status-indicator.component.html',
  styleUrls: ['./provider-status-indicator.component.scss'],
  imports: [CommonModule],
})
export class ProviderStatusIndicatorComponent implements OnInit, OnDestroy {
  @Input() layout: 'compact' | 'detailed' | 'badges' = 'compact';
  @Input() showOnlyConnected = false;
  @Input() showExpiredSessions = true;
  @Input() showLastLogin = true;
  @Input() autoRefresh = true;
  @Input() refreshInterval = 30000; // 30 seconds

  private destroy$ = new Subject<void>();
  private refreshTimer?: number;

  providerStatuses: ProviderStatus[] = [];
  availableProviders: AuthProvider[] = [];
  isLoading = true;

  constructor(
    private authService: AuthService,
    private sessionManager: SessionManagerService,
    private providerFactory: OAuthProviderFactoryService
  ) {}

  ngOnInit(): void {
    this.initializeStatusMonitoring();
    this.loadAvailableProviders();

    if (this.autoRefresh) {
      this.startAutoRefresh();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  }

  private initializeStatusMonitoring(): void {
    // Combine session monitoring with authentication state
    combineLatest([this.sessionManager.sessions$, this.authService.isAuthenticated$, this.authService.authProvider$])
      .pipe(
        takeUntil(this.destroy$),
        map(([sessionsMap, isAuthenticated, currentProvider]) => {
          const sessions = Array.from(sessionsMap.values());
          return this.buildProviderStatuses(sessions, currentProvider);
        })
      )
      .subscribe((statuses) => {
        this.providerStatuses = statuses;
        this.isLoading = false;
      });

    // Monitor session health for expiration warnings
    this.authService
      .monitorSessionHealth()
      .pipe(takeUntil(this.destroy$))
      .subscribe((healthStatuses) => {
        this.updateHealthStatuses(healthStatuses);
      });
  }

  private loadAvailableProviders(): void {
    this.availableProviders = this.authService.getAvailableProviders();
  }

  private buildProviderStatuses(sessions: ProviderSession[], currentProvider: AuthProvider | null): ProviderStatus[] {
    const statuses: ProviderStatus[] = [];
    const sessionMap = new Map(sessions.map((s) => [s.provider, s]));

    // Process all available providers
    for (const provider of this.availableProviders) {
      const session = sessionMap.get(provider);
      const status = this.createProviderStatus(provider, session, currentProvider);

      // Filter based on showOnlyConnected setting
      if (!this.showOnlyConnected || status.isConnected) {
        statuses.push(status);
      }
    }

    // Sort by connection status, then by last login
    return statuses.sort((a, b) => {
      // Connected providers first
      if (a.isConnected !== b.isConnected) {
        return a.isConnected ? -1 : 1;
      }

      // Active provider first among connected
      if (a.isConnected && b.isConnected) {
        if (a.isActive !== b.isActive) {
          return a.isActive ? -1 : 1;
        }
      }

      // Most recent login first
      const aTime = a.lastLogin?.getTime() || 0;
      const bTime = b.lastLogin?.getTime() || 0;
      return bTime - aTime;
    });
  }

  private createProviderStatus(
    provider: AuthProvider,
    session: ProviderSession | undefined,
    currentProvider: AuthProvider | null
  ): ProviderStatus {
    const now = new Date();
    const status: ProviderStatus = {
      provider,
      isConnected: !!session && this.sessionManager.isSessionValid(session),
      isActive: provider === currentProvider,
      isExpiring: false,
      isExpired: false,
    };

    if (session) {
      status.lastLogin = session.loginTime;
      status.expiresAt = session.expiresAt;
      status.sessionId = session.sessionId;

      // Check expiration status
      if (session.expiresAt) {
        const timeToExpiry = session.expiresAt.getTime() - now.getTime();
        const minutesToExpiry = Math.floor(timeToExpiry / (1000 * 60));

        status.minutesToExpiry = minutesToExpiry;

        if (minutesToExpiry <= 0) {
          status.isExpired = true;
          status.isConnected = false;
          status.errorMessage = 'Session expired';
          status.hasErrors = true;
        } else if (minutesToExpiry <= 15) {
          status.isExpiring = true;
          status.errorMessage = `Expires in ${minutesToExpiry} minutes`;
        }
      }

      // Validate session integrity
      if (!this.sessionManager.isSessionValid(session)) {
        status.isConnected = false;
        status.hasErrors = true;
        status.errorMessage = 'Invalid session';
      }
    }

    return status;
  }

  private updateHealthStatuses(healthStatuses: any[]): void {
    const healthMap = new Map(healthStatuses.map((h) => [h.provider, h]));

    this.providerStatuses = this.providerStatuses.map((status) => {
      const health = healthMap.get(status.provider);
      if (health) {
        status.isExpiring = health.status === 'expiring';
        status.isExpired = health.status === 'expired';
        status.minutesToExpiry = health.expiresIn;

        if (health.status === 'expired') {
          status.isConnected = false;
          status.hasErrors = true;
          status.errorMessage = 'Session expired';
        } else if (health.status === 'expiring') {
          status.errorMessage = `Expires in ${health.expiresIn} minutes`;
        } else if (health.status === 'invalid') {
          status.isConnected = false;
          status.hasErrors = true;
          status.errorMessage = 'Invalid session';
        }
      }
      return status;
    });
  }

  private startAutoRefresh(): void {
    this.refreshTimer = window.setInterval(() => {
      this.refreshStatuses();
    }, this.refreshInterval);
  }

  /**
   * Get provider display name
   */
  public getProviderDisplayName(provider: AuthProvider): string {
    const metadata = this.providerFactory.getProviderMetadata(provider);
    return metadata?.name || this.getDefaultProviderName(provider);
  }

  private getDefaultProviderName(provider: AuthProvider): string {
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
   * Get provider icon
   */
  public getProviderIcon(provider: AuthProvider): string {
    const metadata = this.providerFactory.getProviderMetadata(provider);
    if (metadata?.icon) return metadata.icon;

    switch (provider) {
      case 'anonymous':
        return 'fas fa-user-secret';
      case 'oidc':
        return 'fas fa-shield-alt';
      case 'google':
        return 'fab fa-google';
      case 'facebook':
        return 'fab fa-facebook-f';
      case 'github':
        return 'fab fa-github';
      case 'microsoft':
        return 'fab fa-microsoft';
      default:
        return 'fas fa-user';
    }
  }

  /**
   * Get provider brand color
   */
  public getProviderBrandColor(provider: AuthProvider): string {
    const metadata = this.providerFactory.getProviderMetadata(provider);
    if (metadata?.brandColor) return metadata.brandColor;

    switch (provider) {
      case 'anonymous':
        return '#6c757d';
      case 'oidc':
        return '#007bff';
      case 'google':
        return '#db4437';
      case 'facebook':
        return '#4267B2';
      case 'github':
        return '#333';
      case 'microsoft':
        return '#00a1f1';
      default:
        return '#007bff';
    }
  }

  /**
   * Get status color class
   */
  public getStatusColorClass(status: ProviderStatus): string {
    if (status.hasErrors || status.isExpired) return 'text-danger';
    if (status.isExpiring) return 'text-warning';
    if (status.isConnected && status.isActive) return 'text-success';
    if (status.isConnected) return 'text-info';
    return 'text-muted';
  }

  /**
   * Get status badge class
   */
  public getStatusBadgeClass(status: ProviderStatus): string {
    if (status.hasErrors || status.isExpired) return 'badge bg-danger';
    if (status.isExpiring) return 'badge bg-warning';
    if (status.isConnected && status.isActive) return 'badge bg-success';
    if (status.isConnected) return 'badge bg-info';
    return 'badge bg-secondary';
  }

  /**
   * Get status text
   */
  public getStatusText(status: ProviderStatus): string {
    if (status.hasErrors || status.isExpired) return 'Expired';
    if (status.isExpiring) return 'Expiring';
    if (status.isConnected && status.isActive) return 'Active';
    if (status.isConnected) return 'Connected';
    return 'Disconnected';
  }

  /**
   * Get status icon
   */
  public getStatusIcon(status: ProviderStatus): string {
    if (status.hasErrors || status.isExpired) return 'fas fa-exclamation-triangle';
    if (status.isExpiring) return 'fas fa-clock';
    if (status.isConnected && status.isActive) return 'fas fa-check-circle';
    if (status.isConnected) return 'fas fa-link';
    return 'fas fa-unlink';
  }

  /**
   * Format time since last login
   */
  public formatTimeSince(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h ago`;

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  }

  /**
   * Format expiry time
   */
  public formatExpiryTime(minutes: number): string {
    if (minutes <= 0) return 'Expired';
    if (minutes < 60) return `${minutes}m left`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h left`;

    const days = Math.floor(hours / 24);
    return `${days}d left`;
  }

  /**
   * Connect to a provider
   */
  public async connectProvider(provider: AuthProvider): Promise<void> {
    try {
      await this.authService.loginWithProvider(provider);
    } catch (error) {
      console.error(`Failed to connect to ${provider}:`, error);
    }
  }

  /**
   * Disconnect from a provider
   */
  public async disconnectProvider(provider: AuthProvider): Promise<void> {
    try {
      await this.authService.logoutProvider(provider);
    } catch (error) {
      console.error(`Failed to disconnect from ${provider}:`, error);
    }
  }

  /**
   * Switch to a provider
   */
  public async switchToProvider(provider: AuthProvider): Promise<void> {
    try {
      await this.authService.switchProvider(provider);
    } catch (error) {
      console.error(`Failed to switch to ${provider}:`, error);
    }
  }

  /**
   * Refresh a provider session
   */
  public async refreshProvider(provider: AuthProvider): Promise<void> {
    try {
      // This would trigger a session refresh for the specific provider
      await this.authService.refreshExpiringSessions();
      this.refreshStatuses();
    } catch (error) {
      console.error(`Failed to refresh ${provider}:`, error);
    }
  }

  /**
   * Manually refresh all provider statuses
   */
  public refreshStatuses(): void {
    // Trigger a manual refresh by getting current sessions
    const sessions = this.sessionManager.getAllSessions();
    const currentProvider = this.authService.getCurrentProvider();
    this.providerStatuses = this.buildProviderStatuses(sessions, currentProvider);
  }

  /**
   * Check if provider can be connected
   */
  public canConnect(provider: AuthProvider): boolean {
    return this.authService.isProviderAvailable(provider);
  }

  /**
   * Check if provider can be switched to
   */
  public canSwitchTo(provider: AuthProvider): boolean {
    return this.authService.canSwitchToProvider(provider);
  }

  /**
   * Get filtered statuses based on current settings
   */
  public getFilteredStatuses(): ProviderStatus[] {
    let filtered = this.providerStatuses;

    if (this.showOnlyConnected) {
      filtered = filtered.filter((s) => s.isConnected);
    }

    if (!this.showExpiredSessions) {
      filtered = filtered.filter((s) => !s.isExpired);
    }

    return filtered;
  }
}
