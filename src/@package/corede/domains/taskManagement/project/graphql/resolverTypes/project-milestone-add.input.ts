import { IEntity } from "@common_package";
import {
  IHasOptionalOrganizationId,
  IHasOptionalDepartmentId,
} from "@corede_package";

export interface IProjectMilestoneAddFilterInput extends IEntity {}

export interface IProjectMilestoneAddInput
  extends IHasOptionalOrganizationId,
    IHasOptionalDepartmentId {
  title: string;
  description?: string;
  tags?: string[];
  order: number;
  startDate: Date;
  dueDate: Date;
}
