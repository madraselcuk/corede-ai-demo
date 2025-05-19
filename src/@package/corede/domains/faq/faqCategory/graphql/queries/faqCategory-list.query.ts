import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import {
  IFaqCategoryListInput,
  IFaqCategoryListResult,
} from '../resolverTypes';
import { faqCategoryListItemResultFragment } from '../fragments/faqCategory-list.item.result.fragment';

export const faqCategoryListQuery = gql`
  ${faqCategoryListItemResultFragment}

  query faqCategoryList($input: FaqCategoryListInput) {
    faqCategoryList(input: $input) {
      data {
        ...FaqCategoryListItemResultFragment
      }
      count
    }
  }
`;

export interface IFaqCategoryListRequest
  extends IBaseGraphqlRequest<IFaqCategoryListInput, undefined> {}

export interface IFaqCategoryListResponse
  extends IBaseGraphqlResponse<IFaqCategoryListInput> {
  data: {
    faqCategoryList: IFaqCategoryListResult;
  };
  errors: TGraphqlErrors<IFaqCategoryListInput>;
}
