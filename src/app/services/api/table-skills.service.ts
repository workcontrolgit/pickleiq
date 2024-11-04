import { Injectable } from '@angular/core';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Skill, SkillAttributesMapping } from '@app/@shared/models/skill';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Logger } from '@core';

const log = new Logger('configuration.service');

@Injectable({
  providedIn: 'root',
})
export class TableSkillsService {
  private dataTable: Skill[];

  private dataRequest$: Observable<Skill[]>;

  get TableSkills() {
    return this.dataTable;
  }

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {
    this.dataRequest$ = this.googleSheetsDbService.get<Skill>(
      environment.googleSheet.spreadsheetId,
      environment.googleSheet.worksheetSkills,
      SkillAttributesMapping
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
