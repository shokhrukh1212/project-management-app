import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private jwtHelper: JwtHelperService) {}
  canActivate(): boolean {
    if (localStorage.getItem('token: ')) {
      return true;
    }
    this.router.navigateByUrl('/welcome');
    return false;
  }
}
