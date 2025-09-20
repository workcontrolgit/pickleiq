import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil, combineLatest, map } from 'rxjs';
import { AuthService, AuthProvider } from '@app/@core/auth/auth.service';
import { SessionManagerService, ProviderSession } from '@app/@core/auth/session-manager.service';
import { OAuthProviderFactoryService, OAuthProviderMetadata } from '@app/@core/auth/oauth-provider-factory.service';
import { UserPreferencesService } from '@app/@core/auth/user-preferences.service';

export interface ProviderSwitchEvent {
  fromProvider: AuthProvider;
  toProvider: AuthProvider;
  success: boolean;
}

@Component({
  selector: 'app-provider-switcher',
  templateUrl: './provider-switcher.component.html',
  styleUrls: ['./provider-switcher.component.scss'],
  imports: [CommonModule],
})
export class ProviderSwitcherComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  availableSessions: ProviderSession[] = [];
  activeSession: ProviderSession | null = null;
  isAuthenticated = false;
  isSwitching = false;
  switchingToProvider: AuthProvider | null = null;

  // UI Configuration
  @Input() compactMode = false;
  showDropdown = false;
  dropdownPosition: 'top' | 'bottom' = 'bottom';

  constructor(
    private authService: AuthService,
    private sessionManager: SessionManagerService,
    private providerFactory: OAuthProviderFactoryService,
    private userPreferences: UserPreferencesService
  ) {}

  ngOnInit(): void {
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeSubscriptions(): void {
    // Monitor authentication state
    this.authService.isAuthenticated$.pipe(takeUntil(this.destroy$)).subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
    });

    // Monitor available sessions
    this.sessionManager.sessions$.pipe(takeUntil(this.destroy$)).subscribe((sessionsMap) => {
      this.availableSessions = Array.from(sessionsMap.values())
        .filter((session) => session.isActive && this.sessionManager.isSessionValid(session))
        .sort((a, b) => b.lastActivity.getTime() - a.lastActivity.getTime());
    });

    // Monitor active session
    this.sessionManager.activeSession$.pipe(takeUntil(this.destroy$)).subscribe((session) => {
      this.activeSession = session;
    });
  }

  /**
   * Switch to a different provider
   */
  public async switchToProvider(provider: AuthProvider): Promise<void> {
    if (this.isSwitching || !this.isAuthenticated) return;
    if (this.activeSession?.provider === provider) return;

    const fromProvider = this.activeSession?.provider;
    this.isSwitching = true;
    this.switchingToProvider = provider;

    try {
      // Record the switch attempt
      console.log(`Switching from ${fromProvider} to ${provider}`);

      // Use session manager to switch
      const newSession = await this.sessionManager.switchToProvider(provider);

      if (newSession) {
        // Update auth service state
        await this.authService.setCurrentProvider(provider);

        // Record successful switch for analytics
        this.recordProviderSwitch(fromProvider!, provider, true);

        console.log(`Successfully switched to ${provider}`);
      }
    } catch (error) {
      console.error(`Failed to switch to ${provider}:`, error);

      // Record failed switch
      if (fromProvider) {
        this.recordProviderSwitch(fromProvider, provider, false);
      }

      // Show error to user (you might want to use a toast service)
      this.handleSwitchError(error, provider);
    } finally {
      this.isSwitching = false;
      this.switchingToProvider = null;
      this.showDropdown = false;
    }
  }

  /**
   * Get provider metadata for display
   */
  public getProviderMetadata(provider: AuthProvider): OAuthProviderMetadata | null {
    return this.providerFactory.getProviderMetadata(provider);
  }

  /**
   * Get display name for provider
   */
  public getProviderDisplayName(provider: AuthProvider): string {
    const metadata = this.getProviderMetadata(provider);
    return metadata?.name || this.getDefaultDisplayName(provider);
  }

  private getDefaultDisplayName(provider: AuthProvider): string {
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
        return (provider as string).charAt(0).toUpperCase() + (provider as string).slice(1);
    }
  }

  /**
   * Get provider icon
   */
  public getProviderIcon(provider: AuthProvider): string {
    const metadata = this.getProviderMetadata(provider);
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
        return 'fas fa-sign-in-alt';
    }
  }

  /**
   * Get provider brand color
   */
  public getProviderBrandColor(provider: AuthProvider): string {
    const metadata = this.getProviderMetadata(provider);
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
   * Check if switching to a provider
   */
  public isSwitchingToProvider(provider: AuthProvider): boolean {
    return this.isSwitching && this.switchingToProvider === provider;
  }

  /**
   * Get session time remaining
   */
  public getSessionTimeRemaining(session: ProviderSession): string {
    const timeoutInfo = this.sessionManager.getSessionTimeoutInfo(session.provider);
    if (!timeoutInfo) return '';

    const minRemaining = Math.min(timeoutInfo.timeUntilSessionExpiry, timeoutInfo.timeUntilIdleExpiry) / (1000 * 60); // Convert to minutes

    if (minRemaining < 60) {
      return `${Math.floor(minRemaining)}m`;
    } else {
      return `${Math.floor(minRemaining / 60)}h`;
    }
  }

  /**
   * Check if session is near expiry
   */
  public isSessionNearExpiry(session: ProviderSession): boolean {
    const timeoutInfo = this.sessionManager.getSessionTimeoutInfo(session.provider);
    return timeoutInfo?.isNearExpiry || false;
  }

  /**
   * Toggle dropdown visibility
   */
  public toggleDropdown(): void {
    if (!this.hasMultipleSessions()) return;
    this.showDropdown = !this.showDropdown;
  }

  /**
   * Close dropdown
   */
  public closeDropdown(): void {
    this.showDropdown = false;
  }

  /**
   * Check if we have multiple sessions to switch between
   */
  public hasMultipleSessions(): boolean {
    return this.availableSessions.length > 1;
  }

  /**
   * Get sessions that can be switched to (excluding current)
   */
  public getSwitchableSessions(): ProviderSession[] {
    return this.availableSessions.filter((session) => session.provider !== this.activeSession?.provider);
  }

  /**
   * Record provider switch for analytics
   */
  private recordProviderSwitch(fromProvider: AuthProvider, toProvider: AuthProvider, success: boolean): void {
    try {
      // Record usage for the target provider
      this.userPreferences.recordProviderUsage(toProvider, success);

      // Could also emit an event for external analytics
      const switchEvent: ProviderSwitchEvent = {
        fromProvider,
        toProvider,
        success,
      };

      console.log('Provider switch recorded:', switchEvent);
    } catch (error) {
      console.warn('Failed to record provider switch:', error);
    }
  }

  /**
   * Handle switch errors
   */
  private handleSwitchError(error: any, provider: AuthProvider): void {
    let message = `Failed to switch to ${this.getProviderDisplayName(provider)}`;

    if (error?.message?.includes('expired')) {
      message += '. Session has expired. Please log in again.';
    } else if (error?.message?.includes('not found')) {
      message += '. No active session found.';
    } else {
      message += '. Please try again.';
    }

    // In a real app, you'd use a toast/notification service
    console.error(message, error);

    // You could emit an error event here for parent components to handle
  }

  /**
   * Get tooltip text for active session
   */
  public getActiveSessionTooltip(): string {
    if (!this.activeSession) return '';

    const displayName = this.getProviderDisplayName(this.activeSession.provider);
    const timeRemaining = this.getSessionTimeRemaining(this.activeSession);

    let tooltip = `Signed in with ${displayName}`;
    if (timeRemaining) {
      tooltip += ` • ${timeRemaining} remaining`;
    }

    return tooltip;
  }

  /**
   * Get tooltip text for switchable session
   */
  public getSwitchableSessionTooltip(session: ProviderSession): string {
    const displayName = this.getProviderDisplayName(session.provider);
    const timeRemaining = this.getSessionTimeRemaining(session);

    let tooltip = `Switch to ${displayName}`;
    if (timeRemaining) {
      tooltip += ` • ${timeRemaining} remaining`;
    }

    return tooltip;
  }
}
