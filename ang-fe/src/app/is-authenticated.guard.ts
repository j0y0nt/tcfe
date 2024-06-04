import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { PermissionService, UserToken } from './permission.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).canActivate(inject(UserToken), route.params['id']);;
};
