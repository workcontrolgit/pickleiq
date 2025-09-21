import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '@env/environment';

/**
 * Legacy Authentication Adapter
 *
 * This service provides compatibility with the existing authentication system
 * while transitioning to the secure Azure AD B2C implementation.
 *
 * This is a temporary adapter that should be replaced with proper Azure AD B2C
 * integration in the next development phase.
 */

export interface LegacyAuthConfig {
  anonymousAuth?: {
    enabled: boolean;
    sessionTimeout?: number;
    defaultUser?: any;
    warningMessage?: string;
    tokenPrefix?: string;
  };
  oauthProviders?: {
    [key: string]: any;
  };
}

@Injectable({
  providedIn: 'root',
})
export class LegacyAuthAdapterService {
  /**
   * Get legacy-compatible auth configuration
   * This provides backward compatibility while we transition to Azure AD B2C
   */
  getLegacyAuthConfig(): LegacyAuthConfig {
    return {
      anonymousAuth: {
        enabled: environment.auth?.enableAnonymousAuth || false,
        sessionTimeout: 24 * 60 * 60 * 1000, // 24 hours
        defaultUser: environment.auth?.enableAnonymousAuth
          ? {
              id: 'anonymous-user',
              name: 'Guest User',
              email: 'guest@pickleiq.local',
              roles: ['user'],
              permissions: ['rating.read', 'training.read'],
            }
          : null,
        warningMessage: '⚠️ Using temporary authentication for development. Migrating to Azure AD B2C.',
        tokenPrefix: 'temp_',
      },
      oauthProviders: {
        'azure-ad-b2c': {
          enabled: true,
          name: 'PickleIQ Login',
          description: 'Sign in with your PickleIQ account',
          icon: 'fas fa-shield-alt',
          brandColor: '#007bff',
          buttonClass: 'btn-primary',
          issuer: this.getAzureAdB2CIssuer(),
          clientId: environment.azureAdB2C?.clientId || 'not-configured',
          responseType: 'code',
          scope: 'openid profile email',
          redirectUri: environment.azureAdB2C?.redirectUri || window.location.origin + '/auth-callback',
          postLogoutRedirectUri: environment.azureAdB2C?.postLogoutRedirectUri || window.location.origin,
          silentRefreshRedirectUri:
            environment.azureAdB2C?.silentRefreshRedirectUri || window.location.origin + '/silent-refresh.html',
        },
      },
    };
  }

  private getAzureAdB2CIssuer(): string {
    if (environment.azureAdB2C?.domain && environment.azureAdB2C?.tenantName && environment.azureAdB2C?.policyName) {
      return `https://${environment.azureAdB2C.domain}/${environment.azureAdB2C.tenantName}.onmicrosoft.com/${environment.azureAdB2C.policyName}/v2.0`;
    }
    return 'https://pickleiq.b2clogin.com/pickleiq.onmicrosoft.com/B2C_1_signup_signin/v2.0';
  }

  /**
   * Check if anonymous authentication is enabled
   */
  isAnonymousAuthEnabled(): boolean {
    return environment.auth?.enableAnonymousAuth === true && !environment.production;
  }

  /**
   * Get OAuth provider configuration
   */
  getOAuthProvider(providerId: string): any {
    const config = this.getLegacyAuthConfig();
    return config.oauthProviders?.[providerId];
  }

  /**
   * Migration notice for developers
   */
  getMigrationNotice(): string {
    return `
🔄 AUTHENTICATION MIGRATION IN PROGRESS

Current Status: Using legacy authentication adapter
Target: Azure AD B2C with enterprise security

Next Steps:
1. Complete Azure AD B2C tenant setup
2. Configure client application registration
3. Update redirect URIs and scopes
4. Remove this adapter service

For more information, see: SECURITY-MIGRATION-GUIDE.md
    `;
  }
}
