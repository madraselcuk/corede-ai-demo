import {
  IHasDocuments,
  IHasOptionalOrganizationId,
  IHasOptionalDepartmentId,
} from "@corede_package";
import { TaskPriority, TaskRelatedEntityType, TaskStatus } from '../../enums';

export interface ITaskCreateInput
  extends Partial<IHasDocuments>,
    IHasOptionalOrganizationId, // TODO: check organization ownership
    IHasOptionalDepartmentId {
  title: string;
  description?: string;
  tags?: string[];
  status: TaskStatus;
  progress?: number;
  priority?: TaskPriority;
  assigneeIds?: string[];
  followerIds?: string[];
  parentTaskId?: string;
  startDate?: Date;
  dueDate?: Date;

  relatedEntityId?: string;
  relatedEntityType?: TaskRelatedEntityType;

  clientOrganizationId?: string;
}
