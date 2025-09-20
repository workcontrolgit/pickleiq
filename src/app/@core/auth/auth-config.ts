import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '@env/environment';

export const authConfig: AuthConfig = {
  issuer: environment.oauthProviders.oidc.issuer,
  clientId: environment.oauthProviders.oidc.clientId,
  responseType: environment.oauthProviders.oidc.responseType,
  redirectUri: environment.oauthProviders.oidc.redirectUri,
  postLogoutRedirectUri: environment.oauthProviders.oidc.postLogoutRedirectUri,
  silentRefreshRedirectUri: environment.oauthProviders.oidc.silentRefreshRedirectUri,
  scope: environment.oauthProviders.oidc.scope,
  useSilentRefresh: environment.oauthProviders.oidc.useSilentRefresh,
  silentRefreshTimeout: environment.oauthProviders.oidc.silentRefreshTimeout,
  timeoutFactor: environment.oauthProviders.oidc.timeoutFactor,
  sessionChecksEnabled: environment.oauthProviders.oidc.sessionChecksEnabled,
  showDebugInformation: environment.oauthProviders.oidc.showDebugInformation,
  clearHashAfterLogin: environment.oauthProviders.oidc.clearHashAfterLogin,
  nonceStateSeparator: environment.oauthProviders.oidc.nonceStateSeparator,
};
