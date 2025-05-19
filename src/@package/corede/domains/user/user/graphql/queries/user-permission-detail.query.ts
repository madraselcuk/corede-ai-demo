import gql from 'graphql-tag'
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import { basePermissionFragment } from '../../../../auth/permission/graphql/queries/permission.fragment'
import { IUserPermissionDetailInput } from '../resolverTypes/user-permission-detail.input'
import { IUserPermissionDetailResult } from '../resolverTypes/user-permission-detail.result'

export const userPermissionDetailQuery = gql`
  ${basePermissionFragment}

  query userPermissionDetail($input: UserPermissionDetailInput!) {
    userPermissionDetail(input: $input) {
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

export interface IUserPermissionDetailRequest
  extends IBaseGraphqlRequest<IUserPermissionDetailInput> {}

export interface IUserPermissionDetailResponse
  extends IBaseGraphqlResponse<IUserPermissionDetailInput> {
  data: {
    userPermissionDetail: IUserPermissionDetailResult
  }
  errors: TGraphqlErrors<IUserPermissionDetailInput>
}
