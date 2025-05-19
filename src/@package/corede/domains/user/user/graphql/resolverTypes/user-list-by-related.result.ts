import { IPaginated } from "@common_package";
import { IUserListByRelatedItemResult } from "./user-list-by-related-item.result";

export interface IUserListByRelatedResult
  extends IPaginated<IUserListByRelatedItemResult> {}
