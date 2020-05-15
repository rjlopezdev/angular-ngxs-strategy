import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TASK_PROVIDER_TOKEN } from "./services/task.service";
import { TaskService } from './services/task.service';
import { TaskRoutingModule } from './task-routing.module';
import { NgxsModule } from '@ngxs/store';
import { TaskState } from './state/task.state';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    NgxsModule.forFeature([TaskState]),
  ],
  declarations: [
    TaskListComponent,
  ],
  providers: [
    {
      provide: TASK_PROVIDER_TOKEN,
      useClass: TaskService,
    },
  ],
  exports: [
    TaskListComponent,
  ],
})
export class TaskModule { }
