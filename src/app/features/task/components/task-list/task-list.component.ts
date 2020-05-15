import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetTasks } from '../../state/task.actions';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { TaskState } from '../../state/task.state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Select(TaskState.tasks)
  tasks$: Observable<Task[]>;

  constructor(
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetTasks(null)).subscribe(l => console.log(l))
  }

}
