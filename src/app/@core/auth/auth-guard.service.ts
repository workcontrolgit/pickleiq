import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

import { ToastService } from '@app/services/toast/toaster-service';

@Injectable()
export class AuthGuard {
  profile: any;
  constructor(private toastService: ToastService, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.canActivateProtectedRoutes$.pipe(
      tap((canActivateProtectedRoutes: boolean) => {
        if (canActivateProtectedRoutes) {
          return true;
        }
        this.showToaster('Access denied', 'Please login to continue access');
        return false;
      })
    );
  }

  // ngbmodal service
  showToaster(title: string, message: string) {
    this.toastService.show({ textOrTpl: message, classname: 'bg-danger text-light', delay: 15000, header: title });
  }
}
