/* eslint-disable brace-style */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { AnonymousAuthProvider } from './anonymous-auth-provider';

export type AuthMode = 'oidc' | 'anonymous';
export type AuthProvider = 'oidc' | 'anonymous';

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
    private anonymousAuthProvider: AnonymousAuthProvider
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

  public getCurrentProvider(): AuthProvider | null {
    return this.authProviderSubject$.value;
  }

  public getAvailableProviders(): AuthProvider[] {
    return environment.auth.availableProviders as AuthProvider[];
  }

  public isAnonymousAuthEnabled(): boolean {
    return environment.auth.enableAnonymousAuth === true;
  }

  public isOidcEnabled(): boolean {
    return environment.oauthProviders?.oidc?.enabled === true;
  }

  // Token and User Info Methods
  public get accessToken(): string | null {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return this.anonymousAuthProvider.getAccessToken();
    } else if (currentMode === 'oidc') {
      return this.oauthService.getAccessToken();
    }

    return null;
  }

  public get refreshToken(): string | null {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return null; // Anonymous sessions don't have refresh tokens
    } else if (currentMode === 'oidc') {
      return this.oauthService.getRefreshToken();
    }

    return null;
  }

  public get identityClaims(): any {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return this.anonymousAuthProvider.getUserProfile();
    } else if (currentMode === 'oidc') {
      return this.oauthService.getIdentityClaims();
    }

    return null;
  }

  public get idToken(): string | null {
    const currentMode = this.getCurrentAuthMode();

    if (currentMode === 'anonymous') {
      return this.anonymousAuthProvider.getAccessToken(); // Use access token as ID token for anonymous
    } else if (currentMode === 'oidc') {
      return this.oauthService.getIdToken();
    }

    return null;
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
