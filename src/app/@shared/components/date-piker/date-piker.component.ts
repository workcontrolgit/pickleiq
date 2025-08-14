import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'formly-field-date-piker',
  templateUrl: './date-piker.component.html',
  styleUrls: ['./date-piker.component.css'],
  imports: [NgbInputDatepicker, ReactiveFormsModule, FormlyModule],
})
export class DatePikerComponent extends FieldType {}
