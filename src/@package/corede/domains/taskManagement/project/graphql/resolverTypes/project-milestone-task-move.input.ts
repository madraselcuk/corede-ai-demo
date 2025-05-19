import { IHasOptionalDepartmentId } from "@corede_package";

export interface IProjectMilestoneTaskMoveInput
  extends IHasOptionalDepartmentId {
  projectId: string;
  sourceMilestoneId: string;
  targetMilestoneId: string;
  taskId: string;
}
