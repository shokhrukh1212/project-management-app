import { Component, Input, OnInit } from '@angular/core';
import { loginUser } from 'src/app/shared/models/user.model';
import { RegisterService } from 'src/app/shared/services/register.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { HeaderSwitcherService } from 'src/app/shared/services/header-switcher.service';
import { ModalService } from '../../../services/modal.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() isLogged: boolean = false;
  registerForm!: FormGroup;
  submitted: boolean = false;
  loginButton!: HTMLElement;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private headerService: HeaderSwitcherService,
    private modalService: ModalService
  ) {
    this.loginButton = document.getElementById('loginButton') as HTMLElement;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.registerService
      .signIn(this.registerForm.value)
      .pipe(
        finalize(() => {
          this.loginButton.innerText = 'Loading...';
        })
      )
      .subscribe({
        next: (result) => {
          console.log(result);

          const { token, userId } = result;
          localStorage.setItem('token: ', token);
          localStorage.setItem('id: ', userId);
          console.log(result);
          this.router.navigate(['/boards']);
          this.headerService.switchHeaderToBoard();
        },
        error: (error) => {
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
