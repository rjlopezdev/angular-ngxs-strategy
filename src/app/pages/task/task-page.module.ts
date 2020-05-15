import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskModule } from '../../features/task/task.module';
import { NgxsModule } from '@ngxs/store';

const NGXS_MODULES = [
  NgxsModule.forFeature([TaskModule]),
];

@NgModule({
  imports: [
    CommonModule,
    TaskModule,
    NGXS_MODULES,
  ],
  declarations: []
})
export class TaskPageModule { }
