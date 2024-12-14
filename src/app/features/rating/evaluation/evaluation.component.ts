import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormfieldSkillRatingService } from '@app/services/form/formfield-skillrating.service';
import { environment } from '@env/environment';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WarningDialogComponent } from '@app/@shared/components/warning-dialog/warning-dialog-component';
import { Evaluation } from '@shared/models/evaluation';
import { Logger } from '@core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

const log = new Logger('EvaluationComponent');
@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FormlyModule, JsonPipe, FormsModule, NgbTooltipModule],
})
export class EvaluationComponent implements OnInit {
  // ngx formly
  form = new FormGroup({});
  //skillLevel = '4.0';
  evaluation: Evaluation;
  evaluations: Evaluation[];
  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>(); // Emit changes to the parent

  active = 1;

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  // show: boolean = false;
  debug: boolean = false;
  level: any;

  jsonText: string = '';

  @Output() ValidEvaluationEvent = new EventEmitter<boolean>();

  constructor(private serviceFormFields: FormfieldSkillRatingService, private modalService: NgbModal) {}

  ngOnInit() {

    log.error(this.model);

    var skillLevel = this.model['level'];

    var instructions: string;

    switch (skillLevel) {
      case '2.0': { // If skillLevel is '2.0', set instructions to the corresponding environment variable
        instructions = environment.evaluationInstruction.level20;
        break;
      }
      case '2.5': { // If skillLevel is '2.5', set instructions to the corresponding environment variable
        instructions = environment.evaluationInstruction.level25;
        break;
      }
      case '3.0': { // If skillLevel is '3.0', set instructions to the corresponding environment variable
        instructions = environment.evaluationInstruction.level30;
        break;
      }
      case '3.5': { // If skillLevel is '3.5', set instructions to the corresponding environment variable
        instructions = environment.evaluationInstruction.level35;
        break;
      }
      case '4.0': { // If skillLevel is '4.0', set instructions to the corresponding environment variable
        instructions = environment.evaluationInstruction.level40;
        break;
      }
      case '4.5': { // If skillLevel is '4.5', set instructions to the corresponding environment variable
        instructions = environment.evaluationInstruction.level45;
        break;
      }
      case '5.0': { // If skillLevel is '5.0', set instructions to the corresponding environment variable
        instructions = environment.evaluationInstruction.level50;
        break;
      }
      default: { // If skillLevel doesn't match any case, set instructions to 'undefined'
        instructions = 'undefined';
        break;
      }
    }
    this.fields = this.serviceFormFields.getFormFields(skillLevel);
  }

  submit() {
    log.error(this.model);
    if (this.form.invalid) {
      this.open();
    } else {
      this.ValidEvaluationEvent.emit(this.form.valid);
    }
  }

  open() {
    const modalRef = this.modalService.open(WarningDialogComponent);
  }


  onFileUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string);
        this.model = json;
        this.modelChange.emit(this.model); // Emit the updated model to the parent
      } catch (e) {
        console.error('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  }

  // importFromTextBox() {
  //   try {
  //     const json = JSON.parse(this.jsonText);
  //     this.model = json;
  //     this.modelChange.emit(this.model); // Emit the updated model to the parent
  //   } catch (e) {
  //     console.error('Invalid JSON input');
  //   }
  // }

}
