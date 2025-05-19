import { IPaginated } from "@common_package";
import { IProjectListItemResult } from "./project-list.item.result";

export interface IProjectListResult
  extends IPaginated<IProjectListItemResult> {}
