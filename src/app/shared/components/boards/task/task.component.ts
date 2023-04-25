import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CreateTask, CreatedTask } from 'src/app/shared/models/task.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ModalService } from 'src/app/shared/services/modal.service';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit, OnDestroy {
  constructor(
    private modalService: ModalService,
    private tasksService: TasksService
  ) {}
  connectedTo: string[] = [];
  tasks: CreatedTask[] = [];
  taskInfo!: CreateTask;
  userId: number = 0;
  taskOrder: number = 0;
  taskId: string = '';

  // storing values related to task
  taskTitle: string = '';
  taskdescription: string = '';
  @Input() columnId!: string;
  ngOnInit(): void {
    this.tasksService
      .getAllTasks(
        `/boards/${localStorage.getItem('boardId')}/columns/${
          this.columnId
        }/tasks`
      )
      .subscribe((data) => {
        this.tasks = data;
      });
  }

  // drag and drop
  drop(event: CdkDragDrop<CreatedTask[]>) {
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
  openModalToCreateTask(id: string) {
    this.modalService.open(id);
  }

  openModalToDeleteTask(id: string, taskId: string) {
    this.taskId = taskId;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.taskTitle = '';
    this.taskdescription = '';
  }

  // creating a task
  onCreateTask() {
    this.taskInfo = {
      title: this.taskTitle,
      order: this.taskOrder++,
      description: this.taskdescription,
      userId: this.userId++,
      users: ['Shokhrukh'],
    };

    this.tasksService
      .createTask(
        this.taskInfo,
        `/boards/${localStorage.getItem('boardId')}/columns/${
          this.columnId
        }/tasks`
      )
      .subscribe((data) => {
        this.tasks.push(data);
        this.closeModal('add-task');
      });
  }

  // deleting a task
  onDeleteTask() {
    this.tasksService
      .deleteTask(
        `/boards/${localStorage.getItem('boardId')}/columns/${
          this.columnId
        }/tasks/${this.taskId}`
      )
      .subscribe((data) => {
        this.tasks = this.tasks.filter((task) => task._id !== data._id);
        this.closeModal('task-delete');
      });
  }

  ngOnDestroy(): void {}
}
