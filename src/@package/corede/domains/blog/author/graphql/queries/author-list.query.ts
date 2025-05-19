import { gql } from 'graphql-tag'

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import { IAuthorListResult, IAuthorListInput } from '../resolverTypes'
import { authorListItemResultFragment } from './author-list.item.result.fragment'

export const authorListQuery = gql`
  ${authorListItemResultFragment}

  query authorList($input: AuthorListInput) {
    authorList(input: $input) {
      data {
        ...AuthorListItemResultFragment
      }
      count
    }
  }
`

export interface IAuthorListRequest
  extends IBaseGraphqlRequest<IAuthorListInput> {}

export interface IAuthorListResponse
  extends IBaseGraphqlResponse<IAuthorListInput> {
  data: {
    authorList: IAuthorListResult
  }
  errors: TGraphqlErrors<IAuthorListInput>
}
