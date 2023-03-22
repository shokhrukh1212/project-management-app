import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { signUp } from 'src/app/shared/registration';
import { RegisterService } from 'src/app/shared/services/register.service';
import { signedUser, signUpUser } from 'src/app/shared/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private registerService: RegisterService
  ) {}

  @Input() isSigned: boolean = false;
  @Output() signUpEmitter = new EventEmitter<signUp[]>();
  registerForm!: FormGroup;
  submitted: boolean = false;

  ngOnInit(): void {
    // validations
    this.registerForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^[A-Za-z0-9]*$/),
        ],
      ],
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    const user: signUpUser = {
      name: this.signupObj.userName,
      login: this.signupObj.login,
      password: this.signupObj.password,
    };
    this.registerService.addUser(user).subscribe((data: signedUser) => {
      console.log('data => ', data);
    });
  }

  signUpUsers: signUp[] = [];
  signupObj: signUp = {
    userName: '',
    login: '',
    password: '',
  };

  onSignUp(): void {
    this.signUpUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    this.signUpEmitter.emit(this.signUpUsers);
    console.log(this.signUpUsers);

    this.signupObj = {
      userName: '',
      login: '',
      password: '',
    };
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert('Success');
  }

  // Starting with API
}
