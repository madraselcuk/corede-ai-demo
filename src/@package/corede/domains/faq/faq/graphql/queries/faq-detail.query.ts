import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IFaqDetailResult, IFaqDetailInput } from '../resolverTypes';
import { faqDetailResultFragment } from '../fragments/faq-detail.result.fragment';

export const faqDetailQuery = gql`
  ${faqDetailResultFragment}

  query faqDetail($input: FaqDetailInput!) {
    faqDetail(input: $input) {
      ...FaqDetailResultFragment
    }
  }
`;

export interface IFaqDetailRequest
  extends IBaseGraphqlRequest<IFaqDetailInput, undefined> {}

export interface IFaqDetailResponse
  extends IBaseGraphqlResponse<IFaqDetailInput> {
  data: {
    faqDetail: IFaqDetailResult;
  };
  errors: TGraphqlErrors<IFaqDetailInput>;
}
