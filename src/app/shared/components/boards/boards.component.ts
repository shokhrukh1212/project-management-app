import { Component, OnInit, OnDestroy } from '@angular/core';
import { createdBoard } from '../../models/board.model';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CreateBoardService } from '../../services/create-board.service';
import { BoardsService } from '../../services/boards.service';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit, OnDestroy {
  loadingBoards: boolean = false;
  boards: createdBoard[] = [];
  private subscription!: Subscription;
  TOKEN = localStorage.getItem('token: ');

  constructor(
    private createBoardService: CreateBoardService,
    private boardsService: BoardsService,
    private jwtService: JwtHelperService,
    private router: Router
  ) {
    this.subscription = this.createBoardService.boardData$.subscribe((data) => {
      this.boards.push(data);
    });
  }

  private unsubscriber: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    // if token is expired, navigate to welcome page
    if (this.jwtService.isTokenExpired(this.TOKEN)) {
      this.router.navigateByUrl('/welcome');
      console.log('token is expired');
    } else {
      this.loadingBoards = true;
      history.pushState(null, '');
      fromEvent(window, 'popstate')
        .pipe(takeUntil(this.unsubscriber))
        .subscribe((_) => {
          history.pushState(null, '');
        });

      this.boardsService
        .getAllBoards()
        .pipe(
          finalize(() => {
            this.loadingBoards = false;
          })
        )
        .subscribe({
          next: (data) => {
            this.boards = data;
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  // Getting all boards info
}
