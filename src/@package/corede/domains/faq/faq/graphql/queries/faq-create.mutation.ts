import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IFaqCreateInput, IFaqCreateResult } from '../resolverTypes';

export const faqCreateQuery = gql`
  mutation faqCreate($input: FaqCreateInput!) {
    faqCreate(input: $input) {
      _id
    }
  }
`;

export interface IFaqCreateRequest
  extends IBaseGraphqlRequest<IFaqCreateInput> {}

export interface IFaqCreateResponse
  extends IBaseGraphqlResponse<IFaqCreateInput> {
  data: {
    faqCreate: IFaqCreateResult;
  };
  errors: TGraphqlErrors<IFaqCreateInput>;
}
