import { IEntity } from "@common_package";

export interface IUserPermissionUpdateFilterInput extends IEntity {}

export interface IUserPermissionUpdateInput {
  permissionIds: string[];
  prohibitedPermissionIds: string[];
}
