import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { ToastService } from '@app/services/toast/toaster-service';

@Injectable()
export class RoleGuard {
  userProfile: any;

  constructor(private authService: AuthService, private toastService: ToastService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.canActivateProtectedRoutes$.pipe(
      map((canActivateProtectedRoutes: boolean) => {
        if (canActivateProtectedRoutes) {
          // Check role-based access if route contains data.role
          if (route.data?.role) {
            const requiredRoles = Array.isArray(route.data.role) ? route.data.role : [route.data.role];

            const hasRequiredRole = requiredRoles.some((role: string) => this.authService.hasRole(role));

            if (hasRequiredRole) {
              const currentMode = this.authService.getCurrentAuthMode();
              const provider = this.authService.getCurrentProvider();
              console.log(
                `Role Guard: Access granted via ${provider} (${currentMode} mode) for roles: ${requiredRoles.join(
                  ', '
                )}`
              );
              return true;
            } else {
              this.showToaster('Access denied', `You do not have the required role(s): ${requiredRoles.join(', ')}`);
              return false;
            }
          }

          // Check permission-based access if route contains data.permissions
          if (route.data?.permissions) {
            const requiredPermissions = Array.isArray(route.data.permissions)
              ? route.data.permissions
              : [route.data.permissions];

            const hasRequiredPermissions = requiredPermissions.every((permission: string) =>
              this.authService.hasPermission(permission)
            );

            if (hasRequiredPermissions) {
              const currentMode = this.authService.getCurrentAuthMode();
              const provider = this.authService.getCurrentProvider();
              console.log(
                `Role Guard: Access granted via ${provider} (${currentMode} mode) for permissions: ${requiredPermissions.join(
                  ', '
                )}`
              );
              return true;
            } else {
              this.showToaster(
                'Access denied',
                `You do not have the required permission(s): ${requiredPermissions.join(', ')}`
              );
              return false;
            }
          }

          // If no specific role or permission is required, allow access for authenticated users
          return true;
        }

        // User is not authenticated
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
