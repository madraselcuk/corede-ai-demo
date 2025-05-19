import { IPaginated } from "@common_package";
import { IOrganizationListItemResult } from "./organization-list-item.result";

export interface IOrganizationListResult
  extends IPaginated<IOrganizationListItemResult> {}
