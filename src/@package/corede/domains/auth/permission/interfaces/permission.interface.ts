import {
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IBasePermissionEntity,
  PermissionCategory,
} from "@common_package";

export interface IPermission
  extends IBasePermissionEntity,
    IHasTimeStamp,
  IHasOptionalUserAudit {
  domain?: string;
  subdomain?: string;
  category?: PermissionCategory;

  /**
   * description about the permission
   */
  description?: string;
}
