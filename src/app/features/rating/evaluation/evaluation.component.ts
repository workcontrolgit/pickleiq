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

const log = new Logger('EvaluationComponent');
@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, FormlyModule, JsonPipe, FormsModule],
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
      case '2.0': {
        instructions = environment.evaluationInstruction.level20;
        break;
      }
      case '2.5': {
        instructions = environment.evaluationInstruction.level25;
        break;
      }
      case '3.0': {
        instructions = environment.evaluationInstruction.level30;
        break;
      }
      case '3.5': {
        instructions = environment.evaluationInstruction.level35;
        break;
      }
      case '4.0': {
        instructions = environment.evaluationInstruction.level40;
        break;
      }
      case '4.5': {
        instructions = environment.evaluationInstruction.level45;
        break;
      }
      case '5.0': {
        instructions = environment.evaluationInstruction.level50;
        break;
      }
      default: {
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

  exportToJSON() {
    const jsonData = JSON.stringify(this.model, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pickle_skill_evaluation.json';
    a.click();
    URL.revokeObjectURL(url);
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

  importFromTextBox() {
    try {
      const json = JSON.parse(this.jsonText);
      this.model = json;
      this.modelChange.emit(this.model); // Emit the updated model to the parent
    } catch (e) {
      console.error('Invalid JSON input');
    }
  }

}
