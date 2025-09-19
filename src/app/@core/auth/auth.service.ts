/* eslint-disable brace-style */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { AnonymousAuthProvider } from './anonymous-auth-provider';
import { OAuthProviderFactoryService } from './oauth-provider-factory.service';

export type AuthMode = 'oidc' | 'anonymous' | 'google' | 'facebook' | 'github' | 'microsoft';
export type AuthProvider = 'oidc' | 'anonymous' | 'google' | 'facebook' | 'github' | 'microsoft';

@Injectable()
export class AuthService {
  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  private isDoneLoadingSubject$ = new ReplaySubject<boolean>();
  public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

  private currentAuthModeSubject$ = new BehaviorSubject<AuthMode>(environment.auth.defaultAuthMode as AuthMode);
  public currentAuthMode$ = this.currentAuthModeSubject$.asObservable();

  private authProviderSubject$ = new BehaviorSubject<AuthProvider | null>(null);
  public authProvider$ = this.authProviderSubject$.asObservable();

  /**
   * Publishes `true` if and only if (a) all the asynchronous initial
   * login calls have completed or errorred, and (b) the user ended up
   * being authenticated.
   *
   * In essence, it combines:
   *
   * - the latest known state of whether the user is authorized
   * - whether the ajax calls for initial log in have all been done
   */
  public canActivateProtectedRoutes$: Observable<boolean> = combineLatest([
    this.isAuthenticated$,
    this.isDoneLoading$,
  ]).pipe(map((values) => values.every((b) => b)));

  private navigateToLoginPage() {
    // TODO: Remember current URL
    this.router.navigateByUrl('/should-login');
  }

  constructor(
    private oauthService: OAuthService,
    private router: Router,
    private anonymousAuthProvider: AnonymousAuthProvider,
    private providerFactory: OAuthProviderFactoryService
  ) {
    this.initializeAuthProviders();
  }

  private initializeAuthProviders(): void {
    // Initialize OIDC events if enabled
    if (environment.oauthProviders?.oidc?.enabled) {
      this.initializeOidcEvents();
    }

    // Initialize Anonymous auth events if enabled
    if (environment.anonymousAuth?.enabled) {
      this.initializeAnonymousEvents();
    }

    // Set initial auth state based on existing sessions
    this.checkInitialAuthState();
  }

  private initializeOidcEvents(): void {
    // Useful for debugging:
    this.oauthService.events.subscribe((event) => {
      if (event instanceof OAuthErrorEvent) {
        console.error('OAuthErrorEvent Object:', event);
      } else {
        console.warn('OAuthEvent Object:', event);
      }
    });

    // This is tricky, as it might cause race conditions (where access_token is set in another
    // tab before everything is said and done there.
    // TODO: Improve this setup. See: https://github.com/jeroenheijmans/sample-angular-oauth2-oidc-with-auth-guards/issues/2
    window.addEventListener('storage', (event) => {
      // The `key` is `null` if the event was caused by `.clear()`
      if (event.key !== 'access_token' && event.key !== null) {
        return;
      }

      console.warn('Noticed changes to access_token (most likely from another tab), updating isAuthenticated');
      if (this.getCurrentAuthMode() === 'oidc') {
        this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());

        if (!this.oauthService.hasValidAccessToken()) {
          this.navigateToLoginPage();
        }
      }
    });

    this.oauthService.events.subscribe((_) => {
      if (this.getCurrentAuthMode() === 'oidc') {
        this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
        this.authProviderSubject$.next('oidc');
      }
    });

    this.oauthService.events
      .pipe(filter((e) => ['token_received'].includes(e.type)))
      .subscribe((e) => this.oauthService.loadUserProfile());

    this.oauthService.events
      .pipe(filter((e) => ['session_terminated', 'session_error'].includes(e.type)))
      .subscribe((e) => this.navigateToLoginPage());

    if (environment.oauthProviders?.oidc?.enabled) {
      this.oauthService.setupAutomaticSilentRefresh();
    }
  }

  private initializeAnonymousEvents(): void {
    this.anonymousAuthProvider.isAuthenticated$.subscribe((isAuthenticated) => {
      if (this.getCurrentAuthMode() === 'anonymous') {
        this.isAuthenticatedSubject$.next(isAuthenticated);
        this.authProviderSubject$.next(isAuthenticated ? 'anonymous' : null);
      }
    });
  }

  private checkInitialAuthState(): void {
    // Check if there's an existing anonymous session
    if (this.anonymousAuthProvider.hasValidSession()) {
      this.setAuthMode('anonymous');
      this.isAuthenticatedSubject$.next(true);
      this.authProviderSubject$.next('anonymous');
      console.log('Found existing anonymous session');
    }
    // Check if there's an existing OIDC session
    else if (environment.oauthProviders?.oidc?.enabled && this.oauthService.hasValidAccessToken()) {
      this.setAuthMode('oidc');
      this.isAuthenticatedSubject$.next(true);
      this.authProviderSubject$.next('oidc');
      console.log('Found existing OIDC session');
    }
  }

  public runInitialLoginSequence(): Promise<void> {
    // Check for anonymous session first
    if (this.anonymousAuthProvider.hasValidSession()) {
      this.setAuthMode('anonymous');
      this.isDoneLoadingSubject$.next(true);
      return Promise.resolve();
    }

    // If anonymous auth is enabled and it's the default mode, use it
    if (environment.auth.enableAnonymousAuth && environment.auth.defaultAuthMode === 'anonymous') {
      this.setAuthMode('anonymous');
      this.isDoneLoadingSubject$.next(true);
      return Promise.resolve();
    }

    // Otherwise, proceed with OIDC flow if enabled
    if (!environment.oauthProviders?.oidc?.enabled) {
      this.isDoneLoadingSubject$.next(true);
      return Promise.resolve();
    }

    if (location.hash) {
      console.log('Encountered hash fragment, plotting as table...');
      console.table(
        location.hash
          .substr(1)
          .split('&')
          .map((kvp) => kvp.split('='))
      );
    }

    // 0. LOAD CONFIG:
    // First we have to check to see how the IdServer is
    // currently configured:
    return (
      this.oauthService
        .loadDiscoveryDocument()

        // For demo purposes, we pretend the previous call was very slow
        .then(() => new Promise<void>((resolve) => setTimeout(() => resolve(), 1000)))

        // 1. HASH LOGIN:
        // Try to log in via hash fragment after redirect back
        // from IdServer from initImplicitFlow:
        .then(() => this.oauthService.tryLogin())

        .then(() => {
          if (this.oauthService.hasValidAccessToken()) {
            this.setAuthMode('oidc');
            return Promise.resolve();
          }

          // 2. SILENT LOGIN:
          // Try to log in via a refresh because then we can prevent
          // needing to redirect the user:
          return this.oauthService
            .silentRefresh()
            .then(() => {
              this.setAuthMode('oidc');
              return Promise.resolve();
            })
            .catch((result) => {
              // Subset of situations from https://openid.net/specs/openid-connect-core-1_0.html#AuthError
              // Only the ones where it's reasonably sure that sending the
              // user to the IdServer will help.
              const errorResponsesRequiringUserInteraction = [
                'interaction_required',
                'login_required',
                'account_selection_required',
                'consent_required',
              ];

              if (result && result.reason && errorResponsesRequiringUserInteraction.indexOf(result.reason.error) >= 0) {
                // 3. ASK FOR LOGIN:
                // At this point we know for sure that we have to ask the
                // user to log in, so we redirect them to the IdServer to
                // enter credentials.
                //
                // Enable this to ALWAYS force a user to login.
                // this.login();
                //
                // Instead, we'll now do this:
                console.warn('User interaction is needed to log in, we will wait for the user to manually log in.');
                return Promise.resolve();
              }

              // We can't handle the truth, just pass on the problem to the
              // next handler.
              return Promise.reject(result);
            });
        })

        .then(() => {
          this.isDoneLoadingSubject$.next(true);

          // Check for the strings 'undefined' and 'null' just to be sure. Our current
          // login(...) should never have this, but in case someone ever calls
          // initImplicitFlow(undefined | null) this could happen.
          if (
            this.oauthService.state &&
            this.oauthService.state !== 'undefined' &&
            this.oauthService.state !== 'null'
          ) {
            let stateUrl = this.oauthService.state;
            if (stateUrl.startsWith('/') === false) {
              stateUrl = decodeURIComponent(stateUrl);
            }
            console.log(`There was state of ${this.oauthService.state}, so we are sending you to: ${stateUrl}`);
            this.router.navigateByUrl(stateUrl);
          }
        })
        .catch(() => this.isDoneLoadingSubject$.next(true))
    );
  }

  // Multi-Auth Methods
  public login(targetUrl?: string, provider?: AuthProvider) {
    const authMode = provider || this.getCurrentAuthMode();

    if (authMode === 'anonymous') {
      return this.loginAnonymous();
    } else if (authMode === 'oidc') {
      return this.loginOidc(targetUrl);
    }

    throw new Error(`Unsupported auth provider: ${authMode}`);
  }

  /**
   * Dynamic login method that handles any provider
   * @param provider The authentication provider to use
   * @param targetUrl Optional target URL for redirect after login
   */
  public async loginWithProvider(provider: AuthProvider, targetUrl?: string): Promise<void> {
    console.log(`Attempting login with provider: ${provider}`);

    // Validate provider is available
    if (!this.isProviderAvailable(provider)) {
      throw new Error(`Provider '${provider}' is not available or not configured`);
    }

    // Set the current provider before starting login
    this.authProviderSubject$.next(provider);

    try {
      switch (provider) {
        case 'anonymous':
          return await this.loginAnonymous();

        case 'oidc':
          return await this.loginOAuth(provider, targetUrl);

        case 'google':
        case 'facebook':
        case 'github':
        case 'microsoft':
          return await this.loginOAuth(provider, targetUrl);

        default:
          throw new Error(`Unsupported provider: ${provider}`);
      }
    } catch (error) {
      // Reset provider on error
      this.authProviderSubject$.next(null);
      throw error;
    }
  }

  /**
   * Generic OAuth login method for all OAuth providers
   * @param provider The OAuth provider
   * @param targetUrl Optional target URL for redirect
   */
  private async loginOAuth(provider: AuthProvider, targetUrl?: string): Promise<void> {
    const authConfig = this.providerFactory.getAuthConfig(provider);
    if (!authConfig) {
      throw new Error(`No valid configuration found for provider: ${provider}`);
    }

    // Configure the OAuth service for this provider
    this.oauthService.configure(authConfig);

    try {
      // Load discovery document if needed
      if (authConfig.issuer && !authConfig.loginUrl) {
        await this.oauthService.loadDiscoveryDocument();
      }
    } catch (error) {
      console.warn(`Could not load discovery document for ${provider}, proceeding with manual configuration`, error);
    }

    // Set the auth mode and start login flow
    this.setAuthMode(provider as AuthMode);
    this.oauthService.initLoginFlow(targetUrl || this.router.url);

    return Promise.resolve();
  }

  public loginAnonymous(): Promise<void> {
    if (!environment.auth.enableAnonymousAuth) {
      return Promise.reject(new Error('Anonymous authentication is not enabled'));
    }

    return this.anonymousAuthProvider.loginAnonymously().then(() => {
      this.setAuthMode('anonymous');
      console.log('Anonymous login completed');
    });
  }

  public loginOidc(targetUrl?: string): Promise<void> {
    if (!environment.oauthProviders?.oidc?.enabled) {
      return Promise.reject(new Error('OIDC authentication is not enabled'));
    }

    // Note: before version 9.1.0 of the library you needed to
    // call encodeURIComponent on the argument to the method.
    this.setAuthMode('oidc');
    this.oauthService.initLoginFlow(targetUrl || this.router.url);
    return Promise.resolve();
  }

  public logout(): Promise<void> {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return this.anonymousAuthProvider.logout().then(() => {
        this.authProviderSubject$.next(null);
      });
    } else if (currentMode === 'oidc') {
      this.oauthService.logOut();
      this.authProviderSubject$.next(null);
      return Promise.resolve();
    }

    return Promise.resolve();
  }

  public refresh(): Promise<void> {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return this.anonymousAuthProvider.refreshSession().then(() => {});
    } else if (currentMode === 'oidc') {
      return this.oauthService.silentRefresh().then(() => {});
    }

    return Promise.resolve();
  }

  public hasValidToken(): boolean {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return this.anonymousAuthProvider.hasValidSession();
    } else if (currentMode === 'oidc') {
      return this.oauthService.hasValidAccessToken();
    }

    return false;
  }

  // Auth Mode Management
  public getCurrentAuthMode(): AuthMode {
    return this.currentAuthModeSubject$.value;
  }

  public setAuthMode(mode: AuthMode): void {
    this.currentAuthModeSubject$.next(mode);
    console.log(`Auth mode set to: ${mode}`);
  }

  public isAnonymousAuthEnabled(): boolean {
    return environment.auth.enableAnonymousAuth === true;
  }

  public isOidcEnabled(): boolean {
    return environment.oauthProviders?.oidc?.enabled === true;
  }

  /**
   * Check if a specific provider is available and configured
   */
  public isProviderAvailable(provider: AuthProvider): boolean {
    switch (provider) {
      case 'anonymous':
        return environment.auth.enableAnonymousAuth === true;

      case 'oidc':
      case 'google':
      case 'facebook':
      case 'github':
      case 'microsoft':
        return this.providerFactory.isProviderAvailable(provider);

      default:
        return false;
    }
  }

  /**
   * Get list of all available providers
   */
  public getAvailableProviders(): AuthProvider[] {
    const availableProviders: AuthProvider[] = [];

    // Check anonymous auth
    if (environment.auth.enableAnonymousAuth) {
      availableProviders.push('anonymous');
    }

    // Check OAuth providers
    const oauthProviders = this.providerFactory.getAvailableProviderIds();
    availableProviders.push(...(oauthProviders as AuthProvider[]));

    return availableProviders;
  }

  /**
   * Switch to a different provider without logging out current session
   */
  public async switchProvider(newProvider: AuthProvider, targetUrl?: string): Promise<void> {
    console.log(`Switching from ${this.getCurrentProvider()} to ${newProvider}`);

    if (!this.isProviderAvailable(newProvider)) {
      throw new Error(`Cannot switch to provider '${newProvider}': not available or not configured`);
    }

    // If switching to the same provider, do nothing
    if (this.getCurrentProvider() === newProvider) {
      console.log('Already using the requested provider');
      return Promise.resolve();
    }

    // Store current session info before switching (for potential recovery)
    const previousProvider = this.getCurrentProvider();
    const wasAuthenticated = await this.isAuthenticated$.pipe(filter(Boolean)).toPromise();

    try {
      // Switch to new provider
      return await this.loginWithProvider(newProvider, targetUrl);
    } catch (error) {
      console.error(`Failed to switch to provider ${newProvider}, staying with ${previousProvider}`, error);

      // Restore previous provider on failure
      if (previousProvider) {
        this.authProviderSubject$.next(previousProvider);
      }

      throw error;
    }
  }

  /**
   * Get current authentication provider
   */
  public getCurrentProvider(): AuthProvider | null {
    return this.authProviderSubject$.value;
  }

  /**
   * Get metadata for the current provider
   */
  public getCurrentProviderMetadata() {
    const currentProvider = this.getCurrentProvider();
    if (!currentProvider) return null;

    return this.providerFactory.getProviderMetadata(currentProvider);
  }

  // Token and User Info Methods
  public get accessToken(): string | null {
    const currentProvider = this.getCurrentProvider();

    if (currentProvider === 'anonymous') {
      return this.anonymousAuthProvider.getAccessToken();
    } else if (this.isOAuthProvider(currentProvider)) {
      return this.oauthService.getAccessToken();
    }

    return null;
  }

  public get refreshToken(): string | null {
    const currentProvider = this.getCurrentProvider();

    if (currentProvider === 'anonymous') {
      return null; // Anonymous sessions don't have refresh tokens
    } else if (this.isOAuthProvider(currentProvider)) {
      return this.oauthService.getRefreshToken();
    }

    return null;
  }

  /**
   * Check if the current provider is an OAuth provider
   */
  private isOAuthProvider(provider: AuthProvider | null): boolean {
    return (
      provider !== null &&
      provider !== 'anonymous' &&
      ['oidc', 'google', 'facebook', 'github', 'microsoft'].includes(provider)
    );
  }

  /**
   * Get provider-specific token information
   */
  public getProviderTokenInfo(provider?: AuthProvider): {
    accessToken: string | null;
    refreshToken: string | null;
    expiresAt: Date | null;
  } {
    const targetProvider = provider || this.getCurrentProvider();

    if (targetProvider === 'anonymous') {
      return {
        accessToken: this.anonymousAuthProvider.getAccessToken(),
        refreshToken: null,
        expiresAt: this.anonymousAuthProvider.getTokenExpirationDate(),
      };
    } else if (this.isOAuthProvider(targetProvider)) {
      return {
        accessToken: this.oauthService.getAccessToken(),
        refreshToken: this.oauthService.getRefreshToken(),
        expiresAt: new Date(this.oauthService.getAccessTokenExpiration()),
      };
    }

    return {
      accessToken: null,
      refreshToken: null,
      expiresAt: null,
    };
  }

  public get identityClaims(): any {
    const currentProvider = this.getCurrentProvider();

    if (currentProvider === 'anonymous') {
      return this.anonymousAuthProvider.getUserProfile();
    } else if (this.isOAuthProvider(currentProvider)) {
      return this.oauthService.getIdentityClaims();
    }

    return null;
  }

  public get idToken(): string | null {
    const currentProvider = this.getCurrentProvider();

    if (currentProvider === 'anonymous') {
      return this.anonymousAuthProvider.getAccessToken(); // Use access token as ID token for anonymous
    } else if (this.isOAuthProvider(currentProvider)) {
      return this.oauthService.getIdToken();
    }

    return null;
  }

  /**
   * Get provider-specific user profile with normalized fields
   */
  public getProviderUserProfile(provider?: AuthProvider): any {
    const targetProvider = provider || this.getCurrentProvider();

    if (targetProvider === 'anonymous') {
      return this.anonymousAuthProvider.getUserProfile();
    } else if (this.isOAuthProvider(targetProvider)) {
      const claims = this.oauthService.getIdentityClaims();
      return this.normalizeOAuthUserProfile(claims, targetProvider);
    }

    return null;
  }

  /**
   * Get provider-specific scopes that were granted
   */
  public getGrantedScopes(provider?: AuthProvider): string[] {
    const targetProvider = provider || this.getCurrentProvider();

    if (targetProvider === 'anonymous') {
      // Anonymous auth doesn't use scopes, return default permissions
      const user = this.anonymousAuthProvider.getCurrentUser();
      return user?.permissions || [];
    } else if (this.isOAuthProvider(targetProvider)) {
      const accessToken = this.oauthService.getAccessToken();
      if (accessToken) {
        try {
          // Extract scopes from token claims
          const scopes = this.extractScopesFromToken(accessToken, targetProvider);
          return scopes;
        } catch (error) {
          console.warn(`Could not extract scopes for provider ${targetProvider}:`, error);
          return [];
        }
      }
    }

    return [];
  }

  /**
   * Check if provider has specific scope/permission
   */
  public hasScope(scope: string, provider?: AuthProvider): boolean {
    const grantedScopes = this.getGrantedScopes(provider);
    return grantedScopes.includes(scope);
  }

  /**
   * Get provider-specific claims from token
   */
  public getProviderClaims(provider?: AuthProvider): any {
    const targetProvider = provider || this.getCurrentProvider();

    if (targetProvider === 'anonymous') {
      return this.anonymousAuthProvider.getUserProfile();
    } else if (this.isOAuthProvider(targetProvider)) {
      const idClaims = this.oauthService.getIdentityClaims();
      const accessClaims = this.extractAccessTokenClaims(targetProvider);

      // Merge claims with provider-specific processing
      return this.processProviderClaims(idClaims, accessClaims, targetProvider);
    }

    return null;
  }

  /**
   * Extract scopes from access token based on provider
   */
  private extractScopesFromToken(accessToken: string, provider: AuthProvider): string[] {
    try {
      // Decode JWT token to get claims
      const payload = this.decodeJWTPayload(accessToken);

      switch (provider) {
        case 'google':
          return payload.scope ? payload.scope.split(' ') : [];
        case 'microsoft':
          return payload.scp ? payload.scp.split(' ') : [];
        case 'facebook':
          // Facebook uses different scope structure
          return payload.scopes ? payload.scopes.split(',') : [];
        case 'github':
          // GitHub doesn't include scopes in JWT, return configured scopes
          const config = this.providerFactory.getAuthConfig(provider);
          return config?.scope ? config.scope.split(' ') : [];
        case 'oidc':
          return payload.scope ? payload.scope.split(' ') : [];
        default:
          return [];
      }
    } catch (error) {
      console.warn(`Could not decode token for provider ${provider}:`, error);
      return [];
    }
  }

  /**
   * Extract claims from access token
   */
  private extractAccessTokenClaims(provider: AuthProvider): any {
    const accessToken = this.oauthService.getAccessToken();
    if (!accessToken) return {};

    try {
      return this.decodeJWTPayload(accessToken);
    } catch (error) {
      console.warn(`Could not extract access token claims for provider ${provider}:`, error);
      return {};
    }
  }

  /**
   * Process provider-specific claims
   */
  private processProviderClaims(idClaims: any, accessClaims: any, provider: AuthProvider): any {
    const baseClaims = { ...idClaims, ...accessClaims };

    switch (provider) {
      case 'google':
        return {
          ...baseClaims,
          provider: 'google',
          picture: idClaims.picture,
          email_verified: idClaims.email_verified,
          locale: idClaims.locale,
        };

      case 'microsoft':
        return {
          ...baseClaims,
          provider: 'microsoft',
          tenant_id: accessClaims.tid,
          upn: accessClaims.upn,
          given_name: idClaims.given_name,
          family_name: idClaims.family_name,
        };

      case 'facebook':
        return {
          ...baseClaims,
          provider: 'facebook',
          picture: idClaims.picture?.data?.url,
          verified: idClaims.verified,
        };

      case 'github':
        return {
          ...baseClaims,
          provider: 'github',
          login: idClaims.login,
          avatar_url: idClaims.avatar_url,
          html_url: idClaims.html_url,
          type: idClaims.type,
        };

      case 'oidc':
        return {
          ...baseClaims,
          provider: 'oidc',
        };

      default:
        return {
          ...baseClaims,
          provider: provider,
        };
    }
  }

  /**
   * Decode JWT payload without verification (for claim extraction)
   */
  private decodeJWTPayload(token: string): any {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid JWT format');
      }

      const payload = parts[1];
      const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(decoded);
    } catch (error) {
      console.error('Error decoding JWT payload:', error);
      return {};
    }
  }

  /**
   * Normalize OAuth user profiles from different providers to a consistent format
   */
  private normalizeOAuthUserProfile(claims: any, provider: AuthProvider): any {
    if (!claims) return null;

    const normalized = {
      id: claims.sub || claims.id,
      provider: provider,
      email: claims.email,
      name: claims.name,
      firstName: claims.given_name || claims.first_name,
      lastName: claims.family_name || claims.last_name,
      picture: claims.picture || claims.avatar_url,
      roles: claims.roles || ['user'],
      permissions: this.getProviderDefaultPermissions(provider),
      raw: claims, // Keep original claims for provider-specific needs
    };

    // Provider-specific field mapping
    switch (provider) {
      case 'google':
        normalized.firstName = claims.given_name;
        normalized.lastName = claims.family_name;
        normalized.picture = claims.picture;
        break;

      case 'facebook':
        normalized.firstName = claims.first_name;
        normalized.lastName = claims.last_name;
        normalized.picture = claims.picture?.data?.url || claims.picture;
        break;

      case 'github':
        normalized.name = claims.name || claims.login;
        normalized.picture = claims.avatar_url;
        normalized.email = claims.email; // May be null for private emails
        break;

      case 'microsoft':
        normalized.firstName = claims.given_name;
        normalized.lastName = claims.family_name;
        normalized.picture = claims.picture;
        break;

      case 'oidc':
        // Keep standard OIDC claims as-is
        break;
    }

    return normalized;
  }

  /**
   * Get default permissions for each provider
   */
  private getProviderDefaultPermissions(provider: AuthProvider): string[] {
    switch (provider) {
      case 'anonymous':
        return ['rating.read', 'training.read', 'shop.read'];

      case 'oidc':
        // Organization login gets full permissions
        return ['rating.read', 'rating.write', 'training.read', 'shop.read', 'admin.read'];

      case 'google':
      case 'facebook':
      case 'github':
      case 'microsoft':
        // External OAuth providers get standard user permissions
        return ['rating.read', 'rating.write', 'training.read', 'shop.read'];

      default:
        return ['rating.read'];
    }
  }

  public get logoutUrl(): string {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return '/should-login';
    } else if (currentMode === 'oidc') {
      return this.oauthService.logoutUrl;
    }

    return '/should-login';
  }

  // Utility Methods
  public getUserProfile(): any {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return this.anonymousAuthProvider.getUserProfile();
    } else if (currentMode === 'oidc') {
      return this.oauthService.getIdentityClaims();
    }

    return null;
  }

  public hasPermission(permission: string): boolean {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return this.anonymousAuthProvider.hasPermission(permission);
    } else if (currentMode === 'oidc') {
      // Implement OIDC permission checking based on claims
      const claims = this.oauthService.getIdentityClaims();
      return claims?.permissions?.includes(permission) || false;
    }

    return false;
  }

  public hasRole(role: string): boolean {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return this.anonymousAuthProvider.hasRole(role);
    } else if (currentMode === 'oidc') {
      // Implement OIDC role checking based on claims
      const claims = this.oauthService.getIdentityClaims();
      return claims?.roles?.includes(role) || false;
    }

    return false;
  }

  public getAuthWarningMessage(): string | null {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous' && environment.anonymousAuth?.warningMessage) {
      return environment.anonymousAuth.warningMessage;
    }

    return null;
  }
}
