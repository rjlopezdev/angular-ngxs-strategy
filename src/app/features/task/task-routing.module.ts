import { Route, RouterModule } from "@angular/router";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { NgModule } from "@angular/core";


const ROUTES: Route[] = [
  {
    path: '',
    component: TaskListComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class TaskRoutingModule {}
