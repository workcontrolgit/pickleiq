import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay, switchMap } from 'rxjs/operators';
import { environment } from '@env/environment';

export interface SecureConfig {
  apiEndpoint: string;
  features: {
    pickleQEnabled: boolean;
    partnershipsEnabled: boolean;
    advancedAnalytics: boolean;
  };
  endpoints: {
    skills: string;
    youtube: string;
    evaluations: string;
    pickleq: string;
  };
}

/**
 * Secure Configuration Service
 *
 * This service ensures that:
 * 1. No API keys are exposed to the client
 * 2. All external API calls are proxied through secure server endpoints
 * 3. Configuration is loaded from the server, not hardcoded in the client
 * 4. Features can be dynamically enabled/disabled from the server
 */
@Injectable({
  providedIn: 'root',
})
export class SecureConfigService {
  private config$: Observable<SecureConfig> | null = null;

  constructor(private http: HttpClient) {}

  /**
   * Get secure configuration from server
   * Uses shareReplay to ensure config is only loaded once
   */
  getConfig(): Observable<SecureConfig> {
    if (!this.config$) {
      this.config$ = this.loadConfigFromServer().pipe(
        shareReplay(1), // Cache the result
        catchError((error) => {
          console.error('Failed to load secure configuration:', error);
          return of(this.getFallbackConfig());
        })
      );
    }
    return this.config$;
  }

  /**
   * Get specific endpoint URL for external services
   */
  getServiceEndpoint(service: 'skills' | 'youtube' | 'evaluations' | 'pickleq'): Observable<string> {
    return this.getConfig().pipe(map((config) => config.endpoints[service]));
  }

  /**
   * Check if a feature is enabled
   */
  isFeatureEnabled(feature: keyof SecureConfig['features']): Observable<boolean> {
    return this.getConfig().pipe(map((config) => config.features[feature]));
  }

  private loadConfigFromServer(): Observable<SecureConfig> {
    // Load configuration from secure server endpoint
    return this.http.get<SecureConfig>(`${environment.apiEndpoint}/config`);
  }

  private getFallbackConfig(): SecureConfig {
    // Fallback configuration for development/offline scenarios
    return {
      apiEndpoint: environment.apiEndpoint,
      features: {
        pickleQEnabled: false, // Disabled by default for security
        partnershipsEnabled: false,
        advancedAnalytics: false,
      },
      endpoints: {
        skills: environment.externalServices.googleSheets.endpoint,
        youtube: environment.externalServices.youtube.endpoint,
        evaluations: `${environment.apiEndpoint}/evaluations`,
        pickleq: `${environment.apiEndpoint}/pickleq`,
      },
    };
  }
}

/**
 * Secure HTTP Service
 *
 * Wrapper around HttpClient that ensures all external API calls
 * go through secure server-side proxies
 */
@Injectable({
  providedIn: 'root',
})
export class SecureHttpService {
  constructor(private http: HttpClient, private configService: SecureConfigService) {}

  /**
   * Get skills data through secure server proxy
   */
  getSkills(level?: string): Observable<any[]> {
    return this.configService.getServiceEndpoint('skills').pipe(
      switchMap((endpoint) => {
        const params = level ? { level } : {};
        return this.http.get<any[]>(endpoint, { params });
      }),
      catchError((error) => {
        console.error('Failed to fetch skills data:', error);
        return of([]);
      })
    );
  }

  /**
   * Search YouTube videos through secure server proxy
   */
  searchYouTubeVideos(query: string, maxResults?: number): Observable<any[]> {
    return this.configService.getServiceEndpoint('youtube').pipe(
      switchMap((endpoint) => {
        const params = {
          q: query,
          maxResults: maxResults?.toString() || '10',
        };
        return this.http.get<any[]>(endpoint, { params });
      }),
      catchError((error) => {
        console.error('Failed to search YouTube videos:', error);
        return of([]);
      })
    );
  }

  /**
   * Create evaluation through secure API
   */
  createEvaluation(evaluationData: any): Observable<any> {
    return this.configService.getServiceEndpoint('evaluations').pipe(
      switchMap((endpoint) => {
        return this.http.post<any>(endpoint, evaluationData);
      })
    );
  }

  /**
   * Get user evaluations through secure API
   */
  getUserEvaluations(): Observable<any[]> {
    return this.configService.getServiceEndpoint('evaluations').pipe(
      switchMap((endpoint) => {
        return this.http.get<any[]>(endpoint);
      }),
      catchError((error) => {
        console.error('Failed to fetch user evaluations:', error);
        return of([]);
      })
    );
  }

  /**
   * Ask PickleQ question through secure API
   */
  askPickleQ(question: string, context?: any): Observable<any> {
    return this.configService.getServiceEndpoint('pickleq').pipe(
      switchMap((endpoint) => {
        return this.http.post<any>(`${endpoint}/ask`, {
          question,
          context,
        });
      })
    );
  }
}
