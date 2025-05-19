import { IHasOptionalDepartmentId } from "@corede_package";

export interface IProjectMilestoneTaskDeleteInput
  extends IHasOptionalDepartmentId {
  projectId: string;
  milestoneId: string;
  taskId: string;
}
