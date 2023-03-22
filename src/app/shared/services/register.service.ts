import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signUpUser, signedUser } from '../user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  baseURL: string = 'http://localhost:3000/auth/signin';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<signedUser[]> {
    console.log('Get users: ', this.baseURL);
    return this.http.get<signedUser[]>(this.baseURL);
  }

  addUser(user: signUpUser): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.http.post(this.baseURL, body, { headers });
  }
}
