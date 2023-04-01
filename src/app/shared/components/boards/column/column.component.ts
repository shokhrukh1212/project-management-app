import { Component, Input } from '@angular/core';
import { Board, BoardColumn } from 'src/app/shared/models/board.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ModalService } from 'src/app/shared/services/modal.service';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent {
  @Input('boards') boardsParent: Board[] = [];
  connectedTo: string[] = [];
  boards: {
    id: string;
    title: string;
    description: string;
    boardInfo: BoardColumn[];
  }[] = [];

  constructor(private modalService: ModalService) {
    this.boards = [
      {
        id: 'board-1',
        title: 'Board title 1',
        description: 'Board 1 description',
        boardInfo: [
          { name: 'board 1', description: 'description 1' },
          { name: 'board 2', description: 'description 2' },
          { name: 'board 3', description: 'description 3' },
          { name: 'board 4', description: 'description 4' },
        ],
      },
      {
        id: 'board-2',
        title: 'Board title 2',
        description: 'Board 2 description',
        boardInfo: [],
      },
      {
        id: 'board-3',
        title: 'Board title 3',
        description: 'Board 3 description',
        boardInfo: [
          { name: 'board 1', description: 'description 1' },
          { name: 'board 2', description: 'description 2' },
        ],
      },
      {
        id: 'board-4',
        title: 'Board title 4',
        description: 'Board 4 description',
        boardInfo: [
          { name: 'board 1', description: 'description 1' },
          { name: 'board 2', description: 'description 2' },
          { name: 'board 3', description: 'description 3' },
        ],
      },
    ];

    for (let board of this.boards) {
      this.connectedTo.push(board.id);
    }
  }

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

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
