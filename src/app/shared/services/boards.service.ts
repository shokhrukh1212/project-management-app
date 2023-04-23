import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createNewBoard, createdBoard } from '../models/board.model';
@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  baseURL: string = 'https://khon-project-management.onrender.com';
  TOKEN = localStorage.getItem('token: ');

  constructor(private http: HttpClient) {}

  public createBoard(boardData: createNewBoard): Observable<createdBoard> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.TOKEN}`);

    return this.http.post<createdBoard>(this.baseURL + '/boards', boardData, {
      headers,
    });
  }

  public getAllBoards(): Observable<createdBoard[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.TOKEN}`
    );

    return this.http.get<createdBoard[]>(this.baseURL + '/boards', { headers });
  }

  public deleteBoardById(_id: string): Observable<createdBoard> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.TOKEN}` });
    return this.http.delete<createdBoard>(this.baseURL + `/boards/${_id}`, {
      headers,
    });
  }

  public getBoardById(boardId: string): Observable<createdBoard> {
    return this.http.get<createdBoard>(this.baseURL + `/boards/${boardId}`);
  }
}
