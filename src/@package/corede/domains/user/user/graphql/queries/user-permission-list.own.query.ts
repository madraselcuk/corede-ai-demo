import { gql } from 'graphql-tag'

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import {
  IPermissionListItemResult,
  permissionListItemResultFragment,
} from '../../../../auth/permission'

export const userPermissionListOwnQuery = gql`
  ${permissionListItemResultFragment}

  query userPermissionListOwn {
    userPermissionListOwn {
      ...PermissionListItemResultFragment
    }
  }
`

export interface IUserPermissionListOwnRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface IUserPermissionListOwnResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    userPermissionListOwn: IPermissionListItemResult[]
  }
  errors: TGraphqlErrors<undefined>
}
