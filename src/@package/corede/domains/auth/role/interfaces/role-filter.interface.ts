import { IFilter } from "@common_package";
import { IHasOptionalOrganizationId } from "../../../user";
import { RoleType } from "../enums";

export interface IFilterRole extends IFilter, IHasOptionalOrganizationId {
  name?: string;
  types?: RoleType[];
  permissionIds?: string[];
}
