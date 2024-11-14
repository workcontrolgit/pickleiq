import { Component, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FormfieldControlService } from '@app/services/form/formfield-control.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgFor, NgClass, DatePipe } from '@angular/common';
// import { Config, NgxPrintElementComponent, NgxPrintElementService, NgxPrintElementDirective, NgxPrintElementModule } from 'ngx-print-element';

import { Config, NgxPrintElementComponent, NgxPrintElementService, NgxPrintElementDirective } from 'ngx-print-element';

type TypeSkillRating = Array<{ Skillcode: string; Description: string; Rating: string }>;

@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css'],
  standalone: true,
  imports: [NgxPrintElementComponent, NgxPrintElementDirective, NgFor, NgClass, DatePipe],
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
    this.print.print(el).subscribe(console.log)
  }
}
