import gql from 'graphql-tag'
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import {
  IUserUpdateFilterInput,
  IUserUpdateInput,
} from '../resolverTypes/user-update.input'
import { IUserUpdateResult } from '../resolverTypes/user-update.result'

export const userUpdateQuery = gql`
  mutation userUpdate(
    $filter: UserUpdateFilterInput!
    $input: UserUpdateInput!
  ) {
    userUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`

export interface IUserUpdateRequest
  extends IBaseGraphqlRequest<IUserUpdateInput, IUserUpdateFilterInput> {}

export interface IUserUpdateResponse
  extends IBaseGraphqlResponse<IUserUpdateInput> {
  data: {
    userUpdate: IUserUpdateResult
  }
  errors: TGraphqlErrors<IUserUpdateInput>
}
