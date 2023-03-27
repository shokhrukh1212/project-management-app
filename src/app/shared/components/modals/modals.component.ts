import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css'],
})
export class ModalsComponent implements OnInit {
  @Input() id: string = '';
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (el: Event) => {
      if (el.target !== null) {
        if ((<HTMLTextAreaElement>el.target).className === 'custom-modal') {
          this.close();
        }
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
    this.close();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('custom-modal-open');
    console.log('clicked');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('custom-modal-open');
  }
}
