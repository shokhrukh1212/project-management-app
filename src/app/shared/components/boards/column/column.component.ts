import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ModalService } from 'src/app/shared/services/modal.service';
import { BoardNameEmitService } from 'src/app/shared/services/board-name-emit.service';
import { ColumnsService } from 'src/app/shared/services/columns.service';
import { BoardIdEmitService } from 'src/app/shared/services/board-id-emit.service';
import { CreatedColumn } from 'src/app/shared/models/column.model';
import { finalize } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TaskInfoEmitService } from 'src/app/shared/services/task-info-emit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  public title: string = '';
  connectedTo: string[] = [];

  // storing columns array
  columns: CreatedColumn[] = [];
  columnTitle: string = '';
  columnId: string = '';
  order: number = 0;
  onCreationColumn: boolean = false;
  onDeletationTask: boolean = false;
  currentId: string = '';
  TOKEN = localStorage.getItem('token: ');

  // storing values related to task
  taskTitle: string = '';
  taskdescription: string = '';

  constructor(
    private modalService: ModalService,
    private boardNameEmit: BoardNameEmitService,
    private columnsService: ColumnsService,
    private boardIdEmitService: BoardIdEmitService,
    private jwtService: JwtHelperService,
    private router: Router,
    private taskInfoEmitService: TaskInfoEmitService
  ) {}

  ngOnInit(): void {
    if (this.jwtService.isTokenExpired(this.TOKEN)) {
      this.router.navigateByUrl('/welcome');
    } else {
      this.boardIdEmitService.boardId.subscribe((data) => {
        this.currentId = data;
      });

      this.columnsService.getColumns().subscribe((data) => {
        this.columns = data;
      });

      this.boardNameEmit.boardName.subscribe((data) => {
        this.title = data;
      });
    }
  }

  onChange(newValue: any) {
    this.columnTitle += newValue.data;
  }

  onCreateColumn() {
    this.onCreationColumn = true;
    this.columnsService
      .createColumn({ title: this.columnTitle, order: this.order++ })
      .pipe(
        finalize(() => {
          this.onCreationColumn = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.columns.push(data);
          this.closeModal('add-column');
          this.columnTitle = '';
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  // drop(event: CdkDragDrop<BoardColumn[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }

  openModal(id: string) {
    this.modalService.open(id);
  }

  openModalToDeleteColumn(id: string, columnId: string) {
    this.modalService.open(id);
    this.columnId = columnId;
  }

  onDeleteColumn() {
    this.onDeletationTask = true;
    this.columnsService
      .deleteColumn(this.columnId)
      .pipe(
        finalize(() => {
          this.onDeletationTask = false;
        })
      )
      .subscribe((data) => {
        this.columns = this.columns.filter((column) => column._id !== data._id);
        this.closeModal('column-delete');
      });
  }

  openModalToCreateTask(id: string, columnId: string) {
    this.modalService.open(id);
    this.columnId = columnId;
  }

  onCreateTask() {
    const taskInfo = {
      title: this.taskTitle,
      description: this.taskdescription,
    };
    this.taskInfoEmitService.emitTaskInfo(taskInfo);
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.modalService.remove(id);
    this.columnTitle = '';
  }
}
