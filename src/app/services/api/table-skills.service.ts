import { Injectable } from '@angular/core';

import { Skill } from '@app/@shared/models/skill';
import { SecureHttpService } from '@core/services/secure-config.service';
import { Observable, of } from 'rxjs';
import { Logger } from '@core';
import { tap, catchError } from 'rxjs/operators';

const log = new Logger('table-skills.service');

/**
 * Secure Skills Service
 *
 * This service replaces direct Google Sheets API access with secure server-side proxies.
 * All API keys are now secured in Azure Key Vault and accessed through server endpoints.
 */
@Injectable({
  providedIn: 'root',
})
export class TableSkillsService {
  private dataTable: Skill[] = [];
  private dataRequest$: Observable<Skill[]> | null = null;

  get TableSkills() {
    return this.dataTable;
  }

  constructor(private secureHttpService: SecureHttpService) {}

  public load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // Use secure HTTP service instead of direct Google Sheets access
      if (!this.dataRequest$) {
        this.dataRequest$ = this.secureHttpService.getSkills().pipe(
          tap((skills) => {
            this.dataTable = skills;
            log.info(`Loaded ${skills.length} skills from secure API`);
          }),
          catchError((error) => {
            log.error('Failed to load skills data:', error);
            // Return empty array on error to prevent application crashes
            return of([]);
          })
        );
      }

      this.dataRequest$.subscribe({
        next: (response: Skill[]) => {
          this.dataTable = response;
          resolve(true);
        },
        error: (error) => {
          log.error('Skills data loading failed:', error);
          reject(error);
        },
      });
    });
  }

  /**
   * Get skills filtered by level
   */
  public getSkillsByLevel(level: string): Observable<Skill[]> {
    return this.secureHttpService.getSkills(level);
  }

  /**
   * Refresh skills data from server
   */
  public refresh(): Promise<boolean> {
    this.dataRequest$ = null; // Reset cache
    return this.load();
  }
}
