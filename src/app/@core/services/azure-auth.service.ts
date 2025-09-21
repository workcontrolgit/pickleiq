import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  givenName?: string;
  familyName?: string;
  picture?: string;
  emailVerified?: boolean;
}

/**
 * Simplified Azure AD B2C Authentication Service
 *
 * This service replaces the complex multi-provider authentication system
 * with a secure, single Azure AD B2C provider that supports:
 * - Social logins (Google, Facebook, Microsoft) through Azure AD B2C
 * - Local accounts with email/password
 * - Proper token management and refresh
 * - Secure logout with session cleanup
 */
@Injectable({
  providedIn: 'root',
})
export class AzureAuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private userProfileSubject = new BehaviorSubject<UserProfile | null>(null);

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  public userProfile$ = this.userProfileSubject.asObservable();

  private authConfig: AuthConfig = {
    // Azure AD B2C Configuration
    issuer: 'https://pickleiq.b2clogin.com/pickleiq.onmicrosoft.com/B2C_1_signup_signin/v2.0',
    clientId: 'your-azure-ad-b2c-client-id', // Will be configured in Azure
    responseType: 'code',
    scope: 'openid profile email',
    redirectUri: window.location.origin + '/auth-callback',
    postLogoutRedirectUri: window.location.origin,
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

    // Security settings
    useSilentRefresh: true,
    silentRefreshTimeout: 50000,
    timeoutFactor: 0.25,
    sessionChecksEnabled: true,
    clearHashAfterLogin: true,
    nonceStateSeparator: 'semicolon',

    // Azure AD B2C specific settings
    strictDiscoveryDocumentValidation: false,
    showDebugInformation: !environment.production,

    // Custom parameters for Azure AD B2C
    customUrlParams: {
      // Prompt user to select account (useful for switching between accounts)
      prompt: 'select_account',
    },

    // Token validation
    requireHttps: environment.production,
    skipIssuerCheck: false,
    disablePKCE: false,
  };

  constructor(private oauthService: OAuthService, private router: Router, private http: HttpClient) {
    this.initializeAuth();
  }

  private initializeAuth(): void {
    // Configure OAuth service
    this.oauthService.configure(this.authConfig);

    // Set up token refresh
    this.oauthService.setupAutomaticSilentRefresh();

    // Load discovery document and try to login
    this.oauthService
      .loadDiscoveryDocumentAndTryLogin()
      .then(() => {
        if (this.oauthService.hasValidAccessToken()) {
          this.handleSuccessfulLogin();
        }
      })
      .catch((error) => {
        console.error('Authentication initialization failed:', error);
        this.handleLogout();
      });

    // Listen for token events
    this.oauthService.events.subscribe((event) => {
      if (event.type === 'token_received') {
        this.handleSuccessfulLogin();
      } else if (event.type === 'logout') {
        this.handleLogout();
      } else if (event.type === 'token_error') {
        console.error('Token error:', event);
        this.handleLogout();
      }
    });
  }

  /**
   * Initiate login flow
   */
  login(): void {
    this.oauthService.initCodeFlow();
  }

  /**
   * Logout user and clear session
   */
  logout(): void {
    // Clear local storage and session data
    this.oauthService.revokeTokenAndLogout({
      // Azure AD B2C logout URL
      customUrl: `https://pickleiq.b2clogin.com/pickleiq.onmicrosoft.com/B2C_1_signup_signin/oauth2/v2.0/logout?post_logout_redirect_uri=${encodeURIComponent(
        window.location.origin
      )}`,
    });
  }

  /**
   * Get current authentication status
   */
  get isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  /**
   * Get current user profile
   */
  get userProfile(): UserProfile | null {
    return this.userProfileSubject.value;
  }

  /**
   * Get access token for API calls
   */
  getAccessToken(): string | null {
    return this.oauthService.getAccessToken();
  }

  /**
   * Get user claims from token
   */
  getUserClaims(): any {
    return this.oauthService.getIdentityClaims();
  }

  /**
   * Check if user has specific role/permission
   */
  hasRole(role: string): boolean {
    const claims = this.getUserClaims();
    if (!claims || !claims.roles) return false;

    return Array.isArray(claims.roles) ? claims.roles.includes(role) : claims.roles === role;
  }

  /**
   * Refresh access token
   */
  async refreshToken(): Promise<boolean> {
    try {
      await this.oauthService.silentRefresh();
      return this.oauthService.hasValidAccessToken();
    } catch (error) {
      console.error('Token refresh failed:', error);
      this.handleLogout();
      return false;
    }
  }

  /**
   * Handle successful login
   */
  private handleSuccessfulLogin(): void {
    const claims = this.getUserClaims();

    if (claims) {
      const userProfile: UserProfile = {
        id: claims.sub || claims.oid,
        email: claims.email || claims.emails?.[0],
        name: claims.name || `${claims.given_name || ''} ${claims.family_name || ''}`.trim(),
        givenName: claims.given_name,
        familyName: claims.family_name,
        picture: claims.picture,
        emailVerified: claims.email_verified,
      };

      this.userProfileSubject.next(userProfile);
      this.isAuthenticatedSubject.next(true);

      // Sync user profile with backend
      this.syncUserProfile(userProfile).catch((error) => {
        console.error('Failed to sync user profile:', error);
      });
    }
  }

  /**
   * Handle logout
   */
  private handleLogout(): void {
    this.userProfileSubject.next(null);
    this.isAuthenticatedSubject.next(false);

    // Redirect to home page after logout
    this.router.navigate(['/']);
  }

  /**
   * Sync user profile with backend
   */
  private async syncUserProfile(profile: UserProfile): Promise<void> {
    try {
      await this.http.post(`${environment.apiEndpoint}/users/sync`, profile).toPromise();
    } catch (error) {
      console.error('User profile sync failed:', error);
    }
  }

  /**
   * Initialize authentication for development
   * This should only be used in development mode
   */
  initializeForDevelopment(): void {
    if (!environment.production && environment.auth?.enableAnonymousAuth) {
      // For development, create a mock authenticated state
      const mockProfile: UserProfile = {
        id: 'dev-user-id',
        email: 'developer@pickleiq.local',
        name: 'Development User',
        emailVerified: true,
      };

      this.userProfileSubject.next(mockProfile);
      this.isAuthenticatedSubject.next(true);

      console.warn('🚧 Development mode: Using mock authentication');
    }
  }
}

/**
 * Authentication Guard Service
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private authService: AzureAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    }

    // Redirect to login if not authenticated
    this.authService.login();
    return false;
  }

  canActivateWithRole(requiredRole: string): boolean {
    if (!this.authService.isAuthenticated) {
      this.authService.login();
      return false;
    }

    if (!this.authService.hasRole(requiredRole)) {
      // Redirect to unauthorized page
      this.router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  }
}
