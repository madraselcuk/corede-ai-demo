import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IFaqDeleteInput, IFaqDeleteResult } from '../resolverTypes';

export const faqDeleteQuery = gql`
  mutation faqDelete($input: FaqDeleteInput!) {
    faqDelete(input: $input) {
      success
    }
  }
`;

export interface IFaqDeleteRequest
  extends IBaseGraphqlRequest<IFaqDeleteInput> {}

export interface IFaqDeleteResponse
  extends IBaseGraphqlResponse<IFaqDeleteInput> {
  data: {
    faqDelete: IFaqDeleteResult;
  };
  errors: TGraphqlErrors<IFaqDeleteInput>;
}
