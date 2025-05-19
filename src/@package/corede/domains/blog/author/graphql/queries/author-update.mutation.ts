import gql from 'graphql-tag'
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import {
  IAuthorUpdateInput,
  IAuthorUpdateFilterInput,
  IAuthorUpdateResult,
} from '../resolverTypes'

export const authorUpdateQuery = gql`
  mutation authorUpdate(
    $filter: AuthorUpdateFilterInput!
    $input: AuthorUpdateInput!
  ) {
    authorUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`

export interface IAuthorUpdateRequest
  extends IBaseGraphqlRequest<IAuthorUpdateInput, IAuthorUpdateFilterInput> {}

export interface IAuthorUpdateResponse
  extends IBaseGraphqlResponse<IAuthorUpdateInput> {
  data: {
    authorUpdate: IAuthorUpdateResult
  }
  errors: TGraphqlErrors<IAuthorUpdateInput>
}
