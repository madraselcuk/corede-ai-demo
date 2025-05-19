import { IEntity, PermissionAction, PermissionActionScope, PermissionCategory } from "@common_package";

export interface IPermissionUpdateFilterInput extends IEntity {}

export interface IPermissionUpdateInput {
  /**
   * action
   */
  action?: PermissionAction;

  /**
   * subject
   */
  subject?: string;

  /**
   * action scope
   */
  actionScope?: PermissionActionScope;

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
   */
  category?: PermissionCategory;
}
