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
  order: number = 0;
  onCreationColumn: boolean = false;
  currentId: string = '';
  TOKEN = localStorage.getItem('token: ');

  constructor(
    private modalService: ModalService,
    private boardNameEmit: BoardNameEmitService,
    private columnsService: ColumnsService,
    private boardIdEmitService: BoardIdEmitService,
    private jwtService: JwtHelperService,
    private router: Router
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
    this.columnTitle = '';
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.modalService.remove(id);
    this.columnTitle = '';
  }
}
