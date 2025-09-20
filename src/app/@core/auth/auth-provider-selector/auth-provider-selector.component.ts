import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, AuthProvider } from '@app/@core/auth/auth.service';
import { OAuthProviderFactoryService, OAuthProviderMetadata } from '@app/@core/auth/oauth-provider-factory.service';
import { UserPreferencesService } from '@app/@core/auth/user-preferences.service';

export interface ProviderSelectionEvent {
  providerId: AuthProvider;
  metadata: OAuthProviderMetadata;
  rememberChoice?: boolean;
}

@Component({
  selector: 'app-auth-provider-selector',
  templateUrl: './auth-provider-selector.component.html',
  styleUrls: ['./auth-provider-selector.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class AuthProviderSelectorComponent implements OnInit {
  @Input() layout: 'grid' | 'list' | 'compact' = 'grid';
  @Input() showDescriptions: boolean = true;
  @Input() showAnonymousWarning: boolean = true;
  @Input() isLoading: boolean = false;
  @Input() loadingProvider: AuthProvider | null = null;
  @Input() title: string = 'Choose your login method';
  @Input() subtitle: string = 'Select your preferred authentication provider below';

  @Output() providerSelected = new EventEmitter<ProviderSelectionEvent>();
  @Output() providerClick = new EventEmitter<AuthProvider>();

  availableProviders: OAuthProviderMetadata[] = [];
  hasMultipleProviders: boolean = false;
  hasAnonymousProvider: boolean = false;
  authWarningMessage: string | null = null;

  // Provider preference features
  recommendedProvider: AuthProvider | null = null;
  rememberChoice: boolean = true;
  showRememberChoice: boolean = true;
  providerUsageStats: any[] = [];

  constructor(
    private authService: AuthService,
    private providerFactory: OAuthProviderFactoryService,
    private userPreferences: UserPreferencesService
  ) {}

  ngOnInit(): void {
    this.initializeProviders();
    this.initializePreferences();
    this.authWarningMessage = this.authService.getAuthWarningMessage();
  }

  private initializeProviders(): void {
    // Get available providers from auth service
    const providerIds = this.authService.getAvailableProviders();

    // Get metadata for each provider
    this.availableProviders = providerIds
      .map((providerId) => {
        const metadata = this.providerFactory.getProviderMetadata(providerId);
        if (!metadata) {
          // Fallback metadata for providers not in factory
          return {
            id: providerId,
            name: this.getProviderDisplayName(providerId),
            description: this.getProviderDescription(providerId),
            icon: this.getProviderIcon(providerId),
            brandColor: this.getProviderBrandColor(providerId),
            buttonClass: this.getProviderButtonClassBasic(providerId),
            enabled: true,
          };
        }
        return metadata;
      })
      .filter((provider) => provider !== null);

    // Sort by priority if available
    this.sortProvidersByPriority();

    this.hasMultipleProviders = this.availableProviders.length > 1;
    this.hasAnonymousProvider = this.availableProviders.some((p) => p.id === 'anonymous');
  }

  private sortProvidersByPriority(): void {
    // Use the factory's built-in priority sorting
    const sortedProviders = this.providerFactory.getAllProviderMetadata(true);
    const availableIds = this.availableProviders.map((p) => p.id);

    // Keep only providers that are actually available
    this.availableProviders = sortedProviders.filter((p) => availableIds.includes(p.id));

    // Re-sort based on user preferences if available
    this.sortByUserPreferences();
  }

  private initializePreferences(): void {
    // Get recommended provider based on user history
    this.recommendedProvider = this.userPreferences.getRecommendedProvider();

    // Get current preferences to check if remember choice is enabled
    const currentPrefs = this.userPreferences.getCurrentPreferences();
    this.rememberChoice = currentPrefs?.auth.rememberProvider ?? true;

    // Get provider usage stats for visual indicators
    this.providerUsageStats = this.userPreferences.getProviderStats();

    // Only show remember choice checkbox if we have multiple providers
    this.showRememberChoice = this.hasMultipleProviders;
  }

  private sortByUserPreferences(): void {
    if (!this.recommendedProvider || !this.hasMultipleProviders) return;

    // Move recommended provider to the top
    const recommendedIndex = this.availableProviders.findIndex((p) => p.id === this.recommendedProvider);
    if (recommendedIndex > 0) {
      const recommendedProvider = this.availableProviders.splice(recommendedIndex, 1)[0];
      this.availableProviders.unshift(recommendedProvider);
    }
  }

  private getProviderDisplayName(providerId: AuthProvider): string {
    switch (providerId) {
      case 'anonymous':
        return 'Continue as Guest';
      case 'oidc':
        return 'Organization Login';
      case 'google':
        return 'Google';
      case 'facebook':
        return 'Facebook';
      case 'github':
        return 'GitHub';
      case 'microsoft':
        return 'Microsoft';
      default:
        return (providerId as string).charAt(0).toUpperCase() + (providerId as string).slice(1);
    }
  }

  private getProviderDescription(providerId: AuthProvider): string {
    switch (providerId) {
      case 'anonymous':
        return 'Access the app without authentication (development mode)';
      case 'oidc':
        return 'Secure login with your organization account';
      case 'google':
        return 'Continue with Google';
      case 'facebook':
        return 'Continue with Facebook';
      case 'github':
        return 'Continue with GitHub';
      case 'microsoft':
        return 'Continue with Microsoft';
      default:
        return `Login with ${providerId}`;
    }
  }

  private getProviderIcon(providerId: AuthProvider): string {
    switch (providerId) {
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

  private getProviderBrandColor(providerId: AuthProvider): string {
    switch (providerId) {
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

  private getProviderButtonClassBasic(providerId: AuthProvider): string {
    switch (providerId) {
      case 'anonymous':
        return 'btn-secondary';
      case 'oidc':
        return 'btn-primary';
      case 'google':
        return 'btn-danger';
      case 'facebook':
        return 'btn-primary';
      case 'github':
        return 'btn-dark';
      case 'microsoft':
        return 'btn-info';
      default:
        return 'btn-primary';
    }
  }

  public onProviderClick(provider: OAuthProviderMetadata): void {
    if (this.isLoading) return;

    // Save provider preference if remember choice is enabled
    if (this.rememberChoice) {
      this.userPreferences.setPreferredProvider(provider.id as AuthProvider);
    }

    this.providerClick.emit(provider.id as AuthProvider);
    this.providerSelected.emit({
      providerId: provider.id as AuthProvider,
      metadata: provider,
      rememberChoice: this.rememberChoice,
    });
  }

  public isProviderLoading(providerId: string): boolean {
    return this.isLoading && this.loadingProvider === providerId;
  }

  public getLayoutClass(): string {
    switch (this.layout) {
      case 'grid':
        return 'd-grid gap-2';
      case 'list':
        return 'd-flex flex-column gap-2';
      case 'compact':
        return 'd-flex flex-wrap gap-2';
      default:
        return 'd-grid gap-2';
    }
  }

  public getProviderButtonClass(provider: OAuthProviderMetadata): string {
    const baseClasses = 'btn w-100 provider-btn';
    const layoutClasses = this.layout === 'compact' ? 'btn-sm' : '';
    const loadingClasses = this.isProviderLoading(provider.id) ? 'loading' : '';

    return `${baseClasses} ${provider.buttonClass} ${layoutClasses} ${loadingClasses}`.trim();
  }

  public getProviderButtonContent(provider: OAuthProviderMetadata): string {
    if (this.layout === 'compact') {
      return 'd-flex align-items-center justify-content-center';
    }
    return 'd-flex align-items-center justify-content-start';
  }

  public isRecommendedProvider(providerId: string): boolean {
    return this.recommendedProvider === providerId;
  }

  public getProviderUsageStats(providerId: string): any {
    return this.providerUsageStats.find((stat) => stat.provider === providerId);
  }

  public getProviderUsageText(providerId: string): string {
    const stats = this.getProviderUsageStats(providerId);
    if (!stats) return '';

    const lastUsed = stats.lastUsed;
    const now = new Date();
    const daysSince = Math.floor((now.getTime() - lastUsed.getTime()) / (1000 * 60 * 60 * 24));

    if (daysSince === 0) return 'Used today';
    if (daysSince === 1) return 'Used yesterday';
    if (daysSince < 7) return `Used ${daysSince} days ago`;
    if (daysSince < 30) return `Used ${Math.floor(daysSince / 7)} weeks ago`;
    return `Used ${Math.floor(daysSince / 30)} months ago`;
  }

  public onRememberChoiceChange(): void {
    // Update user preferences when remember choice changes
    const currentPrefs = this.userPreferences.getCurrentPreferences();
    if (currentPrefs) {
      this.userPreferences.updatePreferences({
        auth: {
          ...currentPrefs.auth,
          rememberProvider: this.rememberChoice,
        },
      });
    }
  }
}
