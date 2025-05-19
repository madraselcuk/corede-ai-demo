import { IPaginated } from "@common_package";
import { ITaskListItemResult } from './task-list.item.result';

export interface ITaskListResult extends IPaginated<ITaskListItemResult> {
  //TODO  implement this statistics
  totalSubTaskCount?: number;

  //TODO  implement this statistics
  completedSubTaskCount?: number;

  //TODO  implement this statistics
  documentCount?: number;

  //TODO  implement this statistics
  commentCount?: number;
}
