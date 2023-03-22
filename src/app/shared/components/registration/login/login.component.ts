import { Component, Input, OnInit } from '@angular/core';
import { login, signUp } from 'src/app/shared/registration';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() isLogged: boolean = false;
  @Input('signUpUsers') signUpUsers: signUp[] = [];

  loginObj: login = {
    userName: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData !== null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }

  onLogin() {
    const isUserExist = this.signUpUsers.find(
      (user) =>
        user.userName === this.loginObj.userName &&
        user.password === this.loginObj.password
    );

    if (isUserExist !== undefined) {
      alert('User logged successfully');
    } else {
      alert('Wrong credentials...');
    }
  }
}
