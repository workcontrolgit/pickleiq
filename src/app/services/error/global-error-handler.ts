import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { ErrorDialogService } from '@shared/errors/error-dialog.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorDialogService: ErrorDialogService, private zone: NgZone) {}

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    console.log('Global error handler received:', error);

    // Handle undefined or null errors
    if (!error) {
      console.warn('Global error handler received undefined/null error');
      return;
    }

    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }

    // Ensure we have a valid error object before processing
    if (!error) {
      console.warn('Error object is undefined after processing');
      return;
    }

    this.zone.run(() => this.errorDialogService.openDialog(error?.message || 'Undefined client error', error?.status));

    console.error('Error from global error handler', error?.message || 'No error message available');
  }
}
