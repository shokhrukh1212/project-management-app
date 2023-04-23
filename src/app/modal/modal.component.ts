import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  label: string = '';
  placeholder: string = '';
  value: any;
  autoFilled: boolean = false;
  constructor(private dialogRef: MatDialogRef<ModalComponent>) {}

  submit() {
    this.dialogRef.close(this.value);
  }

  close() {
    this.dialogRef.close();
  }
}
