import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthProvider } from './auth.service';
import { SessionManagerService, ProviderSession } from './session-manager.service';

export interface LinkedAccount {
  id: string;
  primaryProvider: AuthProvider;
  linkedProviders: AuthProvider[];
  email: string;
  name: string;
  createdAt: Date;
  lastUsedAt: Date;
  metadata: {
    preferredProvider?: AuthProvider;
    mergeStrategy: 'auto' | 'manual' | 'prompt';
    allowAutoSwitch: boolean;
  };
}

export interface AccountLinkRequest {
  primarySession: ProviderSession;
  candidateSession: ProviderSession;
  linkingReason: 'same_email' | 'manual_request' | 'suggested_match';
  confidence: number; // 0-100, how confident we are this is the same user
}

export interface MergedUserProfile {
  id: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  providers: {
    [key in AuthProvider]?: {
      profile: any;
      lastUsed: Date;
      isPrimary: boolean;
    };
  };
  permissions: string[];
  roles: string[];
  mergedAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AccountLinkingService {
  private readonly STORAGE_KEY = 'linked_accounts';
  private readonly MERGE_CONFIDENCE_THRESHOLD = 80;

  private linkedAccountsSubject$ = new BehaviorSubject<LinkedAccount[]>([]);
  private linkRequestsSubject$ = new BehaviorSubject<AccountLinkRequest[]>([]);

  public linkedAccounts$ = this.linkedAccountsSubject$.asObservable();
  public linkRequests$ = this.linkRequestsSubject$.asObservable();

  constructor(private sessionManager: SessionManagerService) {
    this.loadLinkedAccounts();
    this.monitorSessionsForLinking();
  }

  /**
   * Check if sessions can be automatically merged based on email
   */
  public analyzeSessionsForMerging(sessions: ProviderSession[]): AccountLinkRequest[] {
    const linkRequests: AccountLinkRequest[] = [];
    const emailGroups = new Map<string, ProviderSession[]>();

    // Group sessions by email
    for (const session of sessions) {
      const email = session.userProfile?.email?.toLowerCase();
      if (email) {
        if (!emailGroups.has(email)) {
          emailGroups.set(email, []);
        }
        emailGroups.get(email)!.push(session);
      }
    }

    // Identify sessions with same email across different providers
    for (const [email, emailSessions] of emailGroups.entries()) {
      if (emailSessions.length > 1) {
        // Sort by most recent activity
        emailSessions.sort((a, b) => b.lastActivity.getTime() - a.lastActivity.getTime());

        const primarySession = emailSessions[0];

        for (let i = 1; i < emailSessions.length; i++) {
          const candidateSession = emailSessions[i];

          const confidence = this.calculateMergeConfidence(primarySession, candidateSession);

          linkRequests.push({
            primarySession,
            candidateSession,
            linkingReason: 'same_email',
            confidence,
          });
        }
      }
    }

    return linkRequests;
  }

  /**
   * Calculate confidence score for merging two sessions
   */
  private calculateMergeConfidence(primary: ProviderSession, candidate: ProviderSession): number {
    let confidence = 0;

    // Email match (base score)
    if (primary.userProfile?.email?.toLowerCase() === candidate.userProfile?.email?.toLowerCase()) {
      confidence += 50;
    }

    // Name similarity
    const nameSimilarity = this.calculateNameSimilarity(
      primary.userProfile?.name || '',
      candidate.userProfile?.name || ''
    );
    confidence += nameSimilarity * 30;

    // Recent activity (more recent = higher confidence)
    const timeDiff = Math.abs(primary.lastActivity.getTime() - candidate.lastActivity.getTime());
    const hoursDiff = timeDiff / (1000 * 60 * 60);
    if (hoursDiff < 1) confidence += 20;
    else if (hoursDiff < 24) confidence += 10;
    else if (hoursDiff < 168) confidence += 5; // 1 week

    return Math.min(confidence, 100);
  }

  /**
   * Calculate name similarity using simple string matching
   */
  private calculateNameSimilarity(name1: string, name2: string): number {
    if (!name1 || !name2) return 0;

    const normalized1 = name1.toLowerCase().trim();
    const normalized2 = name2.toLowerCase().trim();

    if (normalized1 === normalized2) return 1;

    // Check if one name contains the other
    if (normalized1.includes(normalized2) || normalized2.includes(normalized1)) {
      return 0.8;
    }

    // Simple word overlap
    const words1 = normalized1.split(/\s+/);
    const words2 = normalized2.split(/\s+/);
    const commonWords = words1.filter((word) => words2.includes(word));

    if (commonWords.length > 0) {
      return commonWords.length / Math.max(words1.length, words2.length);
    }

    return 0;
  }

  /**
   * Automatically merge sessions based on confidence threshold
   */
  public async autoMergeSessions(linkRequest: AccountLinkRequest): Promise<MergedUserProfile | null> {
    if (linkRequest.confidence < this.MERGE_CONFIDENCE_THRESHOLD) {
      console.log(
        `Auto-merge skipped: confidence ${linkRequest.confidence} below threshold ${this.MERGE_CONFIDENCE_THRESHOLD}`
      );
      return null;
    }

    return this.mergeSessions(linkRequest.primarySession, linkRequest.candidateSession, 'auto');
  }

  /**
   * Manually merge two sessions
   */
  public async mergeSessions(
    primarySession: ProviderSession,
    secondarySession: ProviderSession,
    strategy: 'auto' | 'manual' = 'manual'
  ): Promise<MergedUserProfile> {
    const email = primarySession.userProfile?.email || secondarySession.userProfile?.email;

    if (!email) {
      throw new Error('Cannot merge sessions without email');
    }

    // Create merged profile
    const mergedProfile: MergedUserProfile = {
      id: `merged_${Date.now()}`,
      email: email.toLowerCase(),
      name: this.selectBestName(primarySession.userProfile, secondarySession.userProfile),
      firstName: this.selectBestField('firstName', primarySession.userProfile, secondarySession.userProfile),
      lastName: this.selectBestField('lastName', primarySession.userProfile, secondarySession.userProfile),
      picture: this.selectBestPicture(primarySession.userProfile, secondarySession.userProfile),
      providers: {
        [primarySession.provider]: {
          profile: primarySession.userProfile,
          lastUsed: primarySession.lastActivity,
          isPrimary: true,
        },
        [secondarySession.provider]: {
          profile: secondarySession.userProfile,
          lastUsed: secondarySession.lastActivity,
          isPrimary: false,
        },
      },
      permissions: this.mergePermissions(primarySession.userProfile, secondarySession.userProfile),
      roles: this.mergeRoles(primarySession.userProfile, secondarySession.userProfile),
      mergedAt: new Date(),
    };

    // Create or update linked account
    const linkedAccount = this.createLinkedAccount(primarySession, secondarySession, strategy);
    this.addLinkedAccount(linkedAccount);

    // Update session manager with merged profile
    await this.updateSessionsWithMergedProfile(primarySession, secondarySession, mergedProfile);

    console.log(`Sessions merged successfully: ${primarySession.provider} + ${secondarySession.provider}`);
    return mergedProfile;
  }

  /**
   * Create a linked account record
   */
  private createLinkedAccount(
    primarySession: ProviderSession,
    secondarySession: ProviderSession,
    strategy: 'auto' | 'manual'
  ): LinkedAccount {
    return {
      id: `linked_${Date.now()}`,
      primaryProvider: primarySession.provider,
      linkedProviders: [primarySession.provider, secondarySession.provider],
      email: primarySession.userProfile?.email || secondarySession.userProfile?.email,
      name: this.selectBestName(primarySession.userProfile, secondarySession.userProfile),
      createdAt: new Date(),
      lastUsedAt: new Date(),
      metadata: {
        preferredProvider: primarySession.provider,
        mergeStrategy: strategy,
        allowAutoSwitch: strategy === 'auto',
      },
    };
  }

  /**
   * Select the best name from multiple profiles
   */
  private selectBestName(profile1: any, profile2: any): string {
    const name1 = profile1?.name || profile1?.displayName || '';
    const name2 = profile2?.name || profile2?.displayName || '';

    // Prefer longer, more complete names
    if (name1.length > name2.length) return name1;
    if (name2.length > name1.length) return name2;

    // If same length, prefer first one
    return name1 || name2;
  }

  /**
   * Select the best field value from multiple profiles
   */
  private selectBestField(field: string, profile1: any, profile2: any): string | undefined {
    const value1 = profile1?.[field];
    const value2 = profile2?.[field];

    // Prefer non-empty values
    if (value1 && !value2) return value1;
    if (value2 && !value1) return value2;
    if (!value1 && !value2) return undefined;

    // Prefer longer values
    if (value1.length > value2.length) return value1;
    return value2;
  }

  /**
   * Select the best profile picture
   */
  private selectBestPicture(profile1: any, profile2: any): string | undefined {
    const pic1 = profile1?.picture || profile1?.avatar_url || profile1?.image;
    const pic2 = profile2?.picture || profile2?.avatar_url || profile2?.image;

    // Prefer HTTPS URLs
    if (pic1?.startsWith('https://') && !pic2?.startsWith('https://')) return pic1;
    if (pic2?.startsWith('https://') && !pic1?.startsWith('https://')) return pic2;

    // Prefer higher resolution (longer URL often means more parameters)
    if (pic1?.length > pic2?.length) return pic1;
    return pic2 || pic1;
  }

  /**
   * Merge permissions from multiple profiles
   */
  private mergePermissions(profile1: any, profile2: any): string[] {
    const permissions1 = profile1?.permissions || [];
    const permissions2 = profile2?.permissions || [];

    // Combine and deduplicate
    const allPermissions = [...permissions1, ...permissions2];
    return [...new Set(allPermissions)];
  }

  /**
   * Merge roles from multiple profiles
   */
  private mergeRoles(profile1: any, profile2: any): string[] {
    const roles1 = profile1?.roles || [];
    const roles2 = profile2?.roles || [];

    // Combine and deduplicate
    const allRoles = [...roles1, ...roles2];
    return [...new Set(allRoles)];
  }

  /**
   * Update sessions with merged profile
   */
  private async updateSessionsWithMergedProfile(
    primarySession: ProviderSession,
    secondarySession: ProviderSession,
    mergedProfile: MergedUserProfile
  ): Promise<void> {
    // Update primary session with merged profile
    primarySession.userProfile = {
      ...primarySession.userProfile,
      ...mergedProfile,
      mergedFrom: [primarySession.provider, secondarySession.provider],
    };

    // The secondary session can remain as-is but marked as linked
    secondarySession.userProfile = {
      ...secondarySession.userProfile,
      linkedTo: primarySession.sessionId,
      isLinked: true,
    };

    // Refresh sessions in session manager
    await this.sessionManager.refreshSession(primarySession.provider);
    await this.sessionManager.refreshSession(secondarySession.provider);
  }

  /**
   * Add linked account to storage
   */
  private addLinkedAccount(linkedAccount: LinkedAccount): void {
    const currentAccounts = this.linkedAccountsSubject$.value;

    // Check if account already exists
    const existingIndex = currentAccounts.findIndex(
      (acc) => acc.email.toLowerCase() === linkedAccount.email.toLowerCase()
    );

    if (existingIndex >= 0) {
      // Update existing account
      currentAccounts[existingIndex] = {
        ...currentAccounts[existingIndex],
        linkedProviders: [
          ...new Set([...currentAccounts[existingIndex].linkedProviders, ...linkedAccount.linkedProviders]),
        ],
        lastUsedAt: new Date(),
      };
    } else {
      // Add new account
      currentAccounts.push(linkedAccount);
    }

    this.linkedAccountsSubject$.next(currentAccounts);
    this.saveLinkedAccounts();
  }

  /**
   * Get linked account for email
   */
  public getLinkedAccountByEmail(email: string): LinkedAccount | null {
    return this.linkedAccountsSubject$.value.find((acc) => acc.email.toLowerCase() === email.toLowerCase()) || null;
  }

  /**
   * Get preferred provider for an email
   */
  public getPreferredProvider(email: string): AuthProvider | null {
    const linkedAccount = this.getLinkedAccountByEmail(email);
    return linkedAccount?.metadata.preferredProvider || linkedAccount?.primaryProvider || null;
  }

  /**
   * Set preferred provider for an email
   */
  public setPreferredProvider(email: string, provider: AuthProvider): void {
    const currentAccounts = this.linkedAccountsSubject$.value;
    const accountIndex = currentAccounts.findIndex((acc) => acc.email.toLowerCase() === email.toLowerCase());

    if (accountIndex >= 0) {
      currentAccounts[accountIndex].metadata.preferredProvider = provider;
      currentAccounts[accountIndex].lastUsedAt = new Date();

      this.linkedAccountsSubject$.next(currentAccounts);
      this.saveLinkedAccounts();
    }
  }

  /**
   * Unlink providers
   */
  public async unlinkProvider(email: string, provider: AuthProvider): Promise<void> {
    const currentAccounts = this.linkedAccountsSubject$.value;
    const accountIndex = currentAccounts.findIndex((acc) => acc.email.toLowerCase() === email.toLowerCase());

    if (accountIndex >= 0) {
      const account = currentAccounts[accountIndex];
      account.linkedProviders = account.linkedProviders.filter((p) => p !== provider);

      // If unlinking the primary provider, promote another one
      if (account.primaryProvider === provider && account.linkedProviders.length > 0) {
        account.primaryProvider = account.linkedProviders[0];
        account.metadata.preferredProvider = account.primaryProvider;
      }

      // If no providers left, remove the account
      if (account.linkedProviders.length === 0) {
        currentAccounts.splice(accountIndex, 1);
      }

      this.linkedAccountsSubject$.next(currentAccounts);
      this.saveLinkedAccounts();

      // Remove session for unlinked provider
      await this.sessionManager.logoutProvider(provider);
    }
  }

  /**
   * Monitor sessions for automatic linking opportunities
   */
  private monitorSessionsForLinking(): void {
    this.sessionManager.sessions$.subscribe((sessionsMap) => {
      const sessions = Array.from(sessionsMap.values());
      const linkRequests = this.analyzeSessionsForMerging(sessions);

      // Filter out requests for already linked accounts
      const newRequests = linkRequests.filter((request) => {
        const email = request.primarySession.userProfile?.email;
        if (!email) return false;

        const existingAccount = this.getLinkedAccountByEmail(email);
        return !existingAccount || !existingAccount.linkedProviders.includes(request.candidateSession.provider);
      });

      if (newRequests.length > 0) {
        this.linkRequestsSubject$.next(newRequests);

        // Auto-merge high confidence requests
        newRequests.forEach((request) => {
          if (request.confidence >= this.MERGE_CONFIDENCE_THRESHOLD) {
            this.autoMergeSessions(request).catch((error) => {
              console.error('Auto-merge failed:', error);
            });
          }
        });
      }
    });
  }

  /**
   * Save linked accounts to storage
   */
  private saveLinkedAccounts(): void {
    try {
      const accounts = this.linkedAccountsSubject$.value.map((account) => ({
        ...account,
        createdAt: account.createdAt.toISOString(),
        lastUsedAt: account.lastUsedAt.toISOString(),
      }));

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(accounts));
    } catch (error) {
      console.warn('Failed to save linked accounts:', error);
    }
  }

  /**
   * Load linked accounts from storage
   */
  private loadLinkedAccounts(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return;

      const accounts = JSON.parse(stored).map((account: any) => ({
        ...account,
        createdAt: new Date(account.createdAt),
        lastUsedAt: new Date(account.lastUsedAt),
      }));

      this.linkedAccountsSubject$.next(accounts);
      console.log(`Loaded ${accounts.length} linked accounts from storage`);
    } catch (error) {
      console.warn('Failed to load linked accounts:', error);
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  /**
   * Clear all linked accounts
   */
  public clearLinkedAccounts(): void {
    this.linkedAccountsSubject$.next([]);
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
