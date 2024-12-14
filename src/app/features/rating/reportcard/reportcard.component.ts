import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FormfieldControlService } from '@app/services/form/formfield-control.service';
import { Router } from '@angular/router';
import { NgFor, NgClass, DatePipe, JsonPipe } from '@angular/common';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { Logger } from '@core/logger.service';
const log = new Logger('ReportcardComponent');

import { Config, NgxPrintElementComponent, NgxPrintElementService, NgxPrintElementDirective } from 'ngx-print-element';

type TypeSkillRating = Array<{ Skillcode: string; Description: string; Rating: string }>;

@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css'],
  standalone: true,
  imports: [NgxPrintElementComponent, NgxPrintElementDirective, NgFor, NgClass, DatePipe, JsonPipe, NgbTooltipModule],
})
export class ReportcardComponent implements OnInit {
  @ViewChild('tableRef') tableElement!: ElementRef<HTMLTableElement>;
  public config: Config = {
    printMode: 'template', // template-popup
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: 'Hello World',
    templateString:
      "<header>I'm part of the template header</header>{{printBody}}<footer>I'm part of the template footer</footer>",
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: [
      'header, footer{ text-align: center; }',
      'body .bg-success{ background-color: #4dcf83 !important; }',
      'body .bg-danger{ background-color: #f96868 !important; }',
    ],
  };

  state$: Observable<object>;
  @Input() model: any = {};

  colorGradeA: string = 'text-success fw-bolder';
  colorGradeB: string = 'text-info fw-bolder';
  colorGradeC: string = 'text-warning fw-bolder';
  colorGradeD: string = 'text-danger fw-bolder';

  //myObjArray: any = [];

  objSkillRating: TypeSkillRating = [];
  previousUrl: string;

  constructor(
    private formfieldControlService: FormfieldControlService,
    private router: Router,
    public print: NgxPrintElementService
  ) {
    // this.model = this.router.getCurrentNavigation().extras.state;
    // console.log(this.router.getCurrentNavigation().extras.state);
    // this.previousUrl = this.router.getCurrentNavigation().previousNavigation.finalUrl.toString();
    // console.log(this.router.getCurrentNavigation().previousNavigation.finalUrl.toString());
  }

  ngOnInit() {
    // rating level 4.0
    var objSkillByLevel: any;
    var skillcode: string;
    var description: string;
    var rating: string;
    var evalString: string;
    var filterLevel: string;

    log.error(this.model);

    filterLevel = this.model['level'];

    objSkillByLevel = this.formfieldControlService.LstSkillcode(filterLevel);

    for (let i = 0; i < objSkillByLevel.length; i++) {
      skillcode = objSkillByLevel[i].skillcode;
      description = objSkillByLevel[i].description;

      evalString = "this.model['" + skillcode + "']";
      rating = eval(evalString);

      this.objSkillRating.push({
        Skillcode: skillcode,
        Description: description,
        Rating: rating,
      });
    }
  }
  getGradeColor(rating: string): string {
    const classMap: { [key: string]: string } = {
      A: this.colorGradeA,
      B: this.colorGradeB,
      C: this.colorGradeC,
      D: this.colorGradeD,
    };

    return classMap[rating] || ''; // Default to an empty string if no match
  }
  onPrint1(el: ElementRef<HTMLTableElement | HTMLElement>) {
    this.print.print(el).subscribe(console.log);
  }

  exportToJSON() {
    const playerName = (this.model.playername || 'Unknown_Player').replace(/\s+/g, '_');
    const assessmentDate = this.model.assessmentDate || 'Unknown_Date';
    const formattedDate = assessmentDate.replace(/-/g, ''); // Remove hyphens for file name
    const fileName = `${playerName}_${formattedDate}_evaluation.json`;

    const jsonData = JSON.stringify(this.model, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    // a.download = 'pickle_skill_evaluation.json';
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }
}
