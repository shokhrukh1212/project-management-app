import { Injectable, OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ModalService implements OnInit {
  private modals: any[] = [];

  ngOnInit(): void {}

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(modal: any) {
    // remove modal
    this.modals = this.modals.filter((m) => m !== modal);
  }

  open(id: string) {
    // open modal specified by id
    const modal = this.modals.find((x) => x.id === id);
    modal.open();
  }

  close(id: string) {
    // close modal specified by id
    const modal = this.modals.find((x) => x.id === id);
    modal.close();
  }
}
