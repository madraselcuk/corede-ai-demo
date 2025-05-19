import { IHasOptionalOrganizationId } from "../../../../user";
import { RoleType } from "../../enums";

export interface IRoleCreateInput extends IHasOptionalOrganizationId {
  /**
   * name
   */
  name: string;

  /**
   * type
   */
  type?: RoleType;

  /**
   * permissions
   */
  permissionIds: string[];

  /**
   * description
   */
  description?: string;
}
