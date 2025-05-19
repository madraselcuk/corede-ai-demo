import {
  IBasePermission,
  PermissionAction,
  PermissionActionScope,
} from '@common_package'

export interface IPermissionCheck
  extends Omit<IBasePermission, 'actionScope' | 'action'> {
  action?: PermissionAction
  actionScope?: PermissionActionScope
}

export interface IHasPermissionCheck {
  permission?: IPermissionCheck
}

export interface IHasPermissionFunc {
  hasPermission?: (checkPermission: IPermissionCheck) => boolean
}
