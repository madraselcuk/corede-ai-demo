import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import {
  IFaqDetailPublicResult,
  IFaqDetailPublicInput,
} from '../resolverTypes';
import { faqDetailPublicResultFragment } from '../fragments/faq-detail-public.result.fragment';

export const faqDetailPublicQuery = gql`
  ${faqDetailPublicResultFragment}

  query faqDetailPublic($input: FaqDetailPublicInput!) {
    faqDetailPublic(input: $input) {
      ...FaqDetailPublicResultFragment
    }
  }
`;

export interface IFaqDetailPublicRequest
  extends IBaseGraphqlRequest<IFaqDetailPublicInput, undefined> {}

export interface IFaqDetailPublicResponse
  extends IBaseGraphqlResponse<IFaqDetailPublicInput> {
  data: {
    faqDetailPublic: IFaqDetailPublicResult;
  };
  errors: TGraphqlErrors<IFaqDetailPublicInput>;
}
