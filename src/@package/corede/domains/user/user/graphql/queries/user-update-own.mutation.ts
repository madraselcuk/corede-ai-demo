import gql from 'graphql-tag'
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import { IUserUpdateOwnResult, IUserUpdateOwnInput } from '../resolverTypes'

export const userUpdateOwnQuery = gql`
  mutation userUpdateOwn($input: UserUpdateInput!) {
    userUpdateOwn(input: $input) {
      _id
    }
  }
`

export interface IUserUpdateOwnRequest
  extends IBaseGraphqlRequest<IUserUpdateOwnInput> {}

export interface IUserUpdateOwnResponse
  extends IBaseGraphqlResponse<IUserUpdateOwnInput> {
  data: {
    userUpdateOwn: IUserUpdateOwnResult
  }
  errors: TGraphqlErrors<IUserUpdateOwnInput>
}
