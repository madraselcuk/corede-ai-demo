import { gql } from 'graphql-tag'

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import {
  IFaqCategoryListPublicInput,
  IFaqCategoryListPublicResult,
} from '../resolverTypes'
import { faqCategoryListItemPublicResultFragment } from '../fragments/faqCategory-list.item.result.public.fragment'

export const faqCategoryListQueryPublic = gql`
  ${faqCategoryListItemPublicResultFragment}

  query faqCategoryListPublic($input: FaqCategoryListPublicInput) {
    faqCategoryListPublic(input: $input) {
      data {
        ...FaqCategoryListItemPublicResultFragment
      }
      count
    }
  }
`

export interface IFaqCategoryListRequestPublic
  extends IBaseGraphqlRequest<IFaqCategoryListPublicInput, undefined> {}

export interface IFaqCategoryListResponsePublic
  extends IBaseGraphqlResponse<IFaqCategoryListPublicInput> {
  data: {
    faqCategoryListPublic: IFaqCategoryListPublicResult
  }
  errors: TGraphqlErrors<IFaqCategoryListPublicInput>
}
