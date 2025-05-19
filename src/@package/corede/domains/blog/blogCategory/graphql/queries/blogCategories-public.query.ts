import { gql } from 'graphql-tag'

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import { IBlogCategoriesPublicInput } from '@corede_package'
import { IBlogCategoriesPublicResult } from '../resolverTypes/blogCategories-public.result'
import { blogCategoriesItemPublicResultFragment } from './blogCategory-result-public.fragment'

export const blogCategoriesPublicQuery = gql`
  ${blogCategoriesItemPublicResultFragment}

  query blogCategoriesPublic($input: BlogCategoriesPublicInput) {
    blogCategoriesPublic(input: $input) {
      data {
        ...BlogCategoriesItemPublicResultFragment
      }
      count
    }
  }
`

export interface IBlogCategoriesRequestPublic
  extends IBaseGraphqlRequest<IBlogCategoriesPublicInput, undefined> {}

export interface IBlogCategoriesResponsePublic
  extends IBaseGraphqlResponse<IBlogCategoriesPublicInput> {
  data: {
    blogCategoriesPublic: IBlogCategoriesPublicResult
  }
  errors: TGraphqlErrors<IBlogCategoriesPublicInput>
}
