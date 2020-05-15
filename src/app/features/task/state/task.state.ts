import { State, Action, StateContext, Selector } from "@ngxs/store";
import { TaskStateModel } from "./task.model";
import { TASK_STATE__DEFAULTS } from "./task.defaults";
import { GetTasks } from "./task.actions";
import { Injectable, Inject } from "@angular/core";
import { TASK_PROVIDER_TOKEN, TaskServiceInterface } from "../services/task.service";
import { tap } from "rxjs/operators";

@State<TaskStateModel>({
  name: 'tasks',
  defaults: TASK_STATE__DEFAULTS,
})
@Injectable()
export class TaskState {

  constructor(
    @Inject(TASK_PROVIDER_TOKEN) 
    private taskService: TaskServiceInterface,
  ) {}

  @Selector()
  static tasks(state: TaskStateModel) {
    return state.tasks;
  }

  @Action(GetTasks)
  getTaskts(ctx: StateContext<TaskStateModel>, action: GetTasks) {
    const state = ctx.getState();
    return this.taskService.getTasks().pipe(
      tap(tasks => {
        ctx.setState({
          ...state,
          tasks: tasks,
        });
      }),
    );
  }

}
