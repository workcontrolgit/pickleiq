import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService, AuthProvider } from '@app/@core/auth/auth.service';
import { environment } from '@env/environment';
import { TranslateModule } from '@ngx-translate/core';

interface AuthProviderOption {
  id: AuthProvider;
  name: string;
  description: string;
  icon: string;
  buttonClass: string;
}

@Component({
  selector: 'app-should-login',
  templateUrl: './should-login.component.html',
  styleUrls: ['./should-login.component.scss'],
  imports: [CommonModule, TranslateModule],
})
export class ShouldLoginComponent implements OnInit {
  version: string | null = environment.version;
  availableProviders: AuthProviderOption[] = [];
  isLoading = false;
  authWarningMessage: string | null = null;
  showMultipleOptions = false;

  constructor(private authService: AuthService, private oAuthService: OAuthService, private router: Router) {}

  ngOnInit(): void {
    this.initializeAuthProviders();
    this.authWarningMessage = this.authService.getAuthWarningMessage();
  }

  private initializeAuthProviders(): void {
    const availableProviders = this.authService.getAvailableProviders();

    this.availableProviders = availableProviders.map((provider) => {
      switch (provider) {
        case 'anonymous':
          return {
            id: 'anonymous',
            name: 'Continue as Guest',
            description: 'Access the app without authentication (development mode)',
            icon: 'fas fa-user-secret',
            buttonClass: 'btn-secondary',
          };
        case 'oidc':
          return {
            id: 'oidc',
            name: 'Login with OIDC',
            description: 'Secure login with your organization account',
            icon: 'fas fa-shield-alt',
            buttonClass: 'btn-primary',
          };
        default:
          return {
            id: provider,
            name: (provider as string).toUpperCase(),
            description: `Login with ${provider}`,
            icon: 'fas fa-sign-in-alt',
            buttonClass: 'btn-primary',
          };
      }
    });

    this.showMultipleOptions = this.availableProviders.length > 1;
  }

  public async loginWithProvider(provider: AuthProvider, event?: Event): Promise<void> {
    if (event) {
      event.preventDefault();
    }

    this.isLoading = true;

    try {
      switch (provider) {
        case 'anonymous':
          await this.authService.loginAnonymous();
          this.router.navigate(['/']);
          break;
        case 'oidc':
          await this.authService.loginOidc();
          // OIDC will handle the redirect
          break;
        default:
          throw new Error(`Unsupported provider: ${provider}`);
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (show toast, etc.)
    } finally {
      this.isLoading = false;
    }
  }

  // Legacy method for backward compatibility
  public login($event: any): void {
    $event.preventDefault();

    // Use default auth mode from environment
    const defaultProvider = this.availableProviders.find((p) => p.id === environment.auth.defaultAuthMode);

    if (defaultProvider) {
      this.loginWithProvider(defaultProvider.id, $event);
    } else if (this.availableProviders.length > 0) {
      this.loginWithProvider(this.availableProviders[0].id, $event);
    }
  }

  public getProviderIcon(provider: AuthProvider): string {
    const providerOption = this.availableProviders.find((p) => p.id === provider);
    return providerOption?.icon || 'fas fa-sign-in-alt';
  }

  public getProviderButtonClass(provider: AuthProvider): string {
    const providerOption = this.availableProviders.find((p) => p.id === provider);
    return providerOption?.buttonClass || 'btn-primary';
  }

  public get hasAnonymousProvider(): boolean {
    return this.availableProviders.some((p) => p.id === 'anonymous');
  }
}
