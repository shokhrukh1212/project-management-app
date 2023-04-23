import { Component, OnInit } from '@angular/core';
import { BoardColumn } from 'src/app/shared/models/board.model';
import { CreateTask, CreatedTask } from 'src/app/shared/models/task.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ModalService } from 'src/app/shared/services/modal.service';
import { TaskInfoEmitService } from 'src/app/shared/services/task-info-emit.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private taskService: TaskInfoEmitService
  ) {}
  connectedTo: string[] = [];
  tasks: CreatedTask[] = [];
  taskInfo!: { title: string; description: string };
  userId: number = 0;
  taskOrder: number = 0;

  ngOnInit(): void {
    this.taskService.taskInfo.subscribe((data) => {
      this.taskInfo = { title: data.title, description: data.description };
      // this.tasks.push({
      //   title: data.title,
      //   order: this.taskOrder++,
      //   description: data.description,
      //   userId: this.userId++,
      //   users: ["Shokhrukh"]
      // })
    });
  }

  drop(event: CdkDragDrop<BoardColumn[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
}
