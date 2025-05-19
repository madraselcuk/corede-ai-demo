import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IFaqDeleteManyInput, IFaqDeleteManyResult } from '../resolverTypes';

export const faqDeleteManyQuery = gql`
  mutation faqDeleteMany($input: FaqDeleteManyInput!) {
    faqDeleteMany(input: $input) {
      success
    }
  }
`;

export interface IFaqDeleteManyRequest
  extends IBaseGraphqlRequest<IFaqDeleteManyInput> {}

export interface IFaqDeleteManyResponse
  extends IBaseGraphqlResponse<IFaqDeleteManyInput> {
  data: {
    faqDeleteMany: IFaqDeleteManyResult;
  };
  errors: TGraphqlErrors<IFaqDeleteManyInput>;
}
