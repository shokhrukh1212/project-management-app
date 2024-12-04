import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskInfoEmitService {
  constructor() {}

  taskInfo = new Subject<{ title: string; description: string }>();

  emitTaskInfo(data: { title: string; description: string }) {
    this.taskInfo.next(data);
  }
}
