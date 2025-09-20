import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { AuthProvider } from './auth.service';
import { SessionManagerService, ProviderSession } from './session-manager.service';
import { UserPreferencesService } from './user-preferences.service';

export interface ProviderUserData {
  provider: AuthProvider;
  email?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  profilePictureUrl?: string;
  locale?: string;
  timezone?: string;
  emailVerified?: boolean;
  phoneNumber?: string;
  dateOfBirth?: string;
  gender?: string;
  website?: string;
  company?: string;
  jobTitle?: string;
  bio?: string;
  location?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
  customFields?: { [key: string]: any };
  lastLogin?: Date;
  loginCount?: number;
}

export interface UnifiedUserProfile {
  // Primary identity (most reliable/complete)
  primaryProvider: AuthProvider;
  primaryEmail: string;

  // Consolidated fields
  name: string;
  firstName?: string;
  lastName?: string;
  displayName: string;
  preferredUsername?: string;
  profilePictureUrl?: string;

  // Contact information
  emails: Array<{ email: string; provider: AuthProvider; verified: boolean; primary: boolean }>;
  phoneNumbers: Array<{ number: string; provider: AuthProvider; verified: boolean }>;

  // Personal information
  locale?: string;
  timezone?: string;
  dateOfBirth?: string;
  gender?: string;
  location?: string;

  // Professional information
  company?: string;
  jobTitle?: string;
  bio?: string;
  website?: string;

  // Social links (aggregated from all providers)
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    [key: string]: string | undefined;
  };

  // Provider data sources
  providerData: ProviderUserData[];

  // Metadata
  lastUpdated: Date;
  dataCompleteness: number; // 0-100 percentage
  conflictResolution: {
    [field: string]: {
      value: any;
      source: AuthProvider;
      conflicts: Array<{ value: any; source: AuthProvider }>;
    };
  };
}

export interface ProfileMergeRule {
  field: string;
  strategy: 'primary' | 'most_recent' | 'most_complete' | 'provider_priority' | 'user_choice';
  providerPriority?: AuthProvider[];
  customResolver?: (values: Array<{ value: any; provider: AuthProvider; lastUpdated: Date }>) => any;
}

@Injectable({
  providedIn: 'root',
})
export class UnifiedProfileService {
  private readonly STORAGE_KEY = 'unified_user_profile';

  private unifiedProfileSubject$ = new BehaviorSubject<UnifiedUserProfile | null>(null);
  public unifiedProfile$ = this.unifiedProfileSubject$.asObservable();

  private providerDataSubject$ = new BehaviorSubject<ProviderUserData[]>([]);
  public providerData$ = this.providerDataSubject$.asObservable();

  // Default merge rules for profile fields
  private defaultMergeRules: ProfileMergeRule[] = [
    { field: 'email', strategy: 'primary' },
    { field: 'name', strategy: 'most_complete' },
    { field: 'firstName', strategy: 'most_complete' },
    { field: 'lastName', strategy: 'most_complete' },
    {
      field: 'profilePictureUrl',
      strategy: 'provider_priority',
      providerPriority: ['google', 'facebook', 'github', 'microsoft', 'oidc'],
    },
    { field: 'locale', strategy: 'most_recent' },
    { field: 'timezone', strategy: 'most_recent' },
    { field: 'company', strategy: 'provider_priority', providerPriority: ['microsoft', 'github', 'oidc', 'google'] },
    { field: 'jobTitle', strategy: 'provider_priority', providerPriority: ['microsoft', 'oidc', 'github'] },
    { field: 'location', strategy: 'most_recent' },
    { field: 'bio', strategy: 'most_complete' },
    { field: 'website', strategy: 'most_recent' },
  ];

  constructor(private sessionManager: SessionManagerService, private userPreferences: UserPreferencesService) {
    this.initializeProfileTracking();
    this.loadStoredProfile();
  }

  /**
   * Initialize profile tracking across all sessions
   */
  private initializeProfileTracking(): void {
    // Monitor session changes and update profile accordingly
    this.sessionManager.sessions$.subscribe((sessionsMap) => {
      this.updateProviderData(Array.from(sessionsMap.values()));
    });

    this.sessionManager.activeSession$.subscribe((activeSession) => {
      if (activeSession) {
        this.updatePrimaryProvider(activeSession.provider);
      }
    });
  }

  /**
   * Update provider data from sessions
   */
  public refreshProfileFromSessions(sessions: ProviderSession[]): void {
    try {
      this.updateProviderData(sessions);
    } catch (error) {
      console.error('Error refreshing profile from sessions:', error);
      // Initialize with empty array to prevent further errors
      this.providerDataSubject$.next([]);
    }
  }

  private updateProviderData(sessions: ProviderSession[]): void {
    try {
      const providerDataArray: ProviderUserData[] = sessions
        .filter((session) => session.isActive && session.userProfile)
        .map((session) => this.extractProviderUserData(session));

      this.providerDataSubject$.next(providerDataArray);

      if (providerDataArray.length > 0) {
        this.mergeProfileData(providerDataArray);
      }
    } catch (error) {
      console.error('Error updating provider data:', error);
      this.providerDataSubject$.next([]);
    }
  }

  /**
   * Extract user data from a provider session
   */
  private extractProviderUserData(session: ProviderSession): ProviderUserData {
    const profile = session.userProfile || {};

    return {
      provider: session.provider,
      email: profile.email || profile.mail,
      name: profile.name || profile.displayName || `${profile.given_name || ''} ${profile.family_name || ''}`.trim(),
      firstName: profile.given_name || profile.firstName,
      lastName: profile.family_name || profile.lastName || profile.surname,
      username: profile.preferred_username || profile.username || profile.login,
      profilePictureUrl: profile.picture || profile.avatar_url || profile.photo,
      locale: profile.locale || profile.language,
      timezone: profile.zoneinfo || profile.timezone,
      emailVerified: profile.email_verified || false,
      phoneNumber: profile.phone_number,
      dateOfBirth: profile.birthdate,
      gender: profile.gender,
      website: profile.website || profile.blog || profile.html_url,
      company: profile.company || profile.organization,
      jobTitle: profile.job_title || profile.title,
      bio: profile.bio || profile.description,
      location: profile.location || profile.address?.locality,
      socialLinks: this.extractSocialLinks(profile, session.provider),
      customFields: this.extractCustomFields(profile),
      lastLogin: session.loginTime,
      loginCount: this.getProviderLoginCount(session.provider),
    };
  }

  /**
   * Extract social links based on provider
   */
  private extractSocialLinks(profile: any, provider: AuthProvider): ProviderUserData['socialLinks'] {
    const links: any = {};

    switch (provider) {
      case 'github':
        links.github = profile.html_url;
        if (profile.twitter_username) {
          links.twitter = `https://twitter.com/${profile.twitter_username}`;
        }
        break;
      case 'facebook':
        links.facebook = profile.link;
        break;
      case 'google':
        // Google doesn't provide direct social links in profile
        break;
      case 'microsoft':
        // Extract any available social information
        break;
    }

    return links;
  }

  /**
   * Extract custom fields not covered by standard fields
   */
  private extractCustomFields(profile: any): { [key: string]: any } {
    const standardFields = [
      'email',
      'name',
      'given_name',
      'family_name',
      'picture',
      'locale',
      'email_verified',
      'phone_number',
      'birthdate',
      'gender',
      'website',
      'company',
      'bio',
      'location',
      'preferred_username',
      'username',
    ];

    const customFields: { [key: string]: any } = {};

    Object.keys(profile).forEach((key) => {
      if (!standardFields.includes(key) && profile[key] !== null && profile[key] !== undefined) {
        customFields[key] = profile[key];
      }
    });

    return customFields;
  }

  /**
   * Get login count for a specific provider
   */
  private getProviderLoginCount(provider: AuthProvider): number {
    const stats = this.userPreferences.getProviderStats();
    const providerStat = stats.find((s) => s.provider === provider);
    return providerStat?.totalLogins || 1;
  }

  /**
   * Merge profile data from multiple providers
   */
  private mergeProfileData(providerDataArray: ProviderUserData[]): void {
    try {
      if (providerDataArray.length === 0) return;

      // Determine primary provider (most complete, most recent, or user preference)
      const primaryProvider = this.determinePrimaryProvider(providerDataArray);
      const primaryData = providerDataArray.find((p) => p.provider === primaryProvider);

      if (!primaryData?.email) return;

      // Start building unified profile
      const unifiedProfile: UnifiedUserProfile = {
        primaryProvider,
        primaryEmail: primaryData.email,
        name: '',
        displayName: '',
        emails: [],
        phoneNumbers: [],
        socialLinks: {},
        providerData: providerDataArray,
        lastUpdated: new Date(),
        dataCompleteness: 0,
        conflictResolution: {},
      };

      // Merge each field using the appropriate strategy
      this.mergeFields(unifiedProfile, providerDataArray);

      // Calculate data completeness
      unifiedProfile.dataCompleteness = this.calculateDataCompleteness(unifiedProfile);

      // Store and emit the unified profile
      this.unifiedProfileSubject$.next(unifiedProfile);
      this.persistProfile(unifiedProfile);

      console.log('Unified profile updated:', unifiedProfile);
    } catch (error) {
      console.error('Error merging profile data:', error);
      // Emit a basic profile so UI doesn't break
      const fallbackProfile: UnifiedUserProfile = {
        primaryProvider: 'anonymous',
        primaryEmail: 'guest@pickleiq.local',
        name: 'Guest User',
        displayName: 'Guest User',
        emails: [{ email: 'guest@pickleiq.local', primary: true, verified: false, provider: 'anonymous' }],
        phoneNumbers: [],
        socialLinks: {},
        providerData: [],
        lastUpdated: new Date(),
        dataCompleteness: 0,
        conflictResolution: {},
      };
      this.unifiedProfileSubject$.next(fallbackProfile);
    }
  }

  /**
   * Determine which provider should be considered primary
   */
  private determinePrimaryProvider(providerDataArray: ProviderUserData[]): AuthProvider {
    // Check user preference first
    const preferences = this.userPreferences.getCurrentPreferences();
    const preferredProvider = preferences?.auth.preferredProvider;

    if (preferredProvider && providerDataArray.some((p) => p.provider === preferredProvider)) {
      return preferredProvider;
    }

    // Score providers based on data completeness and recency
    const scoredProviders = providerDataArray.map((data) => ({
      provider: data.provider,
      score: this.calculateProviderScore(data),
    }));

    // Sort by score (highest first)
    scoredProviders.sort((a, b) => b.score - a.score);

    return scoredProviders[0]?.provider || providerDataArray[0].provider;
  }

  /**
   * Calculate a score for a provider based on data completeness and quality
   */
  private calculateProviderScore(data: ProviderUserData): number {
    let score = 0;

    // Base score for having an email
    if (data.email) score += 20;

    // Score for completeness
    const fields = [
      'name',
      'firstName',
      'lastName',
      'profilePictureUrl',
      'company',
      'jobTitle',
      'bio',
      'location',
      'website',
    ];

    fields.forEach((field) => {
      if (data[field as keyof ProviderUserData]) score += 5;
    });

    // Score for verification
    if (data.emailVerified) score += 10;

    // Score for recency (more recent = higher score)
    if (data.lastLogin) {
      const daysSinceLogin = (Date.now() - data.lastLogin.getTime()) / (1000 * 60 * 60 * 24);
      score += Math.max(0, 15 - daysSinceLogin); // Up to 15 points for recent login
    }

    // Provider priority bonus
    const providerPriority = ['oidc', 'microsoft', 'google', 'github', 'facebook', 'anonymous'];
    const priorityIndex = providerPriority.indexOf(data.provider);
    if (priorityIndex >= 0) {
      score += (providerPriority.length - priorityIndex) * 2;
    }

    return score;
  }

  /**
   * Merge individual fields using defined strategies
   */
  private mergeFields(unifiedProfile: UnifiedUserProfile, providerDataArray: ProviderUserData[]): void {
    // Merge emails
    unifiedProfile.emails = this.mergeEmails(providerDataArray);

    // Merge phone numbers
    unifiedProfile.phoneNumbers = this.mergePhoneNumbers(providerDataArray);

    // Merge social links
    unifiedProfile.socialLinks = this.mergeSocialLinks(providerDataArray);

    // Apply merge rules for standard fields
    this.defaultMergeRules.forEach((rule) => {
      const mergedValue = this.applyMergeRule(rule, providerDataArray);
      this.setFieldValue(unifiedProfile, rule.field, mergedValue);
    });

    // Set derived fields
    unifiedProfile.displayName =
      unifiedProfile.name ||
      `${unifiedProfile.firstName || ''} ${unifiedProfile.lastName || ''}`.trim() ||
      unifiedProfile.preferredUsername ||
      unifiedProfile.primaryEmail.split('@')[0];
  }

  /**
   * Merge email addresses from all providers
   */
  private mergeEmails(providerDataArray: ProviderUserData[]): UnifiedUserProfile['emails'] {
    const emailMap = new Map<string, { email: string; provider: AuthProvider; verified: boolean; primary: boolean }>();

    providerDataArray.forEach((data) => {
      if (data.email) {
        const existing = emailMap.get(data.email.toLowerCase());
        if (!existing || data.emailVerified) {
          emailMap.set(data.email.toLowerCase(), {
            email: data.email,
            provider: data.provider,
            verified: data.emailVerified || false,
            primary: false, // Will be set below
          });
        }
      }
    });

    const emails = Array.from(emailMap.values());

    // Mark primary email
    const primaryData = providerDataArray.find(
      (p) => p.provider === this.unifiedProfileSubject$.value?.primaryProvider
    );
    if (primaryData?.email) {
      const primaryEmail = emails.find((e) => e.email.toLowerCase() === primaryData.email.toLowerCase());
      if (primaryEmail) {
        primaryEmail.primary = true;
      }
    }

    return emails;
  }

  /**
   * Merge phone numbers from all providers
   */
  private mergePhoneNumbers(providerDataArray: ProviderUserData[]): UnifiedUserProfile['phoneNumbers'] {
    const phoneMap = new Map<string, { number: string; provider: AuthProvider; verified: boolean }>();

    providerDataArray.forEach((data) => {
      if (data.phoneNumber) {
        phoneMap.set(data.phoneNumber, {
          number: data.phoneNumber,
          provider: data.provider,
          verified: true, // Assume verified if provided by OAuth
        });
      }
    });

    return Array.from(phoneMap.values());
  }

  /**
   * Merge social links from all providers
   */
  private mergeSocialLinks(providerDataArray: ProviderUserData[]): UnifiedUserProfile['socialLinks'] {
    const socialLinks: UnifiedUserProfile['socialLinks'] = {};

    providerDataArray.forEach((data) => {
      if (data.socialLinks) {
        Object.assign(socialLinks, data.socialLinks);
      }
    });

    return socialLinks;
  }

  /**
   * Apply a specific merge rule to get the best value for a field
   */
  private applyMergeRule(rule: ProfileMergeRule, providerDataArray: ProviderUserData[]): any {
    const fieldValues = providerDataArray
      .map((data) => ({
        value: data[rule.field as keyof ProviderUserData],
        provider: data.provider,
        lastUpdated: data.lastLogin || new Date(0),
      }))
      .filter((item) => item.value !== null && item.value !== undefined && item.value !== '');

    if (fieldValues.length === 0) return undefined;
    if (fieldValues.length === 1) return fieldValues[0].value;

    switch (rule.strategy) {
      case 'primary':
        const primaryValue = fieldValues.find((v) => v.provider === this.unifiedProfileSubject$.value?.primaryProvider);
        return primaryValue?.value || fieldValues[0].value;

      case 'most_recent':
        fieldValues.sort((a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime());
        return fieldValues[0].value;

      case 'most_complete':
        fieldValues.sort((a, b) => {
          const aLength = typeof a.value === 'string' ? a.value.length : 0;
          const bLength = typeof b.value === 'string' ? b.value.length : 0;
          return bLength - aLength;
        });
        return fieldValues[0].value;

      case 'provider_priority':
        if (rule.providerPriority) {
          for (const provider of rule.providerPriority) {
            const priorityValue = fieldValues.find((v) => v.provider === provider);
            if (priorityValue) return priorityValue.value;
          }
        }
        return fieldValues[0].value;

      case 'user_choice':
        // For now, fall back to most complete
        fieldValues.sort((a, b) => {
          const aLength = typeof a.value === 'string' ? a.value.length : 0;
          const bLength = typeof b.value === 'string' ? b.value.length : 0;
          return bLength - aLength;
        });
        return fieldValues[0].value;

      default:
        return fieldValues[0].value;
    }
  }

  /**
   * Set a field value on the unified profile
   */
  private setFieldValue(profile: UnifiedUserProfile, field: string, value: any): void {
    switch (field) {
      case 'name':
        profile.name = value;
        break;
      case 'firstName':
        profile.firstName = value;
        break;
      case 'lastName':
        profile.lastName = value;
        break;
      case 'profilePictureUrl':
        profile.profilePictureUrl = value;
        break;
      case 'locale':
        profile.locale = value;
        break;
      case 'timezone':
        profile.timezone = value;
        break;
      case 'company':
        profile.company = value;
        break;
      case 'jobTitle':
        profile.jobTitle = value;
        break;
      case 'bio':
        profile.bio = value;
        break;
      case 'website':
        profile.website = value;
        break;
      case 'location':
        profile.location = value;
        break;
      case 'dateOfBirth':
        profile.dateOfBirth = value;
        break;
      case 'gender':
        profile.gender = value;
        break;
    }
  }

  /**
   * Update primary provider
   */
  private updatePrimaryProvider(provider: AuthProvider): void {
    const currentProfile = this.unifiedProfileSubject$.value;
    if (currentProfile && currentProfile.primaryProvider !== provider) {
      currentProfile.primaryProvider = provider;
      currentProfile.lastUpdated = new Date();

      // Re-merge to apply new primary provider logic
      this.mergeProfileData(currentProfile.providerData);
    }
  }

  /**
   * Calculate data completeness percentage
   */
  private calculateDataCompleteness(profile: UnifiedUserProfile): number {
    const requiredFields = ['primaryEmail', 'name', 'displayName'];

    const optionalFields = [
      'firstName',
      'lastName',
      'profilePictureUrl',
      'company',
      'jobTitle',
      'bio',
      'website',
      'location',
    ];

    let score = 0;
    let totalFields = requiredFields.length + optionalFields.length;

    // Required fields (worth more)
    requiredFields.forEach((field) => {
      if (profile[field as keyof UnifiedUserProfile]) {
        score += 2;
      }
    });

    // Optional fields
    optionalFields.forEach((field) => {
      if (profile[field as keyof UnifiedUserProfile]) {
        score += 1;
      }
    });

    // Bonus for multiple emails/providers
    if (profile.emails.length > 1) score += 1;
    if (profile.providerData.length > 1) score += 1;
    if (Object.keys(profile.socialLinks).length > 0) score += 1;

    const maxScore = requiredFields.length * 2 + optionalFields.length + 3; // +3 for bonuses
    return Math.min(100, Math.round((score / maxScore) * 100));
  }

  /**
   * Get current unified profile
   */
  public getCurrentProfile(): UnifiedUserProfile | null {
    return this.unifiedProfileSubject$.value;
  }

  /**
   * Get provider data for a specific provider
   */
  public getProviderData(provider: AuthProvider): ProviderUserData | null {
    const providerData = this.providerDataSubject$.value;
    return providerData.find((p) => p.provider === provider) || null;
  }

  /**
   * Get all available providers with data
   */
  public getAvailableProviders(): AuthProvider[] {
    return this.providerDataSubject$.value.map((p) => p.provider);
  }

  /**
   * Force refresh of profile data
   */
  public refreshProfile(): void {
    const sessions = this.sessionManager.getAllSessions();
    this.updateProviderData(sessions);
  }

  /**
   * Export unified profile for backup/migration
   */
  public exportProfile(): string {
    const profile = this.unifiedProfileSubject$.value;
    const providerData = this.providerDataSubject$.value;

    return JSON.stringify(
      {
        unifiedProfile: profile,
        providerData: providerData,
        exportedAt: new Date().toISOString(),
      },
      null,
      2
    );
  }

  /**
   * Persist profile to localStorage
   */
  private persistProfile(profile: UnifiedUserProfile): void {
    try {
      const dataToStore = {
        ...profile,
        lastUpdated: profile.lastUpdated.toISOString(),
        providerData: profile.providerData.map((p) => ({
          ...p,
          lastLogin: p.lastLogin?.toISOString(),
        })),
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dataToStore));
    } catch (error) {
      console.warn('Failed to persist unified profile:', error);
    }
  }

  /**
   * Load profile from localStorage
   */
  private loadStoredProfile(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return;

      const data = JSON.parse(stored);

      // Convert date strings back to Date objects
      data.lastUpdated = new Date(data.lastUpdated);
      data.providerData = data.providerData.map((p: any) => ({
        ...p,
        lastLogin: p.lastLogin ? new Date(p.lastLogin) : undefined,
      }));

      this.unifiedProfileSubject$.next(data);
      this.providerDataSubject$.next(data.providerData);

      console.log('Unified profile loaded from storage');
    } catch (error) {
      console.warn('Failed to load stored unified profile:', error);
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  /**
   * Clear unified profile
   */
  public clearProfile(): void {
    this.unifiedProfileSubject$.next(null);
    this.providerDataSubject$.next([]);
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
