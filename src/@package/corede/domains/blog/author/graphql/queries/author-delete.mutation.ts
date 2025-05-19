import gql from 'graphql-tag'
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import { IAuthorDeleteInput, IAuthorDeleteResult } from '../resolverTypes'

export const authorDeleteQuery = gql`
  mutation authorDelete($input: AuthorDeleteInput!) {
    authorDelete(input: $input) {
      success
    }
  }
`

export interface IAuthorDeleteRequest
  extends IBaseGraphqlRequest<IAuthorDeleteInput> {}

export interface IAuthorDeleteResponse
  extends IBaseGraphqlResponse<IAuthorDeleteInput> {
  data: {
    authorDelete: IAuthorDeleteResult
  }
  errors: TGraphqlErrors<IAuthorDeleteInput>
}
