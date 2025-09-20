import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthProvider } from './auth.service';
import { environment } from '@env/environment';

export interface SecurityValidationRule {
  id: string;
  name: string;
  description: string;
  provider: AuthProvider | 'all';
  severity: 'low' | 'medium' | 'high' | 'critical';
  enabled: boolean;
  validator: (context: SecurityValidationContext) => Promise<SecurityValidationResult>;
}

export interface SecurityValidationContext {
  provider: AuthProvider;
  accessToken?: string;
  refreshToken?: string;
  userProfile?: any;
  sessionId?: string;
  loginTime?: Date;
  clientInfo?: {
    userAgent: string;
    ipAddress: string;
    deviceFingerprint?: string;
  };
  previousSessions?: any[];
}

export interface SecurityValidationResult {
  ruleId: string;
  isValid: boolean;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  details?: any;
  recommendedAction: 'allow' | 'warn' | 'block' | 'require_mfa';
  metadata?: {
    confidence: number; // 0-1
    riskScore: number; // 0-100
    factors: string[];
  };
}

export interface SecurityValidationSummary {
  isValid: boolean;
  overallRiskScore: number;
  highestSeverity: 'low' | 'medium' | 'high' | 'critical' | null;
  recommendedAction: 'allow' | 'warn' | 'block' | 'require_mfa';
  validationResults: SecurityValidationResult[];
  summary: string;
}

@Injectable({
  providedIn: 'root',
})
export class SecurityValidationService {
  private validationRulesSubject$ = new BehaviorSubject<SecurityValidationRule[]>([]);
  public validationRules$ = this.validationRulesSubject$.asObservable();

  constructor() {
    this.initializeDefaultRules();
  }

  /**
   * Initialize default security validation rules
   */
  private initializeDefaultRules(): void {
    const defaultRules: SecurityValidationRule[] = [
      // Token validation rules
      {
        id: 'token_format_validation',
        name: 'Token Format Validation',
        description: 'Validates token format and structure for each provider',
        provider: 'all',
        severity: 'high',
        enabled: true,
        validator: this.validateTokenFormat.bind(this),
      },

      // Google-specific validations
      {
        id: 'google_issuer_validation',
        name: 'Google Issuer Validation',
        description: 'Validates Google token issuer matches expected values',
        provider: 'google',
        severity: 'critical',
        enabled: true,
        validator: this.validateGoogleIssuer.bind(this),
      },
      {
        id: 'google_audience_validation',
        name: 'Google Audience Validation',
        description: 'Validates Google token audience matches client ID',
        provider: 'google',
        severity: 'critical',
        enabled: true,
        validator: this.validateGoogleAudience.bind(this),
      },
      {
        id: 'google_email_verification',
        name: 'Google Email Verification',
        description: 'Ensures Google email is verified',
        provider: 'google',
        severity: 'medium',
        enabled: true,
        validator: this.validateGoogleEmailVerified.bind(this),
      },

      // Microsoft-specific validations
      {
        id: 'microsoft_tenant_validation',
        name: 'Microsoft Tenant Validation',
        description: 'Validates Microsoft tenant ID matches expected values',
        provider: 'microsoft',
        severity: 'high',
        enabled: true,
        validator: this.validateMicrosoftTenant.bind(this),
      },
      {
        id: 'microsoft_scope_validation',
        name: 'Microsoft Scope Validation',
        description: 'Validates Microsoft token scopes are appropriate',
        provider: 'microsoft',
        severity: 'medium',
        enabled: true,
        validator: this.validateMicrosoftScopes.bind(this),
      },

      // Facebook-specific validations
      {
        id: 'facebook_app_validation',
        name: 'Facebook App Validation',
        description: 'Validates Facebook token app ID matches expected value',
        provider: 'facebook',
        severity: 'critical',
        enabled: true,
        validator: this.validateFacebookApp.bind(this),
      },
      {
        id: 'facebook_user_verification',
        name: 'Facebook User Verification',
        description: 'Validates Facebook user verification status',
        provider: 'facebook',
        severity: 'low',
        enabled: true,
        validator: this.validateFacebookUserVerification.bind(this),
      },

      // GitHub-specific validations
      {
        id: 'github_scope_validation',
        name: 'GitHub Scope Validation',
        description: 'Validates GitHub token scopes match requested permissions',
        provider: 'github',
        severity: 'medium',
        enabled: true,
        validator: this.validateGitHubScopes.bind(this),
      },
      {
        id: 'github_user_type_validation',
        name: 'GitHub User Type Validation',
        description: 'Validates GitHub user type (User vs Organization)',
        provider: 'github',
        severity: 'low',
        enabled: true,
        validator: this.validateGitHubUserType.bind(this),
      },

      // Anonymous-specific validations
      {
        id: 'anonymous_token_validation',
        name: 'Anonymous Token Validation',
        description: 'Validates anonymous token structure and claims',
        provider: 'anonymous',
        severity: 'medium',
        enabled: true,
        validator: this.validateAnonymousToken.bind(this),
      },

      // Cross-provider validations
      {
        id: 'token_expiration_validation',
        name: 'Token Expiration Validation',
        description: 'Validates token expiration times are reasonable',
        provider: 'all',
        severity: 'high',
        enabled: true,
        validator: this.validateTokenExpiration.bind(this),
      },
      {
        id: 'user_profile_consistency',
        name: 'User Profile Consistency',
        description: 'Validates user profile data consistency and completeness',
        provider: 'all',
        severity: 'medium',
        enabled: true,
        validator: this.validateUserProfileConsistency.bind(this),
      },
      {
        id: 'suspicious_activity_detection',
        name: 'Suspicious Activity Detection',
        description: 'Detects potentially suspicious login patterns',
        provider: 'all',
        severity: 'high',
        enabled: true,
        validator: this.detectSuspiciousActivity.bind(this),
      },
    ];

    this.validationRulesSubject$.next(defaultRules);
  }

  /**
   * Validate authentication context against all applicable rules
   */
  public async validateAuthentication(context: SecurityValidationContext): Promise<SecurityValidationSummary> {
    const rules = this.validationRulesSubject$.value;
    const applicableRules = rules.filter(
      (rule) => rule.enabled && (rule.provider === 'all' || rule.provider === context.provider)
    );

    const validationResults: SecurityValidationResult[] = [];

    // Run all validation rules
    for (const rule of applicableRules) {
      try {
        const result = await rule.validator(context);
        validationResults.push(result);
      } catch (error) {
        // Log validation error but don't fail the entire process
        console.error(`Validation rule ${rule.id} failed:`, error);
        validationResults.push({
          ruleId: rule.id,
          isValid: false,
          severity: 'medium',
          message: `Validation rule failed: ${error}`,
          recommendedAction: 'warn',
        });
      }
    }

    return this.summarizeValidationResults(validationResults);
  }

  /**
   * Summarize validation results into actionable summary
   */
  private summarizeValidationResults(results: SecurityValidationResult[]): SecurityValidationSummary {
    const failedResults = results.filter((r) => !r.isValid);
    const severityOrder = ['low', 'medium', 'high', 'critical'];

    // Calculate overall risk score (0-100)
    let riskScore = 0;
    results.forEach((result) => {
      if (!result.isValid) {
        const severityWeight = severityOrder.indexOf(result.severity) + 1;
        riskScore += severityWeight * 10;
      }
    });
    riskScore = Math.min(riskScore, 100);

    // Determine highest severity
    const highestSeverity =
      failedResults.length > 0
        ? failedResults.reduce((highest, result) => {
            const currentIndex = severityOrder.indexOf(result.severity);
            const highestIndex = severityOrder.indexOf(highest);
            return currentIndex > highestIndex ? result.severity : highest;
          }, failedResults[0].severity)
        : null;

    // Determine recommended action
    let recommendedAction: 'allow' | 'warn' | 'block' | 'require_mfa' = 'allow';

    if (failedResults.some((r) => r.severity === 'critical')) {
      recommendedAction = 'block';
    } else if (failedResults.some((r) => r.severity === 'high')) {
      recommendedAction = 'require_mfa';
    } else if (failedResults.some((r) => r.severity === 'medium')) {
      recommendedAction = 'warn';
    }

    // Override with specific rule recommendations
    const blockingResults = failedResults.filter((r) => r.recommendedAction === 'block');
    const mfaResults = failedResults.filter((r) => r.recommendedAction === 'require_mfa');

    if (blockingResults.length > 0) {
      recommendedAction = 'block';
    } else if (mfaResults.length > 0) {
      recommendedAction = 'require_mfa';
    }

    // Generate summary message
    const isValid = failedResults.length === 0;
    let summary = '';

    if (isValid) {
      summary = 'All security validations passed successfully.';
    } else {
      const criticalCount = failedResults.filter((r) => r.severity === 'critical').length;
      const highCount = failedResults.filter((r) => r.severity === 'high').length;
      const mediumCount = failedResults.filter((r) => r.severity === 'medium').length;
      const lowCount = failedResults.filter((r) => r.severity === 'low').length;

      summary = `${failedResults.length} security validation(s) failed: `;
      const counts = [];
      if (criticalCount > 0) counts.push(`${criticalCount} critical`);
      if (highCount > 0) counts.push(`${highCount} high`);
      if (mediumCount > 0) counts.push(`${mediumCount} medium`);
      if (lowCount > 0) counts.push(`${lowCount} low`);
      summary += counts.join(', ') + ' severity issues.';
    }

    return {
      isValid,
      overallRiskScore: riskScore,
      highestSeverity,
      recommendedAction,
      validationResults: results,
      summary,
    };
  }

  // Provider-specific validation methods

  /**
   * Validate token format and structure
   */
  private async validateTokenFormat(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    const { provider, accessToken } = context;

    if (!accessToken) {
      return {
        ruleId: 'token_format_validation',
        isValid: false,
        severity: 'high',
        message: 'No access token provided',
        recommendedAction: 'block',
      };
    }

    try {
      switch (provider) {
        case 'anonymous':
          // Anonymous tokens should be simple UUID-like strings
          const anonymousPattern = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
          if (!anonymousPattern.test(accessToken)) {
            return {
              ruleId: 'token_format_validation',
              isValid: false,
              severity: 'medium',
              message: 'Anonymous token format is invalid',
              recommendedAction: 'warn',
            };
          }
          break;

        case 'google':
        case 'facebook':
        case 'github':
        case 'microsoft':
        case 'oidc':
          // OAuth tokens should be JWT format for most providers
          const jwtPattern = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
          if (!jwtPattern.test(accessToken)) {
            // Some providers use opaque tokens, so this is a warning not an error
            return {
              ruleId: 'token_format_validation',
              isValid: false,
              severity: 'low',
              message: `${provider} token does not appear to be JWT format`,
              recommendedAction: 'warn',
            };
          }
          break;

        default:
          return {
            ruleId: 'token_format_validation',
            isValid: false,
            severity: 'medium',
            message: `Unknown provider: ${provider}`,
            recommendedAction: 'warn',
          };
      }

      return {
        ruleId: 'token_format_validation',
        isValid: true,
        severity: 'low',
        message: 'Token format is valid',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'token_format_validation',
        isValid: false,
        severity: 'medium',
        message: `Token format validation failed: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  /**
   * Validate Google token issuer
   */
  private async validateGoogleIssuer(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const claims = this.decodeJWTClaims(context.accessToken || '');
      const validIssuers = ['https://accounts.google.com', 'accounts.google.com'];

      if (!validIssuers.includes(claims.iss)) {
        return {
          ruleId: 'google_issuer_validation',
          isValid: false,
          severity: 'critical',
          message: `Invalid Google token issuer: ${claims.iss}`,
          recommendedAction: 'block',
        };
      }

      return {
        ruleId: 'google_issuer_validation',
        isValid: true,
        severity: 'low',
        message: 'Google token issuer is valid',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'google_issuer_validation',
        isValid: false,
        severity: 'high',
        message: `Could not validate Google token issuer: ${error}`,
        recommendedAction: 'block',
      };
    }
  }

  /**
   * Validate Google token audience
   */
  private async validateGoogleAudience(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const claims = this.decodeJWTClaims(context.accessToken || '');
      // In a real implementation, you'd get this from environment configuration
      const expectedClientId = environment.oauthProviders.google.clientId;

      if (claims.aud !== expectedClientId) {
        return {
          ruleId: 'google_audience_validation',
          isValid: false,
          severity: 'critical',
          message: `Google token audience mismatch: ${claims.aud}`,
          recommendedAction: 'block',
        };
      }

      return {
        ruleId: 'google_audience_validation',
        isValid: true,
        severity: 'low',
        message: 'Google token audience is valid',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'google_audience_validation',
        isValid: false,
        severity: 'high',
        message: `Could not validate Google token audience: ${error}`,
        recommendedAction: 'block',
      };
    }
  }

  /**
   * Validate Google email verification status
   */
  private async validateGoogleEmailVerified(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const claims = this.decodeJWTClaims(context.accessToken || '');

      if (claims.email_verified !== true) {
        return {
          ruleId: 'google_email_verification',
          isValid: false,
          severity: 'medium',
          message: 'Google email is not verified',
          recommendedAction: 'warn',
        };
      }

      return {
        ruleId: 'google_email_verification',
        isValid: true,
        severity: 'low',
        message: 'Google email is verified',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'google_email_verification',
        isValid: false,
        severity: 'low',
        message: `Could not validate Google email verification: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  /**
   * Validate Microsoft tenant
   */
  private async validateMicrosoftTenant(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const claims = this.decodeJWTClaims(context.accessToken || '');

      // In a real implementation, you'd have a list of allowed tenants
      const allowedTenants = ['common', 'organizations', 'consumers']; // Add specific tenant IDs as needed

      if (!claims.tid && !allowedTenants.includes(claims.tid)) {
        return {
          ruleId: 'microsoft_tenant_validation',
          isValid: false,
          severity: 'high',
          message: `Microsoft tenant not allowed: ${claims.tid}`,
          recommendedAction: 'block',
        };
      }

      return {
        ruleId: 'microsoft_tenant_validation',
        isValid: true,
        severity: 'low',
        message: 'Microsoft tenant is valid',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'microsoft_tenant_validation',
        isValid: false,
        severity: 'medium',
        message: `Could not validate Microsoft tenant: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  /**
   * Validate Microsoft scopes
   */
  private async validateMicrosoftScopes(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const claims = this.decodeJWTClaims(context.accessToken || '');
      const scopes = claims.scp ? claims.scp.split(' ') : [];
      const requiredScopes = ['openid', 'profile']; // Add other required scopes

      const missingScopes = requiredScopes.filter((scope) => !scopes.includes(scope));

      if (missingScopes.length > 0) {
        return {
          ruleId: 'microsoft_scope_validation',
          isValid: false,
          severity: 'medium',
          message: `Missing required Microsoft scopes: ${missingScopes.join(', ')}`,
          recommendedAction: 'warn',
        };
      }

      return {
        ruleId: 'microsoft_scope_validation',
        isValid: true,
        severity: 'low',
        message: 'Microsoft scopes are valid',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'microsoft_scope_validation',
        isValid: false,
        severity: 'low',
        message: `Could not validate Microsoft scopes: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  /**
   * Validate Facebook app ID
   */
  private async validateFacebookApp(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const claims = this.decodeJWTClaims(context.accessToken || '');
      const expectedAppId = environment.oauthProviders.facebook.clientId;

      if (claims.app_id !== expectedAppId) {
        return {
          ruleId: 'facebook_app_validation',
          isValid: false,
          severity: 'critical',
          message: `Facebook app ID mismatch: ${claims.app_id}`,
          recommendedAction: 'block',
        };
      }

      return {
        ruleId: 'facebook_app_validation',
        isValid: true,
        severity: 'low',
        message: 'Facebook app ID is valid',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'facebook_app_validation',
        isValid: false,
        severity: 'high',
        message: `Could not validate Facebook app ID: ${error}`,
        recommendedAction: 'block',
      };
    }
  }

  /**
   * Validate Facebook user verification
   */
  private async validateFacebookUserVerification(
    context: SecurityValidationContext
  ): Promise<SecurityValidationResult> {
    try {
      const profile = context.userProfile;

      if (profile && profile.verified === false) {
        return {
          ruleId: 'facebook_user_verification',
          isValid: false,
          severity: 'low',
          message: 'Facebook user is not verified',
          recommendedAction: 'warn',
        };
      }

      return {
        ruleId: 'facebook_user_verification',
        isValid: true,
        severity: 'low',
        message: 'Facebook user verification status is acceptable',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'facebook_user_verification',
        isValid: false,
        severity: 'low',
        message: `Could not validate Facebook user verification: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  /**
   * Validate GitHub scopes
   */
  private async validateGitHubScopes(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      // GitHub doesn't include scopes in JWT tokens, so we'd need to check the OAuth configuration
      // For now, we'll assume the scopes are correct if we have a valid token
      return {
        ruleId: 'github_scope_validation',
        isValid: true,
        severity: 'low',
        message: 'GitHub scopes validation skipped (not available in token)',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'github_scope_validation',
        isValid: false,
        severity: 'low',
        message: `Could not validate GitHub scopes: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  /**
   * Validate GitHub user type
   */
  private async validateGitHubUserType(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const profile = context.userProfile;

      if (profile && profile.type && profile.type !== 'User') {
        return {
          ruleId: 'github_user_type_validation',
          isValid: false,
          severity: 'low',
          message: `GitHub user type is ${profile.type}, expected User`,
          recommendedAction: 'warn',
        };
      }

      return {
        ruleId: 'github_user_type_validation',
        isValid: true,
        severity: 'low',
        message: 'GitHub user type is valid',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'github_user_type_validation',
        isValid: false,
        severity: 'low',
        message: `Could not validate GitHub user type: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  /**
   * Validate anonymous token structure
   */
  private async validateAnonymousToken(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const { accessToken } = context;

      if (!accessToken) {
        return {
          ruleId: 'anonymous_token_validation',
          isValid: false,
          severity: 'medium',
          message: 'Anonymous token is missing',
          recommendedAction: 'warn',
        };
      }

      // Anonymous tokens should be UUID format
      const uuidPattern = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
      if (!uuidPattern.test(accessToken)) {
        return {
          ruleId: 'anonymous_token_validation',
          isValid: false,
          severity: 'medium',
          message: 'Anonymous token format is invalid',
          recommendedAction: 'warn',
        };
      }

      return {
        ruleId: 'anonymous_token_validation',
        isValid: true,
        severity: 'low',
        message: 'Anonymous token is valid',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'anonymous_token_validation',
        isValid: false,
        severity: 'medium',
        message: `Could not validate anonymous token: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  /**
   * Validate token expiration
   */
  private async validateTokenExpiration(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const { accessToken, provider } = context;

      if (provider === 'anonymous') {
        // Anonymous tokens have different expiration logic
        return {
          ruleId: 'token_expiration_validation',
          isValid: true,
          severity: 'low',
          message: 'Anonymous token expiration handled separately',
          recommendedAction: 'allow',
        };
      }

      if (!accessToken) {
        return {
          ruleId: 'token_expiration_validation',
          isValid: false,
          severity: 'high',
          message: 'No access token to validate expiration',
          recommendedAction: 'block',
        };
      }

      const claims = this.decodeJWTClaims(accessToken);
      const now = Math.floor(Date.now() / 1000);

      // Check if token is expired
      if (claims.exp && claims.exp < now) {
        return {
          ruleId: 'token_expiration_validation',
          isValid: false,
          severity: 'high',
          message: 'Access token has expired',
          recommendedAction: 'block',
        };
      }

      // Check if token was issued in the future (clock skew protection)
      if (claims.iat && claims.iat > now + 300) {
        // 5 minute tolerance
        return {
          ruleId: 'token_expiration_validation',
          isValid: false,
          severity: 'high',
          message: 'Access token issued in the future',
          recommendedAction: 'block',
        };
      }

      // Check if token lifetime is reasonable (not too long)
      if (claims.exp && claims.iat) {
        const lifetimeHours = (claims.exp - claims.iat) / 3600;
        if (lifetimeHours > 24) {
          // Tokens shouldn't be valid for more than 24 hours
          return {
            ruleId: 'token_expiration_validation',
            isValid: false,
            severity: 'medium',
            message: `Token lifetime is unusually long: ${lifetimeHours} hours`,
            recommendedAction: 'warn',
          };
        }
      }

      return {
        ruleId: 'token_expiration_validation',
        isValid: true,
        severity: 'low',
        message: 'Token expiration is valid',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'token_expiration_validation',
        isValid: false,
        severity: 'medium',
        message: `Could not validate token expiration: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  /**
   * Validate user profile consistency
   */
  private async validateUserProfileConsistency(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const { userProfile, provider } = context;

      if (!userProfile) {
        return {
          ruleId: 'user_profile_consistency',
          isValid: false,
          severity: 'medium',
          message: 'User profile is missing',
          recommendedAction: 'warn',
        };
      }

      // Check required fields based on provider
      const requiredFields = this.getRequiredFieldsForProvider(provider);
      const missingFields = requiredFields.filter((field) => !userProfile[field]);

      if (missingFields.length > 0) {
        return {
          ruleId: 'user_profile_consistency',
          isValid: false,
          severity: 'low',
          message: `Missing user profile fields: ${missingFields.join(', ')}`,
          recommendedAction: 'warn',
        };
      }

      // Validate email format if present
      if (userProfile.email && !this.isValidEmail(userProfile.email)) {
        return {
          ruleId: 'user_profile_consistency',
          isValid: false,
          severity: 'medium',
          message: 'User email format is invalid',
          recommendedAction: 'warn',
        };
      }

      return {
        ruleId: 'user_profile_consistency',
        isValid: true,
        severity: 'low',
        message: 'User profile is consistent',
        recommendedAction: 'allow',
      };
    } catch (error) {
      return {
        ruleId: 'user_profile_consistency',
        isValid: false,
        severity: 'low',
        message: `Could not validate user profile consistency: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  /**
   * Detect suspicious activity patterns
   */
  private async detectSuspiciousActivity(context: SecurityValidationContext): Promise<SecurityValidationResult> {
    try {
      const { clientInfo, loginTime, previousSessions } = context;
      const suspiciousFactors: string[] = [];
      let riskScore = 0;

      // Check for rapid consecutive logins
      if (previousSessions && previousSessions.length > 0) {
        const recentLogins = previousSessions.filter((session) => {
          const timeDiff = (loginTime?.getTime() || 0) - new Date(session.loginTime).getTime();
          return timeDiff < 5 * 60 * 1000; // Within 5 minutes
        });

        if (recentLogins.length >= 3) {
          suspiciousFactors.push('Rapid consecutive login attempts');
          riskScore += 30;
        }
      }

      // Check for unusual user agent patterns
      if (clientInfo?.userAgent) {
        const suspiciousUserAgentPatterns = [/bot/i, /crawler/i, /scraper/i, /automated/i, /curl/i, /wget/i];

        if (suspiciousUserAgentPatterns.some((pattern) => pattern.test(clientInfo.userAgent))) {
          suspiciousFactors.push('Suspicious user agent detected');
          riskScore += 40;
        }
      }

      // Check for IP address changes (if available)
      // This would require storing previous IP addresses
      // Implementation depends on your IP tracking strategy

      const severity = riskScore >= 50 ? 'high' : riskScore >= 25 ? 'medium' : 'low';
      const recommendedAction = riskScore >= 50 ? 'require_mfa' : riskScore >= 25 ? 'warn' : 'allow';

      if (suspiciousFactors.length > 0) {
        return {
          ruleId: 'suspicious_activity_detection',
          isValid: false,
          severity,
          message: `Suspicious activity detected: ${suspiciousFactors.join(', ')}`,
          recommendedAction,
          metadata: {
            confidence: Math.min(riskScore / 100, 1),
            riskScore,
            factors: suspiciousFactors,
          },
        };
      }

      return {
        ruleId: 'suspicious_activity_detection',
        isValid: true,
        severity: 'low',
        message: 'No suspicious activity detected',
        recommendedAction: 'allow',
        metadata: {
          confidence: 0.9,
          riskScore: 0,
          factors: [],
        },
      };
    } catch (error) {
      return {
        ruleId: 'suspicious_activity_detection',
        isValid: false,
        severity: 'low',
        message: `Could not analyze suspicious activity: ${error}`,
        recommendedAction: 'warn',
      };
    }
  }

  // Utility methods

  /**
   * Decode JWT claims without verification
   */
  private decodeJWTClaims(token: string): any {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid JWT format');
      }

      const payload = parts[1];
      const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(decoded);
    } catch (error) {
      throw new Error(`Failed to decode JWT: ${error}`);
    }
  }

  /**
   * Get required profile fields for provider
   */
  private getRequiredFieldsForProvider(provider: AuthProvider): string[] {
    switch (provider) {
      case 'google':
        return ['email', 'name', 'id'];
      case 'facebook':
        return ['id', 'name'];
      case 'github':
        return ['id', 'login'];
      case 'microsoft':
        return ['id', 'name'];
      case 'anonymous':
        return ['id'];
      case 'oidc':
        return ['sub'];
      default:
        return ['id'];
    }
  }

  /**
   * Validate email format
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Public configuration methods

  /**
   * Add custom validation rule
   */
  public addValidationRule(rule: SecurityValidationRule): void {
    const currentRules = this.validationRulesSubject$.value;
    const updatedRules = [...currentRules, rule];
    this.validationRulesSubject$.next(updatedRules);
  }

  /**
   * Update validation rule
   */
  public updateValidationRule(ruleId: string, updates: Partial<SecurityValidationRule>): void {
    const currentRules = this.validationRulesSubject$.value;
    const updatedRules = currentRules.map((rule) => (rule.id === ruleId ? { ...rule, ...updates } : rule));
    this.validationRulesSubject$.next(updatedRules);
  }

  /**
   * Enable/disable validation rule
   */
  public setRuleEnabled(ruleId: string, enabled: boolean): void {
    this.updateValidationRule(ruleId, { enabled });
  }

  /**
   * Get validation rules for specific provider
   */
  public getValidationRulesForProvider(provider: AuthProvider): SecurityValidationRule[] {
    return this.validationRulesSubject$.value.filter((rule) => rule.provider === 'all' || rule.provider === provider);
  }

  /**
   * Get all validation rules
   */
  public getAllValidationRules(): SecurityValidationRule[] {
    return this.validationRulesSubject$.value;
  }
}
