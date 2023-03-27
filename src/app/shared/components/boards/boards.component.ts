import { Component, OnInit, OnDestroy } from '@angular/core';
import { Board } from '../../models/board.model';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';
import { BoardsService } from '../../services/boards.service';
import { BoardResponse } from '../../models/boards.model';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit, OnDestroy {
  boardSwitcher: boolean = true;
  boards: Board[] = [
    { _id: 0, title: 'board title 1' },
    { _id: 1, title: 'board title 2' },
  ];

  constructor(
    private location: Location,
    private boardService: BoardsService
  ) {}

  private unsubscriber: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    history.pushState(null, '');
    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  // Getting all boards info
  getBoards() {
    this.boardService.getAllBoards().subscribe((result: BoardResponse[]) => {
      console.log(result);
    });
  }
}
