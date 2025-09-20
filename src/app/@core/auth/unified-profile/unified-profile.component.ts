import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { UnifiedProfileService, UnifiedUserProfile, ProviderUserData } from '@app/@core/auth/unified-profile.service';
import { AuthService, AuthProvider } from '@app/@core/auth/auth.service';
import { OAuthProviderFactoryService } from '@app/@core/auth/oauth-provider-factory.service';

@Component({
  selector: 'app-unified-profile',
  templateUrl: './unified-profile.component.html',
  styleUrls: ['./unified-profile.component.scss'],
  imports: [CommonModule],
})
export class UnifiedProfileComponent implements OnInit, OnDestroy {
  @Input() layout: 'card' | 'compact' | 'detailed' = 'card';
  @Input() showProviderSources = true;
  @Input() showDataCompleteness = true;
  @Input() allowEditing = false;

  private destroy$ = new Subject<void>();

  unifiedProfile: UnifiedUserProfile | null = null;
  providerData: ProviderUserData[] = [];
  isAuthenticated = false;
  isLoading = true;

  // UI state
  expandedSections: Set<string> = new Set();
  showAllEmails = false;
  showAllProviders = false;

  constructor(
    private unifiedProfileService: UnifiedProfileService,
    private authService: AuthService,
    private providerFactory: OAuthProviderFactoryService
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
      this.isLoading = false;
    });

    // Monitor unified profile
    this.unifiedProfileService.unifiedProfile$.pipe(takeUntil(this.destroy$)).subscribe((profile) => {
      this.unifiedProfile = profile;
      this.isLoading = false;
    });

    // Monitor provider data
    this.unifiedProfileService.providerData$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.providerData = data;
    });
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
   * Get completeness color based on percentage
   */
  public getCompletenessColor(percentage: number): string {
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'danger';
  }

  /**
   * Get completeness text based on percentage
   */
  public getCompletenessText(percentage: number): string {
    if (percentage >= 90) return 'Excellent';
    if (percentage >= 80) return 'Very Good';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Fair';
    return 'Needs Improvement';
  }

  /**
   * Toggle section expansion
   */
  public toggleSection(section: string): void {
    if (this.expandedSections.has(section)) {
      this.expandedSections.delete(section);
    } else {
      this.expandedSections.add(section);
    }
  }

  /**
   * Check if section is expanded
   */
  public isSectionExpanded(section: string): boolean {
    return this.expandedSections.has(section);
  }

  /**
   * Get visible emails (limited or all)
   */
  public getVisibleEmails(): UnifiedUserProfile['emails'] {
    if (!this.unifiedProfile?.emails) return [];

    if (this.showAllEmails || this.unifiedProfile.emails.length <= 2) {
      return this.unifiedProfile.emails;
    }

    return this.unifiedProfile.emails.slice(0, 2);
  }

  /**
   * Get hidden emails count
   */
  public getHiddenEmailsCount(): number {
    if (!this.unifiedProfile?.emails || this.showAllEmails) return 0;
    return Math.max(0, this.unifiedProfile.emails.length - 2);
  }

  /**
   * Get visible providers (limited or all)
   */
  public getVisibleProviders(): ProviderUserData[] {
    if (this.showAllProviders || this.providerData.length <= 3) {
      return this.providerData;
    }

    return this.providerData.slice(0, 3);
  }

  /**
   * Get hidden providers count
   */
  public getHiddenProvidersCount(): number {
    if (this.showAllProviders) return 0;
    return Math.max(0, this.providerData.length - 3);
  }

  /**
   * Get social link display name
   */
  public getSocialLinkDisplayName(key: string): string {
    const displayNames: { [key: string]: string } = {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      facebook: 'Facebook',
      website: 'Website',
    };
    return displayNames[key] || key.charAt(0).toUpperCase() + key.slice(1);
  }

  /**
   * Get social link icon
   */
  public getSocialLinkIcon(key: string): string {
    const icons: { [key: string]: string } = {
      github: 'fab fa-github',
      linkedin: 'fab fa-linkedin',
      twitter: 'fab fa-twitter',
      facebook: 'fab fa-facebook',
      website: 'fas fa-globe',
    };
    return icons[key] || 'fas fa-link';
  }

  /**
   * Check if a social link is valid
   */
  public isValidSocialLink(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Format date for display
   */
  public formatDate(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString();
  }

  /**
   * Format date with time for display
   */
  public formatDateTime(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleString();
  }

  /**
   * Get time since last update
   */
  public getTimeSinceUpdate(): string {
    if (!this.unifiedProfile?.lastUpdated) return '';

    const now = new Date();
    const updated = this.unifiedProfile.lastUpdated;
    const diffMs = now.getTime() - updated.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes} minutes ago`;

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} hours ago`;

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} days ago`;
  }

  /**
   * Refresh profile data
   */
  public refreshProfile(): void {
    this.isLoading = true;
    this.unifiedProfileService.refreshProfile();
  }

  /**
   * Export profile data
   */
  public exportProfile(): void {
    const data = this.unifiedProfileService.exportProfile();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `unified-profile-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Toggle show all emails
   */
  public toggleShowAllEmails(): void {
    this.showAllEmails = !this.showAllEmails;
  }

  /**
   * Toggle show all providers
   */
  public toggleShowAllProviders(): void {
    this.showAllProviders = !this.showAllProviders;
  }

  /**
   * Get initials from name for avatar fallback
   */
  public getInitials(): string {
    if (!this.unifiedProfile) return '';

    const name = this.unifiedProfile.name || this.unifiedProfile.displayName;
    if (!name) return this.unifiedProfile.primaryEmail?.charAt(0).toUpperCase() || '?';

    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  /**
   * Check if profile has social links
   */
  public hasSocialLinks(): boolean {
    return this.unifiedProfile ? Object.keys(this.unifiedProfile.socialLinks).length > 0 : false;
  }

  /**
   * Check if profile has professional info
   */
  public hasProfessionalInfo(): boolean {
    return !!(this.unifiedProfile?.company || this.unifiedProfile?.jobTitle || this.unifiedProfile?.website);
  }

  /**
   * Check if profile has personal info
   */
  public hasPersonalInfo(): boolean {
    return !!(this.unifiedProfile?.location || this.unifiedProfile?.bio || this.unifiedProfile?.dateOfBirth);
  }
}
