import { Component, Input } from '@angular/core';
import { signUp } from 'src/app/shared/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  @Input('isSigned') signed: boolean = false;
  @Input('isLogged') logged: boolean = false;
  signUpUsers: signUp[] = [];

  onSignUp(signUpUsers: signUp[]): void {
    this.signUpUsers = signUpUsers;
  }
}
