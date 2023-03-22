import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-header',
  templateUrl: './welcome-header.component.html',
  styleUrls: ['./welcome-header.component.css'],
})
export class WelcomeHeaderComponent {
  isLogged: boolean = false;
  isSigned: boolean = false;

  @Output() loginEmitter = new EventEmitter();
  @Output() signUpEmitter = new EventEmitter();

  onLogin(): void {
    this.isSigned = false;
    this.isLogged = true;
    this.loginEmitter.emit(this.isLogged);
    this.signUpEmitter.emit(this.isSigned);
  }

  onSignUp(): void {
    this.isLogged = false;
    this.isSigned = true;
    this.signUpEmitter.emit(this.isSigned);
    this.loginEmitter.emit(this.isLogged);
  }
}
