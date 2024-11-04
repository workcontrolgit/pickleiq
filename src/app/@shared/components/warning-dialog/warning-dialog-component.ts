import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './warning-dialog-component.html',
  standalone: true,
})
export class WarningDialogComponent {
  @Input() title: string = 'Oopsy!';
  @Input() messsage: string = 'Please fill in all required form fields.';

  constructor(public activeModal: NgbActiveModal) {}
}
