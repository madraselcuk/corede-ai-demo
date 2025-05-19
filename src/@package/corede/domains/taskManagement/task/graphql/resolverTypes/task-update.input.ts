import { IEntity } from "@common_package";
import { TaskPriority, TaskStatus } from '../../enums';
import { IHasOptionalDepartmentId } from "@corede_package";

export interface ITaskUpdateFilterInput extends IEntity {}

export interface ITaskUpdateInput extends IHasOptionalDepartmentId {
  title?: string;
  description?: string;
  tags?: string[];
  status?: TaskStatus;
  progress?: number;
  priority?: TaskPriority;
  assigneeIds?: string[];
  followerIds?: string[];
  startDate?: Date;
  dueDate?: Date;
}
