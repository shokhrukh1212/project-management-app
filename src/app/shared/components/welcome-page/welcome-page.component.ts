import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent {
  isLogged: boolean = false;
  isSigned: boolean = false;
  isWelcomeMain: boolean = true;

  loginClicked(login: boolean) {
    this.isLogged = login;
    this.isWelcomeMain = false;
  }

  signUpClicked(signUp: boolean) {
    this.isSigned = signUp;
    this.isWelcomeMain = false;
  }
}
