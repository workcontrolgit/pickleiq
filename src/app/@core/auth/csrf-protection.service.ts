import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthProvider } from './auth.service';

export interface CSRFToken {
  token: string;
  provider: AuthProvider;
  expiresAt: Date;
  issuedAt: Date;
  sessionId: string;
}

export interface CSRFValidationResult {
  isValid: boolean;
  error?: string;
  renewToken?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CSRFProtectionService {
  private readonly CSRF_HEADER_NAME = 'X-CSRF-Token';
  private readonly CSRF_STORAGE_KEY = 'csrf_tokens';
  private readonly TOKEN_LIFETIME = 30 * 60 * 1000; // 30 minutes
  private readonly TOKEN_REFRESH_THRESHOLD = 5 * 60 * 1000; // 5 minutes before expiry

  private csrfTokensSubject$ = new BehaviorSubject<Map<AuthProvider, CSRFToken>>(new Map());
  public csrfTokens$ = this.csrfTokensSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.loadStoredTokens();
    this.startTokenRefreshScheduler();
  }

  /**
   * Generate CSRF token for a specific provider
   */
  public generateCSRFToken(provider: AuthProvider, sessionId: string): CSRFToken {
    const token = this.createSecureToken();
    const issuedAt = new Date();
    const expiresAt = new Date(issuedAt.getTime() + this.TOKEN_LIFETIME);

    const csrfToken: CSRFToken = {
      token,
      provider,
      expiresAt,
      issuedAt,
      sessionId,
    };

    this.storeToken(csrfToken);
    return csrfToken;
  }

  /**
   * Get current CSRF token for provider
   */
  public getCSRFToken(provider: AuthProvider): CSRFToken | null {
    const tokens = this.csrfTokensSubject$.value;
    const token = tokens.get(provider);

    if (!token) return null;

    // Check if token is expired
    if (new Date() > token.expiresAt) {
      this.removeToken(provider);
      return null;
    }

    return token;
  }

  /**
   * Validate CSRF token
   */
  public validateCSRFToken(provider: AuthProvider, submittedToken: string, sessionId: string): CSRFValidationResult {
    const storedToken = this.getCSRFToken(provider);

    if (!storedToken) {
      return {
        isValid: false,
        error: 'No CSRF token found for provider',
      };
    }

    // Validate token value
    if (storedToken.token !== submittedToken) {
      return {
        isValid: false,
        error: 'CSRF token mismatch',
      };
    }

    // Validate session binding
    if (storedToken.sessionId !== sessionId) {
      return {
        isValid: false,
        error: 'CSRF token not bound to current session',
      };
    }

    // Check if token needs renewal
    const now = new Date();
    const timeUntilExpiry = storedToken.expiresAt.getTime() - now.getTime();

    if (timeUntilExpiry < this.TOKEN_REFRESH_THRESHOLD) {
      const newToken = this.generateCSRFToken(provider, sessionId);
      return {
        isValid: true,
        renewToken: newToken.token,
      };
    }

    return { isValid: true };
  }

  /**
   * Add CSRF token to HTTP headers
   */
  public addCSRFHeaders(provider: AuthProvider, headers?: HttpHeaders): HttpHeaders {
    const token = this.getCSRFToken(provider);

    if (!token) {
      console.warn(`No CSRF token available for provider: ${provider}`);
      return headers || new HttpHeaders();
    }

    const csrfHeaders = headers || new HttpHeaders();
    return csrfHeaders.set(this.CSRF_HEADER_NAME, token.token);
  }

  /**
   * Create secure authentication request with CSRF protection
   */
  public createSecureAuthRequest(
    provider: AuthProvider,
    sessionId: string,
    endpoint: string,
    data?: any
  ): Observable<any> {
    // Ensure we have a valid CSRF token
    let token = this.getCSRFToken(provider);
    if (!token) {
      token = this.generateCSRFToken(provider, sessionId);
    }

    const headers = this.addCSRFHeaders(provider);

    return this.http
      .post(
        endpoint,
        {
          ...data,
          _csrfToken: token.token,
          _sessionId: sessionId,
          _provider: provider,
        },
        { headers }
      )
      .pipe(
        tap((response: any) => {
          // Handle token renewal from server
          if (response?.csrfToken) {
            const renewedToken: CSRFToken = {
              token: response.csrfToken,
              provider,
              expiresAt: new Date(Date.now() + this.TOKEN_LIFETIME),
              issuedAt: new Date(),
              sessionId,
            };
            this.storeToken(renewedToken);
          }
        }),
        catchError((error) => {
          // Handle CSRF validation errors
          if (error.status === 403 && error.error?.csrfError) {
            console.error('CSRF validation failed:', error.error.message);
            this.removeToken(provider);

            // Attempt to regenerate token for retry
            this.generateCSRFToken(provider, sessionId);
          }
          return throwError(error);
        })
      );
  }

  /**
   * Validate OAuth callback with CSRF protection
   */
  public validateOAuthCallback(provider: AuthProvider, state: string, sessionId: string): boolean {
    try {
      // Decode state parameter that should contain CSRF token
      const stateData = JSON.parse(atob(state));

      if (!stateData.csrfToken || !stateData.provider || !stateData.sessionId) {
        console.error('Invalid OAuth state parameter');
        return false;
      }

      const validation = this.validateCSRFToken(provider, stateData.csrfToken, sessionId);

      if (!validation.isValid) {
        console.error('OAuth callback CSRF validation failed:', validation.error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Failed to validate OAuth callback state:', error);
      return false;
    }
  }

  /**
   * Generate OAuth state parameter with CSRF protection
   */
  public generateOAuthState(provider: AuthProvider, sessionId: string): string {
    const token = this.generateCSRFToken(provider, sessionId);

    const stateData = {
      csrfToken: token.token,
      provider,
      sessionId,
      timestamp: Date.now(),
    };

    return btoa(JSON.stringify(stateData));
  }

  /**
   * Remove CSRF token for provider
   */
  public removeToken(provider: AuthProvider): void {
    const tokens = this.csrfTokensSubject$.value;
    tokens.delete(provider);
    this.csrfTokensSubject$.next(tokens);
    this.saveTokens();
  }

  /**
   * Clear all CSRF tokens
   */
  public clearAllTokens(): void {
    this.csrfTokensSubject$.next(new Map());
    localStorage.removeItem(this.CSRF_STORAGE_KEY);
  }

  /**
   * Check if any tokens need refresh
   */
  public checkTokenRefreshNeeded(): AuthProvider[] {
    const tokens = this.csrfTokensSubject$.value;
    const now = new Date();
    const providersNeedingRefresh: AuthProvider[] = [];

    tokens.forEach((token, provider) => {
      const timeUntilExpiry = token.expiresAt.getTime() - now.getTime();
      if (timeUntilExpiry < this.TOKEN_REFRESH_THRESHOLD) {
        providersNeedingRefresh.push(provider);
      }
    });

    return providersNeedingRefresh;
  }

  /**
   * Refresh CSRF token for provider
   */
  public refreshCSRFToken(provider: AuthProvider, sessionId: string): CSRFToken {
    this.removeToken(provider);
    return this.generateCSRFToken(provider, sessionId);
  }

  /**
   * Get CSRF protection status for all providers
   */
  public getProtectionStatus(): { provider: AuthProvider; hasToken: boolean; expiresAt?: Date }[] {
    const tokens = this.csrfTokensSubject$.value;
    const status: { provider: AuthProvider; hasToken: boolean; expiresAt?: Date }[] = [];

    // Check all known providers
    const allProviders: AuthProvider[] = ['anonymous', 'google', 'facebook', 'github', 'microsoft'];

    allProviders.forEach((provider) => {
      const token = tokens.get(provider);
      status.push({
        provider,
        hasToken: !!token && new Date() < token.expiresAt,
        expiresAt: token?.expiresAt,
      });
    });

    return status;
  }

  /**
   * Create cryptographically secure token
   */
  private createSecureToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Store CSRF token
   */
  private storeToken(token: CSRFToken): void {
    const tokens = this.csrfTokensSubject$.value;
    tokens.set(token.provider, token);
    this.csrfTokensSubject$.next(tokens);
    this.saveTokens();
  }

  /**
   * Save tokens to localStorage
   */
  private saveTokens(): void {
    try {
      const tokens = this.csrfTokensSubject$.value;
      const serializable = Array.from(tokens.entries()).map(([provider, token]) => ({
        provider,
        token: {
          ...token,
          expiresAt: token.expiresAt.toISOString(),
          issuedAt: token.issuedAt.toISOString(),
        },
      }));

      localStorage.setItem(this.CSRF_STORAGE_KEY, JSON.stringify(serializable));
    } catch (error) {
      console.warn('Failed to save CSRF tokens:', error);
    }
  }

  /**
   * Load stored tokens from localStorage
   */
  private loadStoredTokens(): void {
    try {
      const stored = localStorage.getItem(this.CSRF_STORAGE_KEY);
      if (!stored) return;

      const serialized = JSON.parse(stored);
      const tokens = new Map<AuthProvider, CSRFToken>();

      serialized.forEach((item: any) => {
        const token: CSRFToken = {
          ...item.token,
          expiresAt: new Date(item.token.expiresAt),
          issuedAt: new Date(item.token.issuedAt),
        };

        // Only load non-expired tokens
        if (new Date() < token.expiresAt) {
          tokens.set(item.provider, token);
        }
      });

      this.csrfTokensSubject$.next(tokens);
    } catch (error) {
      console.warn('Failed to load CSRF tokens:', error);
      localStorage.removeItem(this.CSRF_STORAGE_KEY);
    }
  }

  /**
   * Start periodic token refresh scheduler
   */
  private startTokenRefreshScheduler(): void {
    setInterval(() => {
      const tokensToRefresh = this.checkTokenRefreshNeeded();

      if (tokensToRefresh.length > 0) {
        console.log(`CSRF tokens need refresh for providers: ${tokensToRefresh.join(', ')}`);

        // Emit event that tokens need refresh - AuthService should handle this
        tokensToRefresh.forEach((provider) => {
          const token = this.getCSRFToken(provider);
          if (token) {
            // Token will be refreshed by AuthService when next request is made
            console.log(`CSRF token for ${provider} expires at ${token.expiresAt}`);
          }
        });
      }
    }, 60000); // Check every minute
  }
}
