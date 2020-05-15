import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full',
  },
  {
    path: 'task',
    loadChildren: () => import('./features/task/task.module').then(
      m => m.TaskModule,
    ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
