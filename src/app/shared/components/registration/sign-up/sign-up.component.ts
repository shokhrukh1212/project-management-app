import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private registerService: RegisterService
  ) {}

  @Input() isSigned: boolean = false;
  // @Output() signUpEmitter = new EventEmitter<signUp[]>();
  registerForm!: FormGroup;
  submitted: boolean = false;

  ngOnInit(): void {
    // validations
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  signUpUsers: signUpUser[] = [];
  signupObj: signUpUser = {
    name: '',
    login: '',
    password: '',
  };

  onSubmit(): void {
    this.registerService.addUser(this.registerForm.value).subscribe((data) => {
      console.log('data => ', data);
    });

    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.registerForm.reset();
  }
}
