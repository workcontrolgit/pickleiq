import { Injectable } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '@env/environment';

export interface OAuthProviderMetadata {
  id: string;
  name: string;
  description: string;
  icon: string;
  brandColor: string;
  buttonClass: string;
  enabled: boolean;
}

export interface OAuthProviderConfig extends AuthConfig {
  enabled: boolean;
  name: string;
  description: string;
  icon: string;
  brandColor: string;
  buttonClass: string;
}

@Injectable({
  providedIn: 'root',
})
export class OAuthProviderFactoryService {
  constructor() {}

  /**
   * Get all available OAuth provider configurations from environment
   */
  public getAllProviders(): Record<string, OAuthProviderConfig> {
    return environment.oauthProviders || {};
  }

  /**
   * Get configuration for a specific OAuth provider
   */
  public getProviderConfig(providerId: string): OAuthProviderConfig | null {
    const providers = this.getAllProviders();
    return providers[providerId] || null;
  }

  /**
   * Get list of enabled OAuth providers
   */
  public getEnabledProviders(): Record<string, OAuthProviderConfig> {
    const allProviders = this.getAllProviders();
    const enabledProviders: Record<string, OAuthProviderConfig> = {};

    Object.keys(allProviders).forEach((key) => {
      if (allProviders[key].enabled) {
        enabledProviders[key] = allProviders[key];
      }
    });

    return enabledProviders;
  }

  /**
   * Get provider metadata for UI display
   */
  public getProviderMetadata(providerId: string): OAuthProviderMetadata | null {
    const config = this.getProviderConfig(providerId);
    if (!config) return null;

    return {
      id: providerId,
      name: config.name,
      description: config.description,
      icon: config.icon,
      brandColor: config.brandColor,
      buttonClass: config.buttonClass,
      enabled: config.enabled,
    };
  }

  /**
   * Get all provider metadata for UI display, optionally filtered by enabled status
   */
  public getAllProviderMetadata(enabledOnly: boolean = false): OAuthProviderMetadata[] {
    const providers = enabledOnly ? this.getEnabledProviders() : this.getAllProviders();
    const metadata: OAuthProviderMetadata[] = [];

    Object.keys(providers).forEach((key) => {
      const meta = this.getProviderMetadata(key);
      if (meta) {
        metadata.push(meta);
      }
    });

    // Sort by priority order if defined in environment
    if (environment.auth?.providerPriority) {
      metadata.sort((a, b) => {
        const aPriority = environment.auth.providerPriority.indexOf(a.id);
        const bPriority = environment.auth.providerPriority.indexOf(b.id);

        // If not found in priority list, put at end
        const aPos = aPriority === -1 ? 999 : aPriority;
        const bPos = bPriority === -1 ? 999 : bPriority;

        return aPos - bPos;
      });
    }

    return metadata;
  }

  /**
   * Get AuthConfig compatible configuration for angular-oauth2-oidc
   */
  public getAuthConfig(providerId: string): AuthConfig | null {
    const config = this.getProviderConfig(providerId);
    if (!config || !config.enabled) return null;

    // Create a clean AuthConfig object without our custom metadata
    const authConfig: AuthConfig = {
      issuer: config.issuer,
      clientId: config.clientId,
      responseType: config.responseType,
      scope: config.scope,
      redirectUri: config.redirectUri,
      postLogoutRedirectUri: config.postLogoutRedirectUri,
      silentRefreshRedirectUri: config.silentRefreshRedirectUri,
      useSilentRefresh: config.useSilentRefresh,
      strictDiscoveryDocumentValidation: config.strictDiscoveryDocumentValidation,
    };

    // Add optional properties if they exist
    if (config.silentRefreshTimeout !== undefined) {
      authConfig.silentRefreshTimeout = config.silentRefreshTimeout;
    }
    if (config.timeoutFactor !== undefined) {
      authConfig.timeoutFactor = config.timeoutFactor;
    }
    if (config.sessionChecksEnabled !== undefined) {
      authConfig.sessionChecksEnabled = config.sessionChecksEnabled;
    }
    if (config.showDebugInformation !== undefined) {
      authConfig.showDebugInformation = config.showDebugInformation;
    }
    if (config.clearHashAfterLogin !== undefined) {
      authConfig.clearHashAfterLogin = config.clearHashAfterLogin;
    }
    if (config.nonceStateSeparator !== undefined) {
      authConfig.nonceStateSeparator = config.nonceStateSeparator;
    }
    if (config.customUrlParams !== undefined) {
      authConfig.customUrlParams = config.customUrlParams;
    }
    if (config.loginUrl !== undefined) {
      authConfig.loginUrl = config.loginUrl;
    }
    if (config.tokenEndpoint !== undefined) {
      authConfig.tokenEndpoint = config.tokenEndpoint;
    }
    if (config.userinfoEndpoint !== undefined) {
      authConfig.userinfoEndpoint = config.userinfoEndpoint;
    }

    return authConfig;
  }

  /**
   * Validate provider configuration
   */
  public validateProviderConfig(providerId: string): { valid: boolean; errors: string[] } {
    const config = this.getProviderConfig(providerId);
    const errors: string[] = [];

    if (!config) {
      return { valid: false, errors: [`Provider '${providerId}' not found`] };
    }

    if (!config.enabled) {
      return { valid: false, errors: [`Provider '${providerId}' is disabled`] };
    }

    // Required fields
    if (!config.issuer) errors.push('Issuer is required');
    if (!config.clientId) errors.push('Client ID is required');
    if (!config.responseType) errors.push('Response type is required');
    if (!config.scope) errors.push('Scope is required');
    if (!config.redirectUri) errors.push('Redirect URI is required');

    // UI metadata
    if (!config.name) errors.push('Display name is required');
    if (!config.description) errors.push('Description is required');
    if (!config.icon) errors.push('Icon is required');
    if (!config.buttonClass) errors.push('Button class is required');

    return { valid: errors.length === 0, errors };
  }

  /**
   * Check if a provider is properly configured and enabled
   */
  public isProviderAvailable(providerId: string): boolean {
    const validation = this.validateProviderConfig(providerId);
    return validation.valid;
  }

  /**
   * Get list of provider IDs that are available and properly configured
   */
  public getAvailableProviderIds(): string[] {
    const allProviders = this.getAllProviders();
    const availableProviders: string[] = [];

    Object.keys(allProviders).forEach((key) => {
      if (this.isProviderAvailable(key)) {
        availableProviders.push(key);
      }
    });

    return availableProviders;
  }
}
