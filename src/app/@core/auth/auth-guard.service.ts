import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { AuthService } from './auth.service';

import { ToastService } from '@app/services/toast/toaster-service';

@Injectable()
export class AuthGuard {
  profile: any;
  constructor(private toastService: ToastService, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.canActivateProtectedRoutes$.pipe(
      map((canActivateProtectedRoutes: boolean) => {
        if (canActivateProtectedRoutes) {
          // Check if the route requires specific permissions
          if (route.data?.permissions) {
            const requiredPermissions = Array.isArray(route.data.permissions)
              ? route.data.permissions
              : [route.data.permissions];

            const hasRequiredPermissions = requiredPermissions.every((permission: string) =>
              this.authService.hasPermission(permission)
            );

            if (!hasRequiredPermissions) {
              this.showToaster('Access denied', `Missing required permissions: ${requiredPermissions.join(', ')}`);
              return false;
            }
          }

          // Log current auth status for debugging
          const currentMode = this.authService.getCurrentAuthMode();
          const provider = this.authService.getCurrentProvider();
          console.log(`Auth Guard: Access granted via ${provider} (${currentMode} mode)`);

          return true;
        }

        // Show different messages based on auth mode availability
        const authMessage = this.getAuthMessage();
        this.showToaster('Access denied', authMessage);
        return false;
      })
    );
  }

  private getAuthMessage(): string {
    if (this.authService.isAnonymousAuthEnabled() && this.authService.isOidcEnabled()) {
      return 'Please login with your preferred authentication method to continue';
    } else if (this.authService.isAnonymousAuthEnabled()) {
      return 'Please login as guest or with authentication to continue';
    } else if (this.authService.isOidcEnabled()) {
      return 'Please login to continue access';
    } else {
      return 'Authentication is not configured';
    }
  }

  // ngbmodal service
  showToaster(title: string, message: string) {
    this.toastService.show({ textOrTpl: message, classname: 'bg-danger text-light', delay: 15000, header: title });
  }
}
