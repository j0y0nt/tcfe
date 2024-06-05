import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class UserToken {}

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private router: Router) { }

  canActivate(currentUser: UserToken, userId: string): boolean {
    if(localStorage.getItem("currentUser") == null) {
      this.router.navigate(['/login']);
    }
    return true;
  }
  canMatch(currentUser: UserToken): boolean {
    return true;
  }
}
