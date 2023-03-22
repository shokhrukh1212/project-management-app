import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modals/modal.service';
@Component({
  selector: 'app-boards-header',
  templateUrl: './boards-header.component.html',
  styleUrls: ['./boards-header.component.css'],
})
export class BoardsHeaderComponent implements OnInit {
  bodyText: string = '';

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
