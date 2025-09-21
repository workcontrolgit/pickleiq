import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '@env/environment';

/**
 * Secure Azure AD B2C Authentication Configuration
 *
 * This replaces the complex OAuth provider system with a single,
 * secure Azure AD B2C configuration.
 */
export const authConfig: AuthConfig = {
  // Azure AD B2C configuration
  issuer:
    environment.azureAdB2C?.domain && environment.azureAdB2C?.tenantName && environment.azureAdB2C?.policyName
      ? `https://${environment.azureAdB2C.domain}/${environment.azureAdB2C.tenantName}.onmicrosoft.com/${environment.azureAdB2C.policyName}/v2.0`
      : 'https://pickleiq.b2clogin.com/pickleiq.onmicrosoft.com/B2C_1_signup_signin/v2.0',

  clientId: environment.azureAdB2C?.clientId || 'not-configured',
  responseType: 'code',
  redirectUri: environment.azureAdB2C?.redirectUri || window.location.origin + '/auth-callback',
  postLogoutRedirectUri: environment.azureAdB2C?.postLogoutRedirectUri || window.location.origin,
  silentRefreshRedirectUri:
    environment.azureAdB2C?.silentRefreshRedirectUri || window.location.origin + '/silent-refresh.html',

  scope: 'openid profile email',
  useSilentRefresh: true,
  silentRefreshTimeout: 50000,
  timeoutFactor: 0.25,
  sessionChecksEnabled: true,
  showDebugInformation: !environment.production,
  clearHashAfterLogin: true,
  nonceStateSeparator: 'semicolon',

  // Azure AD B2C specific settings
  strictDiscoveryDocumentValidation: false,
  requireHttps: environment.production,
  disablePKCE: false,
};
