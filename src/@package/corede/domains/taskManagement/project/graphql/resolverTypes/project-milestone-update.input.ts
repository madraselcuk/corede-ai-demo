import { IHasOptionalDepartmentId } from "@corede_package";

export interface IProjectMilestoneUpdateFilterInput {
  projectId: string;
  milestoneId: string;
}

export interface IProjectMilestoneUpdateInput extends IHasOptionalDepartmentId {
  title?: string;
  description?: string;
  tags?: string[];
  order?: number;
  startDate?: Date;
  dueDate?: Date;
}
