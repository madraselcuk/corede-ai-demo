import { IPaginated } from "@common_package";
import { ITaskListByRelatedItemResult } from "./task-list-by-related-item.result";

export interface ITaskListByRelatedResult
  extends IPaginated<ITaskListByRelatedItemResult> {}
