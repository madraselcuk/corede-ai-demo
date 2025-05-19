import { IPaginated } from "@common_package";
import { IUserListItemResult } from "./user-list-item.result";

export interface IUserListResult extends IPaginated<IUserListItemResult> {}
