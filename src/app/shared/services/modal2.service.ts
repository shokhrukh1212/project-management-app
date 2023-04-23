import { Injectable } from '@angular/core';
import { ModalComponent } from 'src/app/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class Modal2Service {
  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalService.open(ModalComponent);
  }
}
