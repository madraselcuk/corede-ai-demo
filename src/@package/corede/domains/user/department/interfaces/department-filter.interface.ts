import { IFilter } from "@common_package";
import { IHasOptionalOrganizationId } from "../../organization";
import { IHasOptionalDepartmentId } from "./has-department.interface";

export interface IFilterDepartment
  extends IFilter,
    IHasOptionalOrganizationId,
    IHasOptionalDepartmentId {
  name?: string;
}
