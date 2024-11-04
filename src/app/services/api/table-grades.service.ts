import { Injectable } from '@angular/core';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Grade, GradeAttributesMapping } from '@app/@shared/models/grade';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Logger } from '@core';

const log = new Logger('configuration.service');

@Injectable({
  providedIn: 'root',
})
export class TableGradesService {
  private dataTable: Grade[];

  private dataRequest$: Observable<Grade[]>;

  get TableGrades() {
    return this.dataTable;
  }

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {
    this.dataRequest$ = this.googleSheetsDbService.get<Grade>(
      environment.googleSheet.spreadsheetId,
      environment.googleSheet.worksheetGrades,
      GradeAttributesMapping
    );
  }

  public load(): Promise<any> {
    return new Promise((resolve) => {
      this.dataRequest$.subscribe((response: any) => {
        this.dataTable = response;
        resolve(true);
      });
    });
  }
}
