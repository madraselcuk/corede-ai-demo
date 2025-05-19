import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import { IBlogCreateInput, IBlogCreateResult } from '../resolverTypes'

export const blogCreateQuery = gql`
  mutation blogCreate($input: BlogCreateInput!) {
    blogCreate(input: $input) {
      _id
    }
  }
`

export interface IBlogCreateRequest
  extends IBaseGraphqlRequest<IBlogCreateInput> {}

export interface IBlogCreateResponse
  extends IBaseGraphqlResponse<IBlogCreateInput> {
  data: {
    blogCreate: IBlogCreateResult
  }
  errors: TGraphqlErrors<IBlogCreateInput>
}
