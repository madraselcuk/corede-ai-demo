import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { faqCategoryDetailResultFragment } from '../fragments/faqCategory-detail.result.fragment';
import {
  IFaqCategoryDetailResult,
  IFaqCategoryDetailInput,
} from '../resolverTypes';

export const faqCategoryDetailQuery = gql`
  ${faqCategoryDetailResultFragment}

  query faqCategoryDetail($input: FaqCategoryDetailInput!) {
    faqCategoryDetail(input: $input) {
      ...FaqCategoryDetailResultFragment
    }
  }
`;

export interface IFaqCategoryDetailRequest
  extends IBaseGraphqlRequest<IFaqCategoryDetailInput, undefined> {}

export interface IFaqCategoryDetailResponse
  extends IBaseGraphqlResponse<IFaqCategoryDetailInput> {
  data: {
    faqCategoryDetail: IFaqCategoryDetailResult;
  };
  errors: TGraphqlErrors<IFaqCategoryDetailInput>;
}
