import { Component, OnInit, OnDestroy } from '@angular/core';
import { Board } from './boards';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit, OnDestroy {
  boardSwitcher: boolean = true;
  boards: Board[] = [
    { id: 0, name: 'board name 1', description: 'board 1 description' },
    { id: 1, name: 'board name 2', description: 'board 2 description' },
  ];

  constructor(private location: Location) {}

  private unsubscriber: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    history.pushState(null, '');
    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
      });
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
