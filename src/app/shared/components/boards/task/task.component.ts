import { Component, Input } from '@angular/core';
import { BoardColumn } from 'src/app/shared/models/board.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  constructor(private modalService: ModalService) {}
  connectedTo: string[] = [];

  drop(event: CdkDragDrop<BoardColumn[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
}
