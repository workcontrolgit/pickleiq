import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grade } from '@app/@shared/models/grade';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { Logger } from '@core';
import { tap, catchError } from 'rxjs/operators';

const log = new Logger('table-grades.service');

/**
 * Secure Grades Service
 *
 * This service provides grading criteria data through secure server endpoints.
 * API access is now handled server-side with proper security controls.
 */
@Injectable({
  providedIn: 'root',
})
export class TableGradesService {
  private dataTable: Grade[] = [];
  private dataRequest$: Observable<Grade[]> | null = null;

  get TableGrades() {
    return this.dataTable;
  }

  constructor(private http: HttpClient) {}

  public load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.dataRequest$) {
        // Load grades data from secure server endpoint
        this.dataRequest$ = this.http.get<Grade[]>(`${environment.apiEndpoint}/data/grades`).pipe(
          tap((grades) => {
            this.dataTable = grades;
            log.info(`Loaded ${grades.length} grade definitions from secure API`);
          }),
          catchError((error) => {
            log.error('Failed to load grades data:', error);
            // Return default grades if server is unavailable
            return of(this.getDefaultGrades());
          })
        );
      }

      this.dataRequest$.subscribe({
        next: (response: Grade[]) => {
          this.dataTable = response;
          resolve(true);
        },
        error: (error) => {
          log.error('Grades data loading failed:', error);
          // Use default grades as fallback
          this.dataTable = this.getDefaultGrades();
          resolve(true); // Don't fail completely
        },
      });
    });
  }

  /**
   * Get default grading criteria as fallback
   */
  private getDefaultGrades(): Grade[] {
    return [
      {
        grade: 'A',
        description: 'Solid, consistent performance',
        points: 4,
        color: '#28a745', // Success green
      },
      {
        grade: 'B',
        description: 'Good basic form, but needs work',
        points: 3,
        color: '#17a2b8', // Info blue
      },
      {
        grade: 'C',
        description: 'Attempted but very poorly executed/needs work',
        points: 2,
        color: '#ffc107', // Warning yellow
      },
      {
        grade: 'D',
        description: 'Not observed or not able to execute',
        points: 1,
        color: '#dc3545', // Danger red
      },
    ];
  }

  /**
   * Get grade by letter
   */
  public getGrade(letter: string): Grade | undefined {
    return this.dataTable.find((grade) => grade.grade === letter);
  }

  /**
   * Get all available grades
   */
  public getAllGrades(): Grade[] {
    return this.dataTable;
  }

  /**
   * Refresh grades data from server
   */
  public refresh(): Promise<boolean> {
    this.dataRequest$ = null; // Reset cache
    return this.load();
  }
}
