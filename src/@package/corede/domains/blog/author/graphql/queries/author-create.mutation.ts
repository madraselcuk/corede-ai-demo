import gql from 'graphql-tag'
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import { IAuthorCreateResult, IAuthorCreateInput } from '../resolverTypes'

export const authorCreateQuery = gql`
  mutation authorCreate($input: AuthorCreateInput!) {
    authorCreate(input: $input) {
      _id
    }
  }
`

export interface IAuthorCreateRequest
  extends IBaseGraphqlRequest<IAuthorCreateInput> {}

export interface IAuthorCreateResponse
  extends IBaseGraphqlResponse<IAuthorCreateInput> {
  data: {
    authorCreate: IAuthorCreateResult
  }
  errors: TGraphqlErrors<IAuthorCreateInput>
}
