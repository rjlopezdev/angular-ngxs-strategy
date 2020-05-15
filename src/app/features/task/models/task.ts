import { IsUUID, IsString, Length, IsNotEmpty, MaxLength } from "class-validator";
import { Expose, Type } from "class-transformer";
import { TaskStatus } from "./task-status";

export class Task {

  @IsUUID()
  @Expose({
    groups: ['detail']
  })
  id: string;

  @IsNotEmpty()
  @Length(5, 25)
  @Expose({
    groups: ['create', 'detail', 'list'],
  })
  title: string;

  @MaxLength(500)
  @Expose({
    groups: ['create', 'detail', 'list'],
  })
  description: string;

  @Expose({
    groups: ['detail', 'list'],
  })
  status: TaskStatus;
}
