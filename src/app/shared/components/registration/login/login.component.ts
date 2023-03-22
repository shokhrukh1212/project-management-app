import { Component, Input, OnInit } from '@angular/core';
import { loginUser } from 'src/app/shared/user';
import { RegisterService } from 'src/app/shared/services/register.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() isLogged: boolean = false;
  registerForm!: FormGroup;
  submitted: boolean = false;

  loginObj: loginUser = {
    login: '',
    password: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // getting login and password info
  get login() {
    return this.registerForm.get('login');
  }
  get password() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    // this.registerService.AddCors(options => { options.AddPolicy("AnyOrigin", builder => { builder .AllowAnyOrigin() .AllowAnyMethod() .AllowAnyHeader() .AllowCredentials(); }); });

    this.registerService.signIn(this.registerForm.value).subscribe(
      (data: { token: string }) => {
        console.log(data.token);
      },
      (error) => {
        console.log(error);
      }
    );

    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.registerForm.reset();
  }
}
