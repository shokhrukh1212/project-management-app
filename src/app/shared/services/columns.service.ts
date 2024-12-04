import { Injectable } from '@angular/core';
import { CreateColumn, CreatedColumn } from '../models/column.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColumnsService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'https://khon-project-management.onrender.com';
  TOKEN = localStorage.getItem('token: ');

  getColumns(): Observable<CreatedColumn[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.TOKEN}`
    );

    return this.http.get<CreatedColumn[]>(
      this.baseURL + `/boards/${localStorage.getItem('boardId')}/columns`,
      { headers }
    );
  }

  createColumn(column: CreateColumn): Observable<CreatedColumn> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.TOKEN}`);

    return this.http.post<CreatedColumn>(
      this.baseURL + `/boards/${localStorage.getItem('boardId')}/columns`,
      column,
      { headers }
    );
  }

  deleteColumn(columnId: string): Observable<CreatedColumn> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.TOKEN}`
    );

    return this.http.delete<CreatedColumn>(
      this.baseURL +
        `/boards/${localStorage.getItem('boardId')}/columns/${columnId}`,
      { headers }
    );
  }
}
