import gql from 'graphql-tag'
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import { basePermissionFragment } from '../../../../auth/permission/graphql/queries/permission.fragment'
import { IUserPermissionDetailOwnInput } from '../resolverTypes/user-permission-detail-own.input'
import { IUserPermissionDetailOwnResult } from '../resolverTypes/user-permission-detail-own.result'

export const userPermissionDetailOwnQuery = gql`
  ${basePermissionFragment}

  query userPermissionDetailOwn {
    userPermissionDetailOwn {
      rolePermissions {
        ...BasePermissionFragment
      }
      userAllowedPermissions {
        ...BasePermissionFragment
      }
      userProhibitedPermissions {
        ...BasePermissionFragment
      }
    }
  }
`

export interface IUserPermissionDetailOwnRequest
  extends IBaseGraphqlRequest<IUserPermissionDetailOwnInput> {}

export interface IUserPermissionDetailOwnResponse
  extends IBaseGraphqlResponse<IUserPermissionDetailOwnInput> {
  data: {
    userPermissionDetailOwn: IUserPermissionDetailOwnResult
  }
  errors: TGraphqlErrors<IUserPermissionDetailOwnInput>
}
