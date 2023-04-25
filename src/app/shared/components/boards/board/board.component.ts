import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { createdBoard } from 'src/app/shared/models/board.model';
import { Router } from '@angular/router';
import { ModalService } from '../../../services/modal.service';
import { BoardNameEmitService } from 'src/app/shared/services/board-name-emit.service';
import { BoardsService } from 'src/app/shared/services/boards.service';
import { BoardIdEmitService } from 'src/app/shared/services/board-id-emit.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit, OnDestroy {
  @Input('boards') boards: createdBoard[] = [];
  @Input('boardSwitcher') boardSwitcher: boolean = true;
  board_ID: string = '';
  isBoardDeleted: boolean = false;

  constructor(
    private router: Router,
    private modalService: ModalService,
    private boardNameEmit: BoardNameEmitService,
    private boardsService: BoardsService,
    private boardIdEmitService: BoardIdEmitService
  ) {}

  ngOnInit(): void {}

  onBoard(id: string, title: string) {
    this.router.navigate([`/boards`, id]);
    this.boardSwitcher = !this.boardSwitcher;

    // passing board title and id
    this.boardNameEmit.emitBoardName(title);
    localStorage.setItem('boardId', id);
    this.boardIdEmitService.emitBoardId(id);
  }

  openModal(id: string, board_id: string) {
    this.modalService.open(id);
    this.board_ID = board_id;
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  // Delete a board
  onDeleteBoard() {
    if (this.board_ID) {
      this.isBoardDeleted = true;
      this.boardsService
        .deleteBoardById(this.board_ID)
        .pipe(
          finalize(() => {
            this.isBoardDeleted = false;
            this.closeModal('main-route');
          })
        )
        .subscribe((data) => {
          this.boards = this.boards.filter((board) => board._id !== data._id);
        });
    }
  }

  ngOnDestroy(): void {}
}
