import { PermissionActionScope } from '../enums/PermissionActionScope';
import { PermissionAction } from '../enums/PermissionAction';
import { IEntity } from '../../../../interfaces/entity.interface';

export interface IBasePermission {
  /**
   * action of the permission
   */
  action: PermissionAction;
  /**
   * the subject that the action will be applied to: User, Permission, Comment etc.
   */
  subject: string;
  /**
   * action scope of the permission action
   */
  actionScope: PermissionActionScope;
}

export interface IBasePermissionEntity extends IEntity, IBasePermission {
  
}