import { gql } from 'graphql-tag'
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import { IBlogListInput, IBlogListResult } from '../resolverTypes'
import { blogListItemResultFragment } from './blog-list.item.result.fragment'

export const blogListQuery = gql`
  ${blogListItemResultFragment}

  query blogList($input: BlogListInput) {
    blogList(input: $input) {
      data {
        ...BlogListItemResultFragment
      }
      count
    }
  }
`

export interface IBlogListRequest
  extends IBaseGraphqlRequest<IBlogListInput, undefined> {}

export interface IBlogListResponse
  extends IBaseGraphqlResponse<IBlogListInput> {
  data: {
    blogList: IBlogListResult
  }
  errors: TGraphqlErrors<IBlogListInput>
}
