import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IFaqUpdateInput,
  IFaqUpdateFilterInput,
  IFaqUpdateResult,
} from '../resolverTypes';

export const faqUpdateQuery = gql`
  mutation faqUpdate($filter: FaqUpdateFilterInput!, $input: FaqUpdateInput!) {
    faqUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IFaqUpdateRequest
  extends IBaseGraphqlRequest<IFaqUpdateInput, IFaqUpdateFilterInput> {}

export interface IFaqUpdateResponse
  extends IBaseGraphqlResponse<IFaqUpdateInput> {
  data: {
    faqUpdate: IFaqUpdateResult;
  };
  errors: TGraphqlErrors<IFaqUpdateInput>;
}
