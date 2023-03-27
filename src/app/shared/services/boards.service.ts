import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { BoardRequest, BoardResponse } from '../models/boards.model';
@Injectable({
  providedIn: 'root',
})
export class BoardsService {
  baseURL: string = 'https://khon-project-management.onrender.com';
  constructor(private http: HttpClient) {}

  public getAllBoards(): Observable<BoardResponse[]> {
    return this.http.get<BoardResponse[]>('/boards');
  }

  public createBoard(boardData: BoardRequest): Observable<BoardResponse> {
    return this.http.post<BoardResponse>('/boards', boardData);
  }

  public getBoardById(boardId: string): Observable<BoardResponse> {
    return this.http.get<BoardResponse>(`/boards/${boardId}`);
  }
}
