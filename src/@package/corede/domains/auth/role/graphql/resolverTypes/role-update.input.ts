import { IEntity } from "@common_package";
import { RoleType } from "../../enums";

export interface IRoleUpdateFilterInput extends IEntity {}

export interface IRoleUpdateInput {
  /**
   * name
   */
  name?: string;

  /**
   * name
   */
  type?: RoleType;

  /**
   * permissions
   */
  permissionIds?: string[];

  /**
   * description
   */
  description?: string;
}
