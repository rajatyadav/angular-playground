import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoginStatus(state.url);
  }

  checkLoginStatus(url: string) {
    if(this.authService.isLoggedin) {
      this.router.navigate(['/login']);
      return true
    } 
    this.authService.redirectUrl = url; // patient
    this.router.navigate(['/login']);
    return false;
  }
  
}
