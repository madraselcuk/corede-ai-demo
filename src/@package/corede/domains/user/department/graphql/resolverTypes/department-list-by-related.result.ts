import { IPaginated } from "@common_package";
import { IDepartmentListByRelatedItemResult } from "./department-list-by-related-item.result";

export interface IDepartmentListByRelatedResult
  extends IPaginated<IDepartmentListByRelatedItemResult> {}
