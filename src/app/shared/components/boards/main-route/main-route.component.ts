import { Component, Input } from '@angular/core';
import { Board } from '../boards';
import { Router } from '@angular/router';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-main-route',
  templateUrl: './main-route.component.html',
  styleUrls: ['./main-route.component.css'],
})
export class MainRouteComponent {
  @Input('boards') boards: Board[] = [];
  @Input('boardSwitcher') boardSwitcher: boolean = true;

  constructor(private router: Router, private modalService: ModalService) {}

  onBoard(id: number) {
    this.router.navigate(['/board'], { queryParams: { id: id } });
    this.boardSwitcher = !this.boardSwitcher;
  }

  openModal(id: string, board_id: number) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
