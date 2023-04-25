import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsernameEmitService } from 'src/app/shared/services/username-emit.service';
import { CreateBoardService } from 'src/app/shared/services/create-board.service';
import { BoardsService } from 'src/app/shared/services/boards.service';
import { createNewBoard } from 'src/app/shared/models/board.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-boards-header',
  templateUrl: './boards-header.component.html',
  styleUrls: ['./boards-header.component.css'],
})
export class BoardsHeaderComponent implements OnInit {
  username: string = '';
  boardTitle: string = '';
  boardInfo: createNewBoard = { title: '', owner: '', users: [] };
  isCreatedBoard: boolean = false;

  constructor(
    private modalService: ModalService,
    private router: Router,
    public translate: TranslateService,
    public usernameService: UsernameEmitService,
    private createBoardService: CreateBoardService,
    private boardsService: BoardsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usernameService.usernameSubject.subscribe((data: string) => {
      this.username = data;
      console.log(this.username);
      this.cdr.detectChanges(); // trigger change detection
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.boardTitle = '';
  }

  onLogOut() {
    this.router.navigateByUrl('/welcome');
    localStorage.removeItem('token: ');
  }

  // when user clicks submit after entering a board title
  public onCreateBoard(boardTitle: string) {
    this.isCreatedBoard = true;
    this.boardInfo = {
      title: boardTitle,
      owner: 'shokhrukh',
      users: ['shokhrukh'],
    };

    // when a user enters a title of board in modal, we get it and immediately
    // post it to URL

    // This section is not working totally, needs to be checked
    this.boardsService
      .createBoard(this.boardInfo)
      .pipe(
        finalize(() => {
          this.isCreatedBoard = false;
          this.boardTitle = '';
          this.closeModal('create-board');
        })
      )
      .subscribe((data) => {
        this.createBoardService.createBoard(data);
        console.log(data);
      });
  }
}
