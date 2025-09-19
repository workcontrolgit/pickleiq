import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@env/environment';

export interface AnonymousUser {
  id: string;
  name: string;
  email: string;
  roles: string[];
  permissions: string[];
  sessionId: string;
  loginTime: number;
}

export interface AnonymousSession {
  token: string;
  user: AnonymousUser;
  expiresAt: number;
  isValid: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AnonymousAuthProvider {
  private readonly STORAGE_KEY = 'anonymous_session';
  private sessionSubject$ = new BehaviorSubject<AnonymousSession | null>(null);
  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);

  public session$ = this.sessionSubject$.asObservable();
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  constructor() {
    this.loadExistingSession();
  }

  public get isEnabled(): boolean {
    return environment.anonymousAuth?.enabled === true;
  }

  public loginAnonymously(): Promise<AnonymousSession> {
    return new Promise((resolve, reject) => {
      if (!this.isEnabled) {
        reject(new Error('Anonymous authentication is not enabled'));
        return;
      }

      try {
        const session = this.createAnonymousSession();
        this.storeSession(session);
        this.sessionSubject$.next(session);
        this.isAuthenticatedSubject$.next(true);

        console.log('Anonymous login successful:', session.user.name);
        resolve(session);
      } catch (error) {
        console.error('Anonymous login failed:', error);
        reject(error);
      }
    });
  }

  public logout(): Promise<void> {
    return new Promise((resolve) => {
      this.clearSession();
      this.sessionSubject$.next(null);
      this.isAuthenticatedSubject$.next(false);
      console.log('Anonymous logout successful');
      resolve();
    });
  }

  public hasValidSession(): boolean {
    const session = this.getCurrentSession();
    return session !== null && session.isValid && Date.now() < session.expiresAt;
  }

  public getCurrentSession(): AnonymousSession | null {
    return this.sessionSubject$.value;
  }

  public getCurrentUser(): AnonymousUser | null {
    const session = this.getCurrentSession();
    return session?.user || null;
  }

  public getAccessToken(): string | null {
    const session = this.getCurrentSession();
    return session?.token || null;
  }

  public refreshSession(): Promise<AnonymousSession> {
    return new Promise((resolve, reject) => {
      const currentSession = this.getCurrentSession();

      if (!currentSession) {
        reject(new Error('No active anonymous session to refresh'));
        return;
      }

      try {
        const newSession: AnonymousSession = {
          ...currentSession,
          token: this.generateToken(),
          expiresAt: Date.now() + environment.anonymousAuth.sessionTimeout,
        };

        this.storeSession(newSession);
        this.sessionSubject$.next(newSession);
        console.log('Anonymous session refreshed');
        resolve(newSession);
      } catch (error) {
        console.error('Anonymous session refresh failed:', error);
        reject(error);
      }
    });
  }

  private createAnonymousSession(): AnonymousSession {
    const sessionId = this.generateSessionId();
    const token = this.generateToken();
    const loginTime = Date.now();
    const expiresAt = loginTime + environment.anonymousAuth.sessionTimeout;

    const user: AnonymousUser = {
      ...environment.anonymousAuth.defaultUser,
      sessionId,
      loginTime,
    };

    return {
      token,
      user,
      expiresAt,
      isValid: true,
    };
  }

  private generateToken(): string {
    const prefix = environment.anonymousAuth.tokenPrefix;
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    return `${prefix}${timestamp}_${random}`;
  }

  private generateSessionId(): string {
    return 'anon_' + Math.random().toString(36).substr(2, 16);
  }

  private storeSession(session: AnonymousSession): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(session));
    } catch (error) {
      console.warn('Failed to store anonymous session:', error);
    }
  }

  private loadExistingSession(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const session: AnonymousSession = JSON.parse(stored);

        if (Date.now() < session.expiresAt && session.isValid) {
          this.sessionSubject$.next(session);
          this.isAuthenticatedSubject$.next(true);
          console.log('Restored anonymous session for:', session.user.name);
        } else {
          this.clearSession();
          console.log('Anonymous session expired, cleared storage');
        }
      }
    } catch (error) {
      console.warn('Failed to load anonymous session:', error);
      this.clearSession();
    }
  }

  private clearSession(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear anonymous session:', error);
    }
  }

  public getUserProfile(): any {
    const user = this.getCurrentUser();
    if (!user) return null;

    return {
      sub: user.id,
      name: user.name,
      email: user.email,
      roles: user.roles,
      permissions: user.permissions,
      session_id: user.sessionId,
      login_time: user.loginTime,
      auth_provider: 'anonymous',
    };
  }

  public hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    return user?.permissions.includes(permission) || false;
  }

  public hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user?.roles.includes(role) || false;
  }
}
