import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskServiceInterface } from './task.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { Task } from '../models/task';

@Injectable()
export class TaskHttpService implements TaskServiceInterface {

  private taskUrl: string = ``;

  constructor(
    private http: HttpClient,
  ) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.taskUrl}`);
  };

  public getTask(taskId: string): Observable<Task> {
    return this.http.get<Task>(`${this.taskUrl}${taskId}`);
  };

  public updateTask(taskId: string, newTask: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(`${this.taskUrl}${taskId}`, newTask);
  };

  public deleteTask(taskId: string): Observable<Task> {
    return this.http.delete<Task>(`${this.taskUrl}${taskId}`);
  };

}
