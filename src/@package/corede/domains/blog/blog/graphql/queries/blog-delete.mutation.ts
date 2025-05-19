import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import { IBlogDeleteInput, IBlogDeleteResult } from '../resolverTypes'

export const blogDeleteQuery = gql`
  mutation blogDelete($input: BlogDeleteInput!) {
    blogDelete(input: $input) {
      success
    }
  }
`

export interface IBlogDeleteRequest
  extends IBaseGraphqlRequest<IBlogDeleteInput> {}

export interface IBlogDeleteResponse
  extends IBaseGraphqlResponse<IBlogDeleteInput> {
  data: {
    blogDelete: IBlogDeleteResult
  }
  errors: TGraphqlErrors<IBlogDeleteInput>
}
