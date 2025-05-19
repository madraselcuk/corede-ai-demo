import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IFaqListInput, IFaqListResult } from '../resolverTypes';
import { faqListItemResultFragment } from '../fragments/faq-list.item.result.fragment';

export const faqListQuery = gql`
  ${faqListItemResultFragment}

  query faqList($input: FaqListInput) {
    faqList(input: $input) {
      data {
        ...FaqListItemResultFragment
      }
      count
    }
  }
`;

export interface IFaqListRequest
  extends IBaseGraphqlRequest<IFaqListInput, undefined> {}

export interface IFaqListResponse extends IBaseGraphqlResponse<IFaqListInput> {
  data: {
    faqList: IFaqListResult;
  };
  errors: TGraphqlErrors<IFaqListInput>;
}
