import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Board, BoardColumn } from 'src/app/shared/models/board.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {}
