import { IPaginated } from "@common_package";
import { IPermissionListItemResult } from "./permission-list-item.result";

export interface IPermissionListResult
  extends IPaginated<IPermissionListItemResult> {}
