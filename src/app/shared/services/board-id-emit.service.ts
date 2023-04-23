import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardIdEmitService {
  constructor() {}

  boardId = new Subject<string>();

  emitBoardId(id: string) {
    this.boardId.next(id);
  }
}
