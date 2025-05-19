import { IPaginated } from "@common_package";
import { IOrganizationSettingsListItemResult } from "./organizationSettings-list.item.result";

export interface IOrganizationSettingsListResult extends IPaginated<IOrganizationSettingsListItemResult> {}
