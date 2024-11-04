import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TableGradesService } from '@app/services/api/table-grades.service';
import { TableSkillsService } from '@app/services/api/table-skills.service';

type TypeLabelValue = Array<{ label: string; value: string }>;

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  constructor(private tblGradesService: TableGradesService, private tblSkillsService: TableSkillsService) {}

  public readonly SelectRatingPlaceholder: string = 'Select a rating';

  public readonly TableGrades = this.tblGradesService.TableGrades;

  getGradeLetters(): TypeLabelValue {
    var lstGrades: TypeLabelValue = [];

    for (let i = 0; i < this.TableGrades.length; i++) {
      lstGrades.push({
        label: this.TableGrades[i].grade,
        value: this.TableGrades[i].grade,
      });
    }
    return lstGrades;
  }

  // public readonly TableSkillCode = this.databaseService.TableSkillCode;
  public readonly TableSkills = this.tblSkillsService.TableSkills;

  public readonly GeneralFields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<div class="alert alert-warning"><h4>Section 1 - Player Information</h4></div>',
    },
    {
      key: 'playername',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'enter player name',
        required: true,
      },
    },
    {
      key: 'playeremail',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'enter player email',
        required: true,
      },
      validators: {
        validation: [this.EmailValidator],
      },
    },
    {
      key: 'assessmentDate',
      type: 'input',
      templateOptions: {
        label: 'Assessment Date',
        placeholder: 'Enter date',
        required: true,
        type: 'date',
      },
    },
  ];

  public readonly SummaryFields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<div class="alert alert-info"><h4>Section 3 - Evaluator Information</h4></div>',
    },
    {
      key: 'evaluatorname',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'enter evaluator name',
        required: true,
      },
    },
    {
      key: 'evaluatoremail',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'enter evaluator email',
        required: true,
      },
      validators: {
        validation: [this.EmailValidator],
      },
    },
    {
      key: 'Notes',
      type: 'textarea',
      props: {
        label: 'Evaluation Notes',
        placeholder: 'enter any notes about the assessment here',
        rows: 5,
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'I hereby declare that the assessment is true and correct to the best of my knowledge.',
        required: true,
        pattern: 'true',
        defaultValue: false,
      },
    },
  ];

  EmailValidator(control: FormControl | any): ValidationErrors | null {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      control.value
    )
      ? null
      : { email: true };
  }

  EmailValidatorMessage(err: any, field: FormlyFieldConfig) {
    return `"${field?.formControl?.value}" is not a valid email address`;
  }

  LstSkillcode(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.TableSkills.filter((Skillcode: any) => Skillcode.level.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
