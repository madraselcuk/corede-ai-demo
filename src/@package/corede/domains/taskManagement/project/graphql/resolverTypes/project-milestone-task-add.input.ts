import { IHasOptionalDepartmentId } from "@corede_package";

export interface IProjectMilestoneTaskAddInput
  extends IHasOptionalDepartmentId {
  projectId: string;
  milestoneId: string;
  taskId: string;
}
