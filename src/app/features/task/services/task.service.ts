import { Observable, of } from "rxjs";
import { Task } from "../models/task";
import { before, after, delay } from "utils-decorators";
import { TaskStatus } from "../models/task-status";
import { InjectionToken, Injectable } from "@angular/core";

export const TASK_PROVIDER_TOKEN = new InjectionToken('TASK_SERVICE');

export interface TaskServiceInterface {
  getTasks(): Observable<Task[]>;
  getTask(taskId: string): Observable<Task>;
  updateTask(taskId: string, newTask: Partial<Task>): Observable<Task>;
  deleteTask(taskId: string): Observable<Task>;
}

@Injectable()
export class TaskService implements TaskServiceInterface {

  public getTasks(): Observable<Task[]> {
    return of([
      {
        id: 'd58345a2-96aa-11ea-bb37-0242ac130002',
        title: 'Awesome task',
        description: '',
        status: TaskStatus.PENDING,
      },
    ]);
  };

  public getTask(taskId: string): Observable<Task> {
    return of(<Task>{
      id: taskId,
    });
  };

  public updateTask(taskId: string, newTask: Partial<Task>): Observable<Task> {
    return of(<Task>newTask);
  };

  public deleteTask(taskId: string): Observable<Task> {
    return of(<Task>{
      id: taskId,
    });
  };

  private log(message: string) {
    console.info(message);
  }

}
