// Secure Video Service - YouTube API calls now proxied through server

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SecureHttpService } from '@core/services/secure-config.service';
import { Logger } from '@core';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';

const log = new Logger('video.service');

export interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      medium?: { url: string };
      high?: { url: string };
    };
    channelTitle: string;
    publishedAt: string;
  };
}

/**
 * Secure Video Service
 *
 * This service replaces direct YouTube API access with secure server-side proxies.
 * YouTube API keys are now secured in Azure Key Vault and accessed through server endpoints.
 */
@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private maxResults = environment.externalServices.youtube.maxResults;

  constructor(private secureHttpService: SecureHttpService) {}

  /**
   * Search for videos using secure server proxy
   * @param query Search query string
   * @returns Observable of video results
   */
  getVideos(query: string): Observable<VideoItem[]> {
    if (!query || query.trim().length === 0) {
      log.warn('Empty query provided to video search');
      return of([]);
    }

    log.info(`Searching for videos: "${query}"`);

    return this.secureHttpService.searchYouTubeVideos(query, this.maxResults).pipe(
      map((response: any) => {
        if (response && response.items) {
          log.info(`Found ${response.items.length} videos for query: "${query}"`);
          return response.items;
        }
        log.warn(`No video items found in response for query: "${query}"`);
        return [];
      }),
      catchError((error) => {
        log.error('Video search failed:', error);
        // Return empty array instead of throwing error to prevent UI crashes
        return of([]);
      })
    );
  }

  /**
   * Get video URL for embedding
   * @param videoId YouTube video ID
   * @returns Embed URL
   */
  getEmbedUrl(videoId: string): string {
    return `https://www.youtube.com/embed/${videoId}`;
  }

  /**
   * Get video thumbnail URL
   * @param videoId YouTube video ID
   * @param quality Thumbnail quality (default, medium, high)
   * @returns Thumbnail URL
   */
  getThumbnailUrl(videoId: string, quality: 'default' | 'medium' | 'high' = 'medium'): string {
    return `https://img.youtube.com/vi/${videoId}/${
      quality === 'default' ? 'default' : quality === 'medium' ? 'mqdefault' : 'hqdefault'
    }.jpg`;
  }

  /**
   * Search for skill-specific training videos
   * @param skillCode Skill code (e.g., "20-1", "30-5")
   * @param skillName Skill name for search query
   * @returns Observable of relevant training videos
   */
  getTrainingVideos(skillCode: string, skillName: string): Observable<VideoItem[]> {
    const searchQuery = `pickleball ${skillName} training technique`;
    log.info(`Searching for training videos for skill ${skillCode}: "${searchQuery}"`);

    return this.getVideos(searchQuery);
  }

  /**
   * Get general pickleball training videos
   * @param level Skill level (e.g., "2.0", "3.5", "4.0")
   * @returns Observable of level-appropriate training videos
   */
  getLevelTrainingVideos(level: string): Observable<VideoItem[]> {
    const searchQuery = `pickleball ${level} level training drills`;
    log.info(`Searching for level training videos: "${searchQuery}"`);

    return this.getVideos(searchQuery);
  }
}
