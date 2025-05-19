import { ITask } from "../../interfaces";

export interface ITaskListByRelatedItemResult
  extends Pick<
    ITask,
    | "_id"
    | "title"
    | "description"
    | "tags"
    | "isCompleted"
    | "status"
    | "progress"
    | "priority"
    | "assignees"
    | "followers"
    | "comments"
    | "notes"
    | "parentTask"
    | "childTasks"
  > {}
