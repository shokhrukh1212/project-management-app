import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderSwitcherService {
  private headerSwitcher = new BehaviorSubject<string>(
    sessionStorage.getItem('headerSwitcher') || 'welcome'
  );
  headerSwitcher$ = this.headerSwitcher.asObservable();

  switchHeaderToBoard() {
    if (this.headerSwitcher.value === 'welcome') {
      this.headerSwitcher.next('board');
      sessionStorage.setItem('headerSwitcher', 'board');
    } else {
      this.headerSwitcher.next('welcome');
      sessionStorage.setItem('headerSwitcher', 'welcome');
    }
  }
}
