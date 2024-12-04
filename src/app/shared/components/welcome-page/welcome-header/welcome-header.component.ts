import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome-header',
  templateUrl: './welcome-header.component.html',
  styleUrls: ['./welcome-header.component.css'],
})
export class WelcomeHeaderComponent {
  constructor(private router: Router, public translate: TranslateService) {}

  onLogin(): void {
    this.router.navigateByUrl('/auth/signin');
  }

  onSignUp(): void {
    this.router.navigateByUrl('/auth/signup');
  }
}
