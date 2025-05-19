import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IFaqListPublicInput, IFaqListPublicResult } from '../resolverTypes';
import { faqListItemPublicResultFragment } from '../fragments/faq-list-public.item.result.fragment';

export const faqListPublicQuery = gql`
  ${faqListItemPublicResultFragment}

  query faqListPublic($input: FaqListPublicInput) {
    faqListPublic(input: $input) {
      data {
        ...FaqListItemPublicResultFragment
      }
      count
    }
  }
`;

export interface IFaqListPublicRequest
  extends IBaseGraphqlRequest<IFaqListPublicInput, undefined> {}

export interface IFaqListPublicResponse
  extends IBaseGraphqlResponse<IFaqListPublicInput> {
  data: {
    faqListPublic: IFaqListPublicResult;
  };
  errors: TGraphqlErrors<IFaqListPublicInput>;
}
