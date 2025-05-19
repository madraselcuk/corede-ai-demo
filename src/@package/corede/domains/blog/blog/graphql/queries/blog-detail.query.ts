import { gql } from 'graphql-tag'

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import { IBlogDetailInput, IBlogDetailResult } from '../resolverTypes'
import { blogDetailResultFragment } from './blog-detail.result.fragment'

export const blogDetailQuery = gql`
  ${blogDetailResultFragment}

  query blogDetail($input: BlogDetailInput!) {
    blogDetail(input: $input) {
      ...BlogDetailResultFragment
    }
  }
`

export interface IBlogDetailRequest
  extends IBaseGraphqlRequest<IBlogDetailInput> {}

export interface IBlogDetailResponse
  extends IBaseGraphqlResponse<IBlogDetailInput> {
  data: {
    blogDetail: IBlogDetailResult
  }
  errors: TGraphqlErrors<IBlogDetailInput>
}
