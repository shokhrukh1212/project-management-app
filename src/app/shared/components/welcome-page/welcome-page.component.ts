import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent {
  isLogged: boolean = false;
  isSigned: boolean = false;
  isVisible: boolean = true;

  loginClicked(login: boolean) {
    this.isLogged = login;
  }

  signUpClicked(signUp: boolean) {
    this.isSigned = signUp;
  }
}
