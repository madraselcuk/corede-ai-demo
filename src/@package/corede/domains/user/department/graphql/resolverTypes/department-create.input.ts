import { IHasOptionalOrganizationId } from "../../../organization";

export interface IDepartmentCreateInput extends IHasOptionalOrganizationId {
  name: string;
  roleIds?: Array<string>;
}
