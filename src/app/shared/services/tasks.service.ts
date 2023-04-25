import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateTask, CreatedTask } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'https://khon-project-management.onrender.com';
  TOKEN = localStorage.getItem('token: ');

  getAllTasks(url: string): Observable<CreatedTask[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.TOKEN}`
    );
    return this.http.get<CreatedTask[]>(this.baseURL + url, { headers });
  }

  createTask(task: CreateTask, taskurl: string): Observable<CreatedTask> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.TOKEN}`);
    return this.http.post<CreatedTask>(this.baseURL + `${taskurl}`, task, {
      headers,
    });
  }

  deleteTask(url: string): Observable<CreatedTask> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.TOKEN}`
    );
    return this.http.delete<CreatedTask>(this.baseURL + url, { headers });
  }
}
