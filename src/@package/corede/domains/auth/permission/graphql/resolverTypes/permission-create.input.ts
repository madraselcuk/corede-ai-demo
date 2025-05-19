import { PermissionAction, PermissionActionScope, PermissionCategory } from "@common_package";

export interface IPermissionCreateInput {
  /**
   * action
   */
  action: PermissionAction;

  /**
   * subject
   */
  subject: string;

  /**
   * action scope
   */
  actionScope: PermissionActionScope;

  /**
   * description
   */
  description?: string;
  /**
   * domain
   */
  domain?: string;
  /**
   * subdomain
   */
  subdomain?: string;
  /**
   * category
   * @values action, view, data
   */
  category?: PermissionCategory;
}
