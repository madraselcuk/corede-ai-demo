import { IHasOptionalOrganization } from '../../../user'
import { IPermission } from '../../permission/interfaces/permission.interface'
import {
  IEntity,
  IBasePermission,
  IHasTimeStamp,
  IHasOptionalUserAudit,
} from '@common_package'
import { RoleType } from '../enums'

export interface IBaseRole {
  /**
   * name of the role.
   * - unique
   */
  name: string

  /**
   * permissions that users will inherit from Role when they has the `Role`
   */
  permissions: IBasePermission[]

  /**
   * type of the role
   */
  type?: RoleType

  /**
   * description about the role
   */
  description?: string
}

export interface IBaseRoleEntity extends IEntity, IBaseRole {}

export interface IRole
  extends IBaseRoleEntity,
    IHasOptionalOrganization,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  /**
   * permissions that users will inherit from Role when they has the `Role`
   */
  permissions: IPermission[]
}
