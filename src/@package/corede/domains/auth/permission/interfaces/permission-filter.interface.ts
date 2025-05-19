import {
  IFilter,
  PermissionAction,
  PermissionActionScope,
  PermissionCategory,
} from "@common_package";

export interface IFilterPermission extends IFilter {
  actions?: PermissionAction[];
  subject?: string;
  actionScopes?: PermissionActionScope[];
  domain?: string;
  subdomain?: string;
  category?: PermissionCategory;
}
