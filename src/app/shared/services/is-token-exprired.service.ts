import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsTokenExpriredService {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}
  TOKEN = localStorage.getItem('token: ');

  isTokenExpired() {
    if (this.TOKEN && this.jwtHelper.isTokenExpired(this.TOKEN)) {
      this.router.navigateByUrl('/welcome');
    }
  }
}
