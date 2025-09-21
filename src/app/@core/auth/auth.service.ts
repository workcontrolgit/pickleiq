/* eslint-disable brace-style */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { LegacyAuthAdapterService } from '@core/services/legacy-auth-adapter.service';
import { environment } from '@env/environment';
import { AnonymousAuthProvider } from './anonymous-auth-provider';
import { OAuthProviderFactoryService } from './oauth-provider-factory.service';
import { SessionManagerService, ProviderSession } from './session-manager.service';
import { AccountLinkingService } from './account-linking.service';
import { UserPreferencesService } from './user-preferences.service';
import { UnifiedProfileService } from './unified-profile.service';
import { CSRFProtectionService } from './csrf-protection.service';
import { SecurityValidationService, SecurityValidationContext } from './security-validation.service';
import { RateLimitingService } from './rate-limiting.service';
import { SecurityAuditService, SecurityAuditEvent } from './security-audit.service';

export type AuthMode = 'oidc' | 'anonymous' | 'google' | 'facebook' | 'github' | 'microsoft';
export type AuthProvider = 'oidc' | 'anonymous' | 'google' | 'facebook' | 'github' | 'microsoft';

@Injectable()
export class AuthService {
  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  private isDoneLoadingSubject$ = new ReplaySubject<boolean>();
  public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

  private currentAuthModeSubject$ = new BehaviorSubject<AuthMode>('azure-ad-b2c' as AuthMode);
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
    private providerFactory: OAuthProviderFactoryService,
    private sessionManager: SessionManagerService,
    private accountLinking: AccountLinkingService,
    private userPreferences: UserPreferencesService,
    private unifiedProfile: UnifiedProfileService,
    private csrfProtection: CSRFProtectionService,
    private securityValidation: SecurityValidationService,
    private rateLimiting: RateLimitingService,
    private securityAudit: SecurityAuditService,
    private legacyAuthAdapter: LegacyAuthAdapterService
  ) {
    this.initializeAuthProviders();
    this.initializeSessionManager();
    this.initializeAdvancedFeatures();
  }

  private initializeAuthProviders(): void {
    // Initialize OIDC events using legacy adapter
    const config = this.legacyAuthAdapter.getLegacyAuthConfig();
    if (config.oauthProviders?.['azure-ad-b2c']?.enabled) {
      this.initializeOidcEvents();
    }

    // Initialize Anonymous auth events if enabled
    if (this.legacyAuthAdapter.isAnonymousAuthEnabled()) {
      this.initializeAnonymousEvents();
    }

    // Set initial auth state based on existing sessions
    this.checkInitialAuthState();
  }

  private initializeSessionManager(): void {
    // Subscribe to session changes
    this.sessionManager.activeSession$.subscribe((session) => {
      if (session) {
        this.authProviderSubject$.next(session.provider);
        this.isAuthenticatedSubject$.next(true);
        console.log(`Session manager activated session for: ${session.provider}`);
      } else {
        this.authProviderSubject$.next(null);
        this.isAuthenticatedSubject$.next(false);
        console.log('Session manager cleared active session');
      }
    });

    // Subscribe to session conflicts for handling
    this.sessionManager.conflicts$.subscribe((conflicts) => {
      if (conflicts.length > 0) {
        console.warn('Session conflicts detected:', conflicts);
        // Emit conflicts for UI components to handle
        // This could be enhanced with a conflict resolution UI
      }
    });
  }

  private initializeAdvancedFeatures(): void {
    // Monitor sessions for automatic linking and merging
    this.sessionManager.sessions$.subscribe((sessionsMap) => {
      const sessions = Array.from(sessionsMap.values());
      this.handleSessionMerging(sessions);
      this.updateUnifiedProfile(sessions);
    });

    // Record provider usage for analytics
    this.authProvider$.subscribe((provider) => {
      if (provider) {
        this.recordProviderUsage(provider, null, true);
      }
    });

    // Initialize automatic provider selection
    this.initializeAutoProviderSelection();

    // Initialize unified profile service
    this.initializeUnifiedProfile();
  }

  private async handleSessionMerging(sessions: ProviderSession[]): Promise<void> {
    if (sessions.length < 2) return;

    try {
      const linkRequests = this.accountLinking.analyzeSessionsForMerging(sessions);

      for (const request of linkRequests) {
        // Check if user allows automatic merging
        const userPrefs = this.userPreferences.getCurrentPreferences();
        if (userPrefs?.privacy.allowSessionMerging) {
          await this.accountLinking.autoMergeSessions(request);
        }
      }
    } catch (error) {
      console.error('Error handling session merging:', error);
    }
  }

  private initializeAutoProviderSelection(): void {
    // This will be used during login to suggest preferred providers
    // Implementation depends on UI components
  }

  private initializeUnifiedProfile(): void {
    // Subscribe to session changes to update unified profile
    this.sessionManager.sessions$.subscribe((sessionsMap) => {
      const sessions = Array.from(sessionsMap.values());
      this.updateUnifiedProfile(sessions);
    });

    // Subscribe to authentication state changes
    this.isAuthenticated$.subscribe((isAuth) => {
      if (!isAuth) {
        // Clear unified profile when not authenticated
        this.unifiedProfile.clearProfile();
      }
    });
  }

  private updateUnifiedProfile(sessions: ProviderSession[]): void {
    if (sessions.length === 0) {
      this.unifiedProfile.clearProfile();
      return;
    }

    try {
      // Convert sessions to provider data for unified profile
      const providerDataArray = sessions.map((session) => ({
        provider: session.provider,
        userData: session.userProfile,
        loginTime: session.loginTime,
        lastActivity: session.lastActivity,
        emailVerified: session.userProfile?.email_verified || false,
        lastLogin: session.loginTime,
      }));

      // Update the unified profile with current session data
      this.unifiedProfile.refreshProfileFromSessions(sessions);

      console.log(`Unified profile updated with ${sessions.length} provider sessions`);
    } catch (error) {
      console.error('Failed to update unified profile:', error);
    }
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

    const config = this.legacyAuthAdapter.getLegacyAuthConfig();
    if (config.oauthProviders?.['azure-ad-b2c']?.enabled) {
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
    else if (
      this.legacyAuthAdapter.getLegacyAuthConfig().oauthProviders?.['azure-ad-b2c']?.enabled &&
      this.oauthService.hasValidAccessToken()
    ) {
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
    if (this.legacyAuthAdapter.isAnonymousAuthEnabled()) {
      this.setAuthMode('anonymous');
      this.isDoneLoadingSubject$.next(true);
      return Promise.resolve();
    }

    // Otherwise, proceed with OIDC flow if enabled
    if (!this.legacyAuthAdapter.getLegacyAuthConfig().oauthProviders?.['azure-ad-b2c']?.enabled) {
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

    const auditContext = {
      ipAddress: 'unknown', // Would need server-side detection
      userAgent: navigator.userAgent,
    };

    // Log login attempt
    this.securityAudit.logAuthEvent('login_attempt', provider, auditContext);

    // Check rate limiting first
    const rateLimitResult = this.rateLimiting.checkRateLimit(provider, auditContext);
    if (!rateLimitResult.allowed) {
      // Log rate limit event
      this.securityAudit.logRateLimitEvent(provider, {
        ruleId: rateLimitResult.blockedByRules[0]?.id,
        ruleName: rateLimitResult.blockedByRules[0]?.name,
        ...auditContext,
      });

      throw new Error(
        `Login attempt blocked by rate limiting: ${rateLimitResult.message}. Retry after ${Math.ceil(
          (rateLimitResult.retryAfterMs || 0) / 60000
        )} minutes.`
      );
    }

    // Validate provider is available
    if (!this.isProviderAvailable(provider)) {
      this.securityAudit.logAuthEvent('login_failure', provider, {
        ...auditContext,
        error: 'Provider not available or not configured',
      });
      this.recordProviderUsage(provider, null, false);
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
      // Record failed attempt for rate limiting
      this.rateLimiting.recordAttempt(provider, false, auditContext);

      // Log failed login
      this.securityAudit.logAuthEvent('login_failure', provider, {
        ...auditContext,
        error: error instanceof Error ? error.message : 'Unknown error',
      });

      // Record failed login attempt for preferences
      this.recordProviderUsage(provider, null, false);

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

    // Generate CSRF protected state parameter
    const sessionId = this.sessionManager.generateSessionId(provider);
    const csrfState = this.csrfProtection.generateOAuthState(provider, sessionId);

    // Set the auth mode and start login flow with CSRF protection
    this.setAuthMode(provider as AuthMode);
    this.oauthService.initLoginFlow(targetUrl || this.router.url, csrfState);

    return Promise.resolve();
  }

  /**
   * Handle successful OAuth callback and create session
   */
  public async handleOAuthCallback(provider: AuthProvider): Promise<void> {
    // Validate CSRF protection first
    const state = this.oauthService.state;
    const sessionId = this.sessionManager.generateSessionId(provider);

    if (!this.csrfProtection.validateOAuthCallback(provider, state, sessionId)) {
      throw new Error(`CSRF validation failed for provider: ${provider}`);
    }

    if (!this.oauthService.hasValidAccessToken()) {
      throw new Error(`No valid access token found for provider: ${provider}`);
    }

    // Get token info
    const accessToken = this.oauthService.getAccessToken();
    const refreshToken = this.oauthService.getRefreshToken();
    const expiresAt = new Date(this.oauthService.getAccessTokenExpiration());

    // Get user profile
    const userProfile = this.getProviderUserProfile(provider);

    // Get previous sessions for suspicious activity detection
    const previousSessions = this.sessionManager.getAllSessions();

    // Perform security validation
    const validationContext: SecurityValidationContext = {
      provider,
      accessToken,
      refreshToken,
      userProfile,
      sessionId,
      loginTime: new Date(),
      clientInfo: {
        userAgent: navigator.userAgent,
        ipAddress: 'unknown', // Would need server-side detection
      },
      previousSessions,
    };

    const validationResult = await this.securityValidation.validateAuthentication(validationContext);

    const auditContext = {
      sessionId,
      ipAddress: 'unknown',
      userAgent: navigator.userAgent,
    };

    // Log security validation results
    this.securityAudit.logSecurityValidationEvent(provider, validationResult, auditContext);

    // Handle validation results
    if (validationResult.recommendedAction === 'block') {
      this.securityAudit.logAuthEvent('login_failure', provider, {
        ...auditContext,
        error: 'Security validation failed',
      });
      this.recordProviderUsage(provider, userProfile, false);
      throw new Error(`Authentication blocked due to security validation: ${validationResult.summary}`);
    } else if (validationResult.recommendedAction === 'require_mfa') {
      console.warn(`MFA required for ${provider} login: ${validationResult.summary}`);
      // In a real implementation, you'd redirect to MFA flow
    } else if (validationResult.recommendedAction === 'warn') {
      console.warn(`Security warning for ${provider} login: ${validationResult.summary}`);
    }

    // Record successful attempt for rate limiting
    this.rateLimiting.recordAttempt(provider, true, auditContext);

    // Log successful login
    this.securityAudit.logAuthEvent('login_success', provider, auditContext);

    // Record provider usage for preferences and recommendations
    this.recordProviderUsage(provider, userProfile, true);

    // Create session in session manager
    this.sessionManager.createSession(provider, accessToken, refreshToken, expiresAt, userProfile);

    // Update unified profile with new session data
    const sessions = this.sessionManager.getAllSessions();
    this.updateUnifiedProfile(sessions);

    // Log session creation
    this.securityAudit.logSessionEvent('session_created', provider, sessionId, auditContext);

    console.log(`OAuth callback handled for provider: ${provider}`);
  }

  public loginAnonymous(): Promise<void> {
    if (!this.legacyAuthAdapter.isAnonymousAuthEnabled()) {
      return Promise.reject(new Error('Anonymous authentication is not enabled'));
    }

    return this.anonymousAuthProvider.loginAnonymously().then((session) => {
      this.setAuthMode('anonymous');

      // Generate CSRF token for anonymous session
      const sessionId = this.sessionManager.generateSessionId('anonymous');
      this.csrfProtection.generateCSRFToken('anonymous', sessionId);

      // Create session in session manager
      this.sessionManager.createSession(
        'anonymous',
        session.token,
        null, // Anonymous doesn't have refresh tokens
        session.expiresAt ? new Date(session.expiresAt) : null,
        session.user
      );

      console.log('Anonymous login completed with session management and CSRF protection');
    });
  }

  public loginOidc(targetUrl?: string): Promise<void> {
    if (!this.legacyAuthAdapter.getLegacyAuthConfig().oauthProviders?.['azure-ad-b2c']?.enabled) {
      return Promise.reject(new Error('OIDC authentication is not enabled'));
    }

    // Note: before version 9.1.0 of the library you needed to
    // call encodeURIComponent on the argument to the method.
    this.setAuthMode('oidc');
    this.oauthService.initLoginFlow(targetUrl || this.router.url);
    return Promise.resolve();
  }

  public logout(): Promise<void> {
    const currentProvider = this.getCurrentProvider();
    if (currentProvider) {
      return this.logoutProvider(currentProvider);
    }
    return Promise.resolve();
  }

  /**
   * Logout from a specific provider
   */
  public async logoutProvider(provider: AuthProvider): Promise<void> {
    console.log(`Logging out from provider: ${provider}`);

    const currentSession = this.sessionManager.getActiveSession();
    const auditContext = {
      sessionId: currentSession?.sessionId,
      ipAddress: 'unknown',
      userAgent: navigator.userAgent,
    };

    try {
      // Log logout event
      this.securityAudit.logAuthEvent('logout', provider, auditContext);

      // Clear CSRF token for this provider
      this.csrfProtection.removeToken(provider);

      // Provider-specific logout logic
      switch (provider) {
        case 'anonymous':
          await this.anonymousAuthProvider.logout();
          break;

        case 'oidc':
        case 'google':
        case 'facebook':
        case 'github':
        case 'microsoft':
          // Configure OAuth service for this provider
          const authConfig = this.providerFactory.getAuthConfig(provider);
          if (authConfig) {
            this.oauthService.configure(authConfig);
            this.oauthService.logOut();
          }
          break;

        default:
          console.warn(`Unknown provider for logout: ${provider}`);
      }

      // Remove session from session manager
      await this.sessionManager.logoutProvider(provider);

      // Log session termination
      if (currentSession) {
        this.securityAudit.logSessionEvent('session_terminated', provider, currentSession.sessionId, auditContext);
      }

      console.log(`Successfully logged out from provider: ${provider}`);
    } catch (error) {
      console.error(`Error logging out from provider ${provider}:`, error);
      throw error;
    }
  }

  /**
   * Logout from all providers
   */
  public async logoutAll(): Promise<void> {
    console.log('Logging out from all providers');

    try {
      // Clear all CSRF tokens
      this.csrfProtection.clearAllTokens();

      // Get all active sessions
      const sessions = this.sessionManager.getAllSessions();

      // Logout from each provider
      for (const session of sessions) {
        await this.logoutProvider(session.provider);
      }

      // Clear all sessions
      await this.sessionManager.logoutAll();

      // Clear current auth state
      this.authProviderSubject$.next(null);
      this.isAuthenticatedSubject$.next(false);

      console.log('Successfully logged out from all providers');
    } catch (error) {
      console.error('Error during logout all:', error);
      throw error;
    }
  }

  /**
   * Switch to a different provider without logging out from current one
   */
  public async switchProvider(targetProvider: AuthProvider): Promise<void> {
    console.log(`Switching to provider: ${targetProvider}`);

    try {
      // Check if target provider has an active session
      const targetSession = this.sessionManager.getSession(targetProvider);

      if (!targetSession) {
        throw new Error(`No active session found for provider: ${targetProvider}`);
      }

      if (!this.sessionManager.isSessionValid(targetSession)) {
        throw new Error(`Session for provider ${targetProvider} has expired`);
      }

      // Switch to the target session
      await this.sessionManager.switchToProvider(targetProvider);

      // Update auth state
      this.authProviderSubject$.next(targetProvider);
      this.setAuthMode(targetProvider as AuthMode);

      // For OAuth providers, update the OAuth service configuration
      if (this.isOAuthProvider(targetProvider)) {
        const authConfig = this.providerFactory.getAuthConfig(targetProvider);
        if (authConfig) {
          this.oauthService.configure(authConfig);
        }
      }

      console.log(`Successfully switched to provider: ${targetProvider}`);
    } catch (error) {
      console.error(`Error switching to provider ${targetProvider}:`, error);
      throw error;
    }
  }

  /**
   * Get all available sessions for provider switching
   */
  public getAvailableSessions(): ProviderSession[] {
    return this.sessionManager.getAllSessions();
  }

  /**
   * Check if user can switch to a specific provider
   */
  public canSwitchToProvider(provider: AuthProvider): boolean {
    const session = this.sessionManager.getSession(provider);
    return session !== null && this.sessionManager.isSessionValid(session);
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
    return this.legacyAuthAdapter.isAnonymousAuthEnabled();
  }

  public isOidcEnabled(): boolean {
    return this.legacyAuthAdapter.getLegacyAuthConfig().oauthProviders?.['azure-ad-b2c']?.enabled === true;
  }

  /**
   * Check if a specific provider is available and configured
   */
  public isProviderAvailable(provider: AuthProvider): boolean {
    switch (provider) {
      case 'anonymous':
        return this.legacyAuthAdapter.isAnonymousAuthEnabled();

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
    if (this.legacyAuthAdapter.isAnonymousAuthEnabled()) {
      availableProviders.push('anonymous');
    }

    // Check OAuth providers
    const oauthProviders = this.providerFactory.getAvailableProviderIds();
    availableProviders.push(...(oauthProviders as AuthProvider[]));

    return availableProviders;
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

    if (currentMode === 'anonymous') {
      const config = this.legacyAuthAdapter.getLegacyAuthConfig();
      return config.anonymousAuth?.warningMessage || 'Using temporary authentication for development';
    }

    return null;
  }

  // Session Management Methods

  /**
   * Get session monitoring observables
   */
  public getSessionObservables() {
    return {
      sessions$: this.sessionManager.sessions$,
      activeSession$: this.sessionManager.activeSession$,
      conflicts$: this.sessionManager.conflicts$,
    };
  }

  /**
   * Get session statistics
   */
  public getSessionStats() {
    return this.sessionManager.getSessionStats();
  }

  /**
   * Resolve session conflict
   */
  public async resolveSessionConflict(
    conflictIndex: number,
    resolution: 'merge' | 'replace' | 'keep_both' | 'user_choice'
  ): Promise<void> {
    // Get current conflicts
    const conflicts = this.sessionManager.getCurrentConflicts();

    if (conflictIndex < 0 || conflictIndex >= conflicts.length) {
      throw new Error('Invalid conflict index');
    }

    const conflict = conflicts[conflictIndex];

    switch (resolution) {
      case 'replace':
        // Remove the primary session and keep the conflicting one
        await this.sessionManager.logoutProvider(conflict.primarySession.provider);
        break;

      case 'merge':
        // This is handled automatically by the session manager
        console.log('Session merge handled automatically');
        break;

      case 'keep_both':
        // Allow both sessions to coexist (if same email across different providers)
        console.log('Keeping both sessions active');
        break;

      case 'user_choice':
        // This should be handled by UI - just log for now
        console.log('User choice resolution - handled by UI');
        break;

      default:
        throw new Error(`Unknown resolution type: ${resolution}`);
    }

    console.log(`Session conflict resolved with: ${resolution}`);
  }

  /**
   * Monitor session health
   */
  public monitorSessionHealth(): Observable<
    {
      provider: AuthProvider;
      status: 'healthy' | 'expiring' | 'expired' | 'invalid';
      expiresIn?: number;
    }[]
  > {
    return this.sessionManager.sessions$.pipe(
      map((sessionsMap) => {
        const now = new Date();
        return Array.from(sessionsMap.values()).map((session) => {
          const isValid = this.sessionManager.isSessionValid(session);

          if (!isValid) {
            return {
              provider: session.provider,
              status: 'expired' as const,
            };
          }

          if (session.expiresAt) {
            const timeToExpiry = session.expiresAt.getTime() - now.getTime();
            const minutesToExpiry = Math.floor(timeToExpiry / (1000 * 60));

            if (minutesToExpiry <= 0) {
              return {
                provider: session.provider,
                status: 'expired' as const,
              };
            } else if (minutesToExpiry <= 15) {
              return {
                provider: session.provider,
                status: 'expiring' as const,
                expiresIn: minutesToExpiry,
              };
            }
          }

          return {
            provider: session.provider,
            status: 'healthy' as const,
            expiresIn: session.expiresAt
              ? Math.floor((session.expiresAt.getTime() - now.getTime()) / (1000 * 60))
              : undefined,
          };
        });
      })
    );
  }

  /**
   * Refresh expired or expiring sessions
   */
  public async refreshExpiringSessions(): Promise<void> {
    const sessions = this.sessionManager.getAllSessions();
    const now = new Date();

    for (const session of sessions) {
      if (session.expiresAt) {
        const timeToExpiry = session.expiresAt.getTime() - now.getTime();
        const minutesToExpiry = Math.floor(timeToExpiry / (1000 * 60));

        // Refresh if expiring within 15 minutes
        if (minutesToExpiry <= 15 && minutesToExpiry > 0) {
          try {
            console.log(`Refreshing session for provider: ${session.provider}`);

            if (session.provider === 'anonymous') {
              await this.anonymousAuthProvider.refreshSession();
            } else if (this.isOAuthProvider(session.provider)) {
              // Configure OAuth service for this provider
              const authConfig = this.providerFactory.getAuthConfig(session.provider);
              if (authConfig) {
                this.oauthService.configure(authConfig);
                await this.oauthService.silentRefresh();

                // Update session with new token info
                const newAccessToken = this.oauthService.getAccessToken();
                const newExpiresAt = new Date(this.oauthService.getAccessTokenExpiration());

                // Update session in session manager
                await this.sessionManager.refreshSession(session.provider);
              }
            }
          } catch (error) {
            console.error(`Failed to refresh session for ${session.provider}:`, error);
            // Remove invalid session
            await this.sessionManager.logoutProvider(session.provider);
          }
        }
      }
    }
  }

  /**
   * Get active session count
   */
  public getActiveSessionCount(): number {
    return this.sessionManager.getAllSessions().length;
  }

  /**
   * Check if multiple sessions are active
   */
  public hasMultipleSessions(): boolean {
    return this.getActiveSessionCount() > 1;
  }

  // Advanced Features Methods

  /**
   * Get recommended provider based on user history
   */
  public getRecommendedProvider(email?: string): AuthProvider | null {
    // First check user preferences
    const recommended = this.userPreferences.getRecommendedProvider(email);
    if (recommended) return recommended;

    // Check account linking for preferred provider
    if (email) {
      const preferredProvider = this.accountLinking.getPreferredProvider(email);
      if (preferredProvider) return preferredProvider;
    }

    // Fallback to most used provider
    const stats = this.userPreferences.getProviderStats();
    return stats.length > 0 ? stats[0].provider : null;
  }

  /**
   * Initialize preferences for new user
   */
  public initializeUserPreferences(email: string, provider: AuthProvider): void {
    this.userPreferences.initializePreferences(email, provider);
  }

  /**
   * Get account linking observables
   */
  public getAccountLinkingObservables() {
    return {
      linkedAccounts$: this.accountLinking.linkedAccounts$,
      linkRequests$: this.accountLinking.linkRequests$,
    };
  }

  /**
   * Manually link two accounts
   */
  public async linkAccounts(primaryProvider: AuthProvider, secondaryProvider: AuthProvider): Promise<void> {
    const primarySession = this.sessionManager.getSession(primaryProvider);
    const secondarySession = this.sessionManager.getSession(secondaryProvider);

    if (!primarySession || !secondarySession) {
      throw new Error('Both providers must have active sessions to link accounts');
    }

    await this.accountLinking.mergeSessions(primarySession, secondarySession, 'manual');
  }

  /**
   * Unlink provider from account
   */
  public async unlinkProvider(email: string, provider: AuthProvider): Promise<void> {
    await this.accountLinking.unlinkProvider(email, provider);
  }

  /**
   * Set preferred provider for user
   */
  public setPreferredProvider(provider: AuthProvider): void {
    this.userPreferences.setPreferredProvider(provider);

    // Also update account linking preference if user has linked accounts
    const currentUser = this.identityClaims;
    if (currentUser?.email) {
      this.accountLinking.setPreferredProvider(currentUser.email, provider);
    }
  }

  /**
   * Get user preferences observables
   */
  public getUserPreferencesObservables() {
    return {
      preferences$: this.userPreferences.preferences$,
      providerStats$: this.userPreferences.providerStats$,
    };
  }

  /**
   * Get unified profile observables
   */
  public getUnifiedProfileObservables() {
    return {
      unifiedProfile$: this.unifiedProfile.unifiedProfile$,
      providerData$: this.unifiedProfile.providerData$,
    };
  }

  /**
   * Get current unified profile
   */
  public getUnifiedProfile() {
    return this.unifiedProfile.getCurrentProfile();
  }

  /**
   * Refresh unified profile data
   */
  public refreshUnifiedProfile(): void {
    const sessions = this.sessionManager.getAllSessions();
    this.updateUnifiedProfile(sessions);
  }

  /**
   * Set custom session timeout for provider
   */
  public setProviderSessionTimeout(provider: AuthProvider, timeoutMinutes: number): void {
    const timeoutMs = timeoutMinutes * 60 * 1000;
    this.sessionManager.setProviderTimeout(provider, timeoutMs);

    // Update user preferences
    this.userPreferences.setSessionTimeout(timeoutMinutes);
  }

  /**
   * Enable/disable automatic provider switching
   */
  public setAutoSwitchEnabled(enabled: boolean): void {
    this.userPreferences.setAutoSwitchEnabled(enabled);
  }

  /**
   * Get session timeout information for current provider
   */
  public getCurrentSessionTimeoutInfo(): {
    sessionTimeout: number;
    idleTimeout: number;
    timeUntilSessionExpiry: number;
    timeUntilIdleExpiry: number;
    isNearExpiry: boolean;
  } | null {
    const currentProvider = this.getCurrentProvider();
    if (!currentProvider) return null;

    return this.sessionManager.getSessionTimeoutInfo(currentProvider);
  }

  /**
   * Send heartbeat to keep current session alive
   */
  public sendHeartbeat(): void {
    this.sessionManager.sendHeartbeat();
  }

  /**
   * Auto-switch to best available provider
   */
  public async autoSwitchToBestProvider(): Promise<AuthProvider | null> {
    if (!this.userPreferences.isAutoSwitchEnabled()) {
      return null;
    }

    const availableSessions = this.getAvailableSessions();
    if (availableSessions.length === 0) {
      return null;
    }

    // Get provider stats to determine best provider
    const stats = this.userPreferences.getProviderStats();

    // Find the highest scoring provider that has an active session
    for (const stat of stats) {
      const hasSession = availableSessions.some((session) => session.provider === stat.provider);
      if (hasSession) {
        try {
          await this.switchProvider(stat.provider);
          return stat.provider;
        } catch (error) {
          console.error(`Failed to switch to ${stat.provider}:`, error);
          continue;
        }
      }
    }

    return null;
  }

  /**
   * Get detailed analytics about provider usage
   */
  public getProviderAnalytics(): {
    totalLogins: number;
    uniqueProviders: number;
    mostUsedProvider: AuthProvider | null;
    averageSessionDuration: number;
    successRate: number;
  } {
    const stats = this.userPreferences.getProviderStats();

    if (stats.length === 0) {
      return {
        totalLogins: 0,
        uniqueProviders: 0,
        mostUsedProvider: null,
        averageSessionDuration: 0,
        successRate: 0,
      };
    }

    const totalLogins = stats.reduce((sum, stat) => sum + stat.totalLogins, 0);
    const totalSuccessful = stats.reduce((sum, stat) => sum + stat.successfulLogins, 0);
    const totalDuration = stats.reduce((sum, stat) => sum + stat.averageSessionDuration * stat.successfulLogins, 0);

    return {
      totalLogins,
      uniqueProviders: stats.length,
      mostUsedProvider: stats[0].provider,
      averageSessionDuration: totalSuccessful > 0 ? totalDuration / totalSuccessful : 0,
      successRate: totalLogins > 0 ? totalSuccessful / totalLogins : 0,
    };
  }

  // CSRF Protection Methods

  /**
   * Get CSRF token for current or specified provider
   */
  public getCSRFToken(provider?: AuthProvider): string | null {
    const targetProvider = provider || this.getCurrentProvider();
    if (!targetProvider) return null;

    const token = this.csrfProtection.getCSRFToken(targetProvider);
    return token?.token || null;
  }

  /**
   * Create secure authenticated request with CSRF protection
   */
  public createSecureRequest(endpoint: string, data?: any): Observable<any> {
    const currentProvider = this.getCurrentProvider();
    if (!currentProvider) {
      throw new Error('No active authentication provider');
    }

    const currentSession = this.sessionManager.getActiveSession();
    if (!currentSession) {
      throw new Error('No active session found');
    }

    return this.csrfProtection.createSecureAuthRequest(currentProvider, currentSession.sessionId, endpoint, data);
  }

  /**
   * Add CSRF headers to existing HTTP headers
   */
  public addCSRFHeaders(headers?: any, provider?: AuthProvider): any {
    const targetProvider = provider || this.getCurrentProvider();
    if (!targetProvider) return headers;

    return this.csrfProtection.addCSRFHeaders(targetProvider, headers);
  }

  /**
   * Validate CSRF token for current session
   */
  public validateCSRFToken(token: string, provider?: AuthProvider): boolean {
    const targetProvider = provider || this.getCurrentProvider();
    if (!targetProvider) return false;

    const currentSession = this.sessionManager.getActiveSession();
    if (!currentSession) return false;

    const validation = this.csrfProtection.validateCSRFToken(targetProvider, token, currentSession.sessionId);

    return validation.isValid;
  }

  /**
   * Refresh CSRF token for current or specified provider
   */
  public refreshCSRFToken(provider?: AuthProvider): string | null {
    const targetProvider = provider || this.getCurrentProvider();
    if (!targetProvider) return null;

    const currentSession = this.sessionManager.getActiveSession();
    if (!currentSession) return null;

    const newToken = this.csrfProtection.refreshCSRFToken(targetProvider, currentSession.sessionId);
    return newToken.token;
  }

  /**
   * Get CSRF protection status for all providers
   */
  public getCSRFProtectionStatus(): { provider: AuthProvider; hasToken: boolean; expiresAt?: Date }[] {
    return this.csrfProtection.getProtectionStatus();
  }

  // Security Validation Methods

  /**
   * Validate current authentication session
   */
  public async validateCurrentSession(): Promise<any> {
    const currentProvider = this.getCurrentProvider();
    if (!currentProvider) {
      throw new Error('No active authentication session');
    }

    const currentSession = this.sessionManager.getActiveSession();
    if (!currentSession) {
      throw new Error('No active session found');
    }

    const validationContext: SecurityValidationContext = {
      provider: currentProvider,
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
      userProfile: this.identityClaims,
      sessionId: currentSession.sessionId,
      loginTime: currentSession.loginTime,
      clientInfo: {
        userAgent: navigator.userAgent,
        ipAddress: 'unknown',
      },
    };

    return await this.securityValidation.validateAuthentication(validationContext);
  }

  /**
   * Get security validation rules for current or specified provider
   */
  public getSecurityValidationRules(provider?: AuthProvider): any[] {
    const targetProvider = provider || this.getCurrentProvider();
    if (!targetProvider) return [];

    return this.securityValidation.getValidationRulesForProvider(targetProvider);
  }

  /**
   * Enable/disable specific security validation rule
   */
  public setSecurityRuleEnabled(ruleId: string, enabled: boolean): void {
    this.securityValidation.setRuleEnabled(ruleId, enabled);
  }

  /**
   * Add custom security validation rule
   */
  public addSecurityValidationRule(rule: any): void {
    this.securityValidation.addValidationRule(rule);
  }

  /**
   * Get all security validation rules
   */
  public getAllSecurityValidationRules(): any[] {
    return this.securityValidation.getAllValidationRules();
  }

  // Rate Limiting Methods

  /**
   * Check if provider login is rate limited
   */
  public checkRateLimit(provider: AuthProvider): any {
    const context = {
      ipAddress: 'unknown',
      userAgent: navigator.userAgent,
    };

    return this.rateLimiting.checkRateLimit(provider, context);
  }

  /**
   * Get rate limiting status for provider
   */
  public getRateLimitStatus(provider: AuthProvider): any[] {
    return this.rateLimiting.getRateLimitStatus(provider);
  }

  /**
   * Clear rate limiting for provider
   */
  public clearRateLimit(provider: AuthProvider): void {
    this.rateLimiting.clearRateLimit('provider', provider);
  }

  /**
   * Get rate limiting statistics
   */
  public getRateLimitingStats(): any {
    return this.rateLimiting.getRateLimitingStats();
  }

  /**
   * Get rate limiting rules
   */
  public getRateLimitingRules(): any[] {
    return this.rateLimiting.getRules();
  }

  /**
   * Enable/disable rate limiting rule
   */
  public setRateLimitRuleEnabled(ruleId: string, enabled: boolean): void {
    this.rateLimiting.setRuleEnabled(ruleId, enabled);
  }

  /**
   * Add custom rate limiting rule
   */
  public addRateLimitingRule(rule: any): void {
    this.rateLimiting.addRule(rule);
  }

  // Security Audit Methods

  /**
   * Get security audit events
   */
  public getSecurityAuditEvents(filter?: any): any[] {
    return filter ? this.securityAudit.searchEvents(filter) : this.securityAudit.getAllEvents();
  }

  /**
   * Search security audit events
   */
  public searchSecurityAuditEvents(filter: any): any[] {
    return this.securityAudit.searchEvents(filter);
  }

  /**
   * Get security audit statistics
   */
  public getSecurityAuditStatistics(): any {
    return this.securityAudit.getStatistics();
  }

  /**
   * Export security audit logs
   */
  public exportSecurityAuditLogs(filter?: any): string {
    return this.securityAudit.exportEvents(filter);
  }

  /**
   * Get correlated security events
   */
  public getCorrelatedSecurityEvents(correlationId: string): any[] {
    return this.securityAudit.getCorrelatedEvents(correlationId);
  }

  /**
   * Log custom security event
   */
  public logSecurityEvent(
    eventType: any,
    severity: 'info' | 'warning' | 'error' | 'critical',
    message: string,
    details: any = {}
  ): any {
    const currentProvider = this.getCurrentProvider();
    const currentSession = this.sessionManager.getActiveSession();

    return this.securityAudit.logEvent(eventType, severity, 'auth', message, details, {
      provider: currentProvider,
      sessionId: currentSession?.sessionId,
      ipAddress: 'unknown',
      userAgent: navigator.userAgent,
    });
  }

  // Suspicious Activity Detection Methods

  /**
   * Analyze current session for suspicious activity
   */
  public async analyzeSuspiciousActivity(): Promise<any> {
    const currentProvider = this.getCurrentProvider();
    if (!currentProvider) {
      return { suspiciousFactors: [], riskScore: 0, isClean: true };
    }

    const currentSession = this.sessionManager.getActiveSession();
    const allSessions = this.sessionManager.getAllSessions();
    const recentEvents = this.securityAudit.getSecurityAuditEvents({
      startDate: new Date(Date.now() - 24 * 60 * 60 * 1000), // Last 24 hours
      providers: [currentProvider],
    });

    const suspiciousFactors: string[] = [];
    let riskScore = 0;

    // Check for multiple rapid login attempts
    const recentLogins = recentEvents.filter((e) => e.eventType === 'login_attempt');
    if (recentLogins.length > 10) {
      suspiciousFactors.push('Excessive login attempts in 24 hours');
      riskScore += 25;
    }

    // Check for failed validations
    const failedValidations = recentEvents.filter(
      (e: SecurityAuditEvent) =>
        e.eventType === 'security_validation_failed' && e.details?.recommendedAction === 'block'
    );
    if (failedValidations.length > 0) {
      suspiciousFactors.push('Recent security validation failures');
      riskScore += 30;
    }

    // Check for rate limiting hits
    const rateLimitHits = recentEvents.filter((e: SecurityAuditEvent) => e.eventType === 'rate_limit_exceeded');
    if (rateLimitHits.length > 0) {
      suspiciousFactors.push('Rate limiting violations');
      riskScore += 20;
    }

    // Check for concurrent sessions
    const activeSessions = allSessions.filter((s) => s.provider === currentProvider);
    if (activeSessions.length > 2) {
      suspiciousFactors.push('Multiple concurrent sessions');
      riskScore += 15;
    }

    // Check for CSRF issues
    const csrfIssues = recentEvents.filter(
      (e: SecurityAuditEvent) => e.eventType === 'csrf_token_mismatch' || e.eventType === 'csrf_token_missing'
    );
    if (csrfIssues.length > 0) {
      suspiciousFactors.push('CSRF token validation issues');
      riskScore += 35;
    }

    // Check for unusual session patterns
    if (currentSession) {
      const sessionDuration = Date.now() - currentSession.loginTime.getTime();
      const unusuallyLong = sessionDuration > 24 * 60 * 60 * 1000; // More than 24 hours

      if (unusuallyLong) {
        suspiciousFactors.push('Unusually long session duration');
        riskScore += 10;
      }
    }

    const result = {
      suspiciousFactors,
      riskScore: Math.min(riskScore, 100),
      isClean: suspiciousFactors.length === 0,
      recommendation:
        riskScore >= 70
          ? 'terminate_session'
          : riskScore >= 40
          ? 'require_verification'
          : riskScore >= 20
          ? 'monitor_closely'
          : 'continue',
    };

    // Log suspicious activity if detected
    if (suspiciousFactors.length > 0) {
      this.securityAudit.logSuspiciousActivity(currentProvider, suspiciousFactors, riskScore, {
        sessionId: currentSession?.sessionId,
        ipAddress: 'unknown',
        userAgent: navigator.userAgent,
        details: result,
      });
    }

    return result;
  }

  /**
   * Monitor for session hijacking attempts
   */
  public detectSessionHijacking(): boolean {
    const currentSession = this.sessionManager.getActiveSession();
    if (!currentSession) return false;

    const currentProvider = this.getCurrentProvider();
    if (!currentProvider) return false;

    // Check for rapid location/device changes (simplified - in production would use IP geolocation)
    const recentEvents = this.securityAudit.getSecurityAuditEvents({
      startDate: new Date(Date.now() - 60 * 60 * 1000), // Last hour
      sessionId: currentSession.sessionId,
    });

    const uniqueUserAgents = new Set(
      recentEvents.map((e: SecurityAuditEvent) => e.userAgent).filter((ua: string | undefined) => ua)
    );

    // If more than 2 different user agents in the same session within an hour
    if (uniqueUserAgents.size > 2) {
      this.securityAudit.logSessionEvent('session_hijack_detected', currentProvider, currentSession.sessionId, {
        ipAddress: 'unknown',
        userAgent: navigator.userAgent,
        riskScore: 85,
        details: {
          uniqueUserAgents: Array.from(uniqueUserAgents),
          detectionReason: 'Multiple user agents in same session',
        },
      });

      return true;
    }

    return false;
  }

  /**
   * Get security threat level for current session
   */
  public getCurrentThreatLevel(): 'low' | 'medium' | 'high' | 'critical' {
    const stats = this.securityAudit.getStatistics();
    const recentHighRiskEvents = this.securityAudit.getSecurityAuditEvents({
      startDate: new Date(Date.now() - 60 * 60 * 1000), // Last hour
      severities: ['error', 'critical'],
    }).length;

    if (recentHighRiskEvents >= 5) return 'critical';
    if (recentHighRiskEvents >= 3) return 'high';
    if (recentHighRiskEvents >= 1) return 'medium';

    return 'low';
  }

  /**
   * Record provider usage for user preferences and recommendations
   */
  private recordProviderUsage(provider: AuthProvider, userProfile: any, loginSuccess: boolean): void {
    try {
      // Initialize preferences if this is the first login for this user
      const currentPrefs = this.userPreferences.getCurrentPreferences();
      if (!currentPrefs && userProfile?.email) {
        this.userPreferences.initializePreferences(userProfile.email, provider);
      }

      // Record the provider usage
      this.userPreferences.recordProviderUsage(provider, loginSuccess);

      console.log(`Provider usage recorded: ${provider} (success: ${loginSuccess})`);
    } catch (error) {
      console.warn('Failed to record provider usage:', error);
    }
  }

  /**
   * Set current provider (for provider switching)
   */
  public async setCurrentProvider(provider: AuthProvider): Promise<void> {
    try {
      // Update the current provider
      this.authProviderSubject$.next(provider);

      // Update the auth mode
      this.setAuthMode(provider as AuthMode);

      // Log the provider switch
      console.log(`Current provider set to: ${provider}`);
    } catch (error) {
      console.error('Failed to set current provider:', error);
      throw error;
    }
  }

  /**
   * Trigger security alert for critical threats
   */
  public triggerSecurityAlert(message: string, details: any = {}): void {
    const currentProvider = this.getCurrentProvider();
    const currentSession = this.sessionManager.getActiveSession();

    this.securityAudit.logEvent('security_alert_triggered', 'critical', 'system', message, details, {
      provider: currentProvider,
      sessionId: currentSession?.sessionId,
      ipAddress: 'unknown',
      userAgent: navigator.userAgent,
      riskScore: 100,
    });

    console.error('🚨 SECURITY ALERT TRIGGERED:', message, details);
  }
}
