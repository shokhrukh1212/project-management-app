import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardNameEmitService {
  constructor() {}

  public boardName = new Subject<string>();

  public emitBoardName(title: string) {
    this.boardName.next(title);
  }

  public emitBoardId(id: string) {
    this.boardName.next(id);
  }
}
