import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Logger } from '@core';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { ReportcardComponent } from '../reportcard/reportcard.component';
import { EvaluationComponent } from '../evaluation/evaluation.component';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '@env/environment';

const log = new Logger('Evaluation');
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [
    NgbNav,
    NgbNavItem,
    NgbNavLink,
    NgbNavContent,
    EvaluationComponent,
    ReportcardComponent,
    NgbNavOutlet,
    JsonPipe,
  ],
})
export class FormComponent implements OnInit {
  // ngx formly
  form = new FormGroup({});
  skillLevel: string;
  // evaluation: Evaluation;
  // evaluations: Evaluation[];
  model: any;
  active: number;
  disabled = true;

  debug: boolean;

  //level: any;

  // modelDebug = {
  //   level: '4.0',
  //   playername: 'Fuji Nguyen',
  //   playeremail: 'fuji.nguyen@workcontrol.com',
  //   assessmentDate: '2022-10-24',
  //   '40-1': 'D',
  //   '40-2': 'A',
  //   '40-3': 'A',
  //   '40-4': 'A',
  //   '40-5': 'A',
  //   '40-6': 'A',
  //   '40-7': 'A',
  //   '40-8': 'A',
  //   '40-9': 'A',
  //   '40-10': 'A',
  //   '40-11': 'A',
  //   '40-12': 'D',
  //   '40-13': 'A',
  //   '40-14': 'B',
  //   '40-15': 'A',
  //   '40-16': 'A',
  //   '40-17': 'A',
  //   '40-18': 'A',
  //   '40-19': 'B',
  //   '40-20': 'A',
  //   '40-21': 'A',
  //   '40-22': 'C',
  //   evaluatorname: 'Emily Nguyen',
  //   evaluatoremail: 'emily@gmail.com',
  //   Notes: 'Lefty user',
  //   terms: true,
  // };

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.model = data.model;
      this.skillLevel = this.model['level'];
    });
  }

  selectTab(isValidForm: boolean) {
    this.active = 2;
    this.disabled = !isValidForm;
  }

  ngOnInit() {
    // set the debug from environment
    this.debug = environment.debug;
    // If debug true, load data from sample data modelDebug
    if (this.debug) {
      this.model = environment.modelDebug; // this.modelDebug;
    }
  }
}
