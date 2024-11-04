import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, ValidationErrors, FormControl } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { RatingRoutingModule } from './rating-routing.module';
import { RatingComponent } from './rating.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ReportcardComponent } from './reportcard/reportcard.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { WarningDialogComponent } from '../../@shared/components/warning-dialog/warning-dialog-component';
import { DatePikerComponent } from '../../@shared/components/date-piker/date-piker.component';
import { DatePickerValueAccessor } from '../../@shared/components/date-piker/date-picker.directive';
import { FieldsetWrapper } from '../../@shared/components/wrappers/filedset-wrapper.component';
import { LabelWrapper } from '../../@shared/components/wrappers/label-wrapper.component';

// TODO move into service
export function EmailValidator(control: FormControl | any): ValidationErrors | null {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    control.value
  )
    ? null
    : { email: true };
}
export function EmailValidatorMessage(err: any, field: FormlyFieldConfig) {
  return `"${field?.formControl?.value}" is not a valid email address`;
}

// import { NgxPrintElementService } from 'ngx-print-element';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [{ name: 'date', component: DatePikerComponent, wrappers: ['label', 'fieldset'] }],
      wrappers: [
        { name: 'label', component: LabelWrapper },
        { name: 'fieldset', component: FieldsetWrapper },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'email', message: EmailValidatorMessage },
      ],
      validators: [{ name: 'email', validation: EmailValidator }],
    }),
    FormsModule,
    // NgxPrintElementService,
    FormlyBootstrapModule,
    RatingRoutingModule,
    RatingComponent,
    DashboardComponent,
    FormComponent,
    ReportcardComponent,
    EvaluationComponent,
    WarningDialogComponent,
    DatePikerComponent,
    DatePickerValueAccessor,
    FieldsetWrapper,
    LabelWrapper,
  ],
  providers: [],
})
export class RatingModule {}
