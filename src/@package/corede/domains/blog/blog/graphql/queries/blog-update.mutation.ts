import gql from 'graphql-tag'
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import {
  IBlogUpdateInput,
  IBlogUpdateFilterInput,
  IBlogUpdateResult,
} from '../resolverTypes'

export const blogUpdateQuery = gql`
  mutation blogUpdate(
    $filter: BlogUpdateFilterInput!
    $input: BlogUpdateInput!
  ) {
    blogUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`

export interface IBlogUpdateRequest
  extends IBaseGraphqlRequest<IBlogUpdateInput, IBlogUpdateFilterInput> {}

export interface IBlogUpdateResponse
  extends IBaseGraphqlResponse<IBlogUpdateInput> {
  data: {
    blogUpdate: IBlogUpdateResult
  }
  errors: TGraphqlErrors<IBlogUpdateInput>
}
