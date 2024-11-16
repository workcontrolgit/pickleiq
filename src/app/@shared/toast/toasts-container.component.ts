import { Component, inject, TemplateRef } from '@angular/core';

import { ToastService } from '../../services/toast/toaster-service';
import { Toast } from '../../services/toast/toaster-service';
import { NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-toasts-container',
	standalone: true,
	imports: [NgbToastModule, NgTemplateOutlet],
  templateUrl: './toasts-container.html',
	host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastsContainer {
	toastService = inject(ToastService);
  show = true;

  isTemplate(toast: Toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
