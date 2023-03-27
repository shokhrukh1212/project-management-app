import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-boards-header',
  templateUrl: './boards-header.component.html',
  styleUrls: ['./boards-header.component.css'],
})
export class BoardsHeaderComponent {
  constructor(
    private modalService: ModalService,
    private router: Router,
    public translate: TranslateService
  ) {}
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onLogOut() {
    this.router.navigateByUrl('/welcome');
  }
}
