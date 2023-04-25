import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColumnIdEmitterService {
  constructor() {}

  columnId = new Subject<string>();

  emitColumnId(id: string) {
    this.columnId.next(id);
  }
}
