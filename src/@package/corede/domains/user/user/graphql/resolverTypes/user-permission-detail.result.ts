import { IBasePermissionEntity } from "@common_package";

export interface IUserPermissionDetailResult {
  rolePermissions: IBasePermissionEntity[];
  userAllowedPermissions: IBasePermissionEntity[];
  userProhibitedPermissions: IBasePermissionEntity[];
}
