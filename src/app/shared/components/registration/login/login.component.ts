import { Component, Input, forwardRef } from '@angular/core';
import { RegisterService } from 'src/app/shared/services/register.service';
import { FormGroup, FormControl } from '@angular/forms';

import { Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { ModalService } from '../../../services/modal.service';
import { UsernameEmitService } from 'src/app/shared/services/username-emit.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input() isLogged: boolean = false;
  isLoading: boolean = false;
  submitted: boolean = false;
  loginButton!: HTMLElement;
  // getting login to show when a user login
  login: string = '';

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private modalService: ModalService,
    public userEdit: UsernameEmitService
  ) {}

  public registerForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit() {
    this.isLoading = true;
    this.registerService
      .signIn(this.registerForm.value)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (result) => {
          const { token, userId } = result;
          localStorage.setItem('token: ', token);
          localStorage.setItem('id: ', userId);
          this.router.navigate(['/boards']);

          this.login = this.registerForm.get('login')?.value;
          // emitting this.login by usernameEdit service
          this.userEdit.emitUsername(this.login);
        },
        error: () => {
          this.modalService.open('login-modal');
        },
      });
  }

  onSignup() {
    this.router.navigateByUrl('auth/signup');
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.modalService.remove(id);
  }
}
