import { IHasRoles } from '../../../auth/role/interfaces/has-roles.interface'
import {
  ICommonUser,
  ICommonBaseUser,
  ICommonBaseUserEntity,
  IEntity,
  IFileMetadata,
} from '@common_package'
import { IHasOptionalOrganization } from '../../organization'
import { IHasOptionalDepartment } from '../../department'
import { UserType } from '../enums/user-type.enum'
import { IPolicy } from '../../../policy'
import { IUserDevice } from './user-device.interface'
import { ITwoFactorAuth } from './user-two-factor-auth.interface'

export interface IBaseUser
  extends IHasOptionalOrganization,
    IHasOptionalDepartment,
    ICommonBaseUser {
  /**
   * the type of the user:
   * @value `cocrm` this user is a user belongs to the system itself. Does not have an organization
   * @value `organization` this user is a user belonging to an organization. Can be managed in the scope of organization. This user must have an organization either created in registration process or in something like onboarding process after registration
   */
  type: UserType
}

export interface IBaseUserEntity
  extends IEntity,
    IBaseUser,
    ICommonBaseUserEntity {}

export interface IUser extends IBaseUserEntity, ICommonUser, IHasRoles {
  // user information
  phoneNumber?: string
  phoneNumberVerified?: boolean

  state?: string

  emailVerified: boolean

  device?: IUserDevice

  lastLoginDate?: Date

  // settings
  acceptedPolicies: IPolicy[]
  twoFactorAuth?: ITwoFactorAuth
  signature?: IFileMetadata
}
