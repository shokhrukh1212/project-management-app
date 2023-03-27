import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { HeaderSwitcherService } from '../../services/header-switcher.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerSwitcher!: string;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private headerService: HeaderSwitcherService,
    public translate: TranslateService
  ) {
    this.headerService.headerSwitcher$.subscribe((value) => {
      this.headerSwitcher = value;
    });
  }

  ngOnInit() {}

  onLogin(): void {
    this.router.navigateByUrl('/auth/signin');
  }

  onSignUp(): void {
    this.router.navigateByUrl('/auth/signup');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onLogOut() {
    this.router.navigateByUrl('/welcome');
    this.headerService.switchHeaderToBoard();
  }
}
