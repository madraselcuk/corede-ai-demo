import { IEntity } from "@common_package";
import { ProjectPriority, ProjectStatus } from '../../enums';
import { IHasOptionalDepartmentId } from "@corede_package";

export interface IProjectUpdateFilterInput extends IEntity {}

export interface IProjectUpdateInput extends IHasOptionalDepartmentId {
  title?: string;
  description?: string;
  tags?: string[];
  status?: ProjectStatus;
  progress?: number;
  priority?: ProjectPriority;
  assigneeIds?: string[];
  followerIds?: string[];
}
