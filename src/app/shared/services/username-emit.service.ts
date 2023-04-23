import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameEmitService {
  constructor() {}

  public usernameSubject = new Subject<string>();

  public emitUsername(username: string) {
    this.usernameSubject.next(username);
  }
}
