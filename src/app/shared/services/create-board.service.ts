import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { createdBoard } from '../models/board.model';
@Injectable({
  providedIn: 'root',
})
export class CreateBoardService {
  constructor() {}

  public boardSubject = new Subject<createdBoard>();
  public boardData$ = this.boardSubject.asObservable();

  public createBoard(boardInfo: createdBoard) {
    this.boardSubject.next(boardInfo);
  }
}
