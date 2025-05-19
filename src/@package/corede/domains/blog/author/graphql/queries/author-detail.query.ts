import { gql } from 'graphql-tag'

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import { IAuthorDetailInput, IAuthorDetailResult } from '../resolverTypes'
import { authorDetailResultFragment } from './author-detail.result.fragment'

export const authorDetailQuery = gql`
  ${authorDetailResultFragment}

  query authorDetail($input: AuthorDetailInput!) {
    authorDetail(input: $input) {
      ...AuthorDetailResultFragment
    }
  }
`

export interface IAuthorDetailRequest
  extends IBaseGraphqlRequest<IAuthorDetailInput> {}

export interface IAuthorDetailResponse
  extends IBaseGraphqlResponse<IAuthorDetailInput> {
  data: {
    authorDetail: IAuthorDetailResult
  }
  errors: TGraphqlErrors<IAuthorDetailInput>
}
