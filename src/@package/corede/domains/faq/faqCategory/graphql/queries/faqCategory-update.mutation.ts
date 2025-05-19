import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IFaqCategoryUpdateInput,
  IFaqCategoryUpdateFilterInput,
} from '../resolverTypes/faqCategory-update.input';
import { IFaqCategoryUpdateResult } from '../resolverTypes/faqCategory-update.result';

export const faqCategoryUpdateQuery = gql`
  mutation faqCategoryUpdate(
    $filter: FaqCategoryUpdateFilterInput!
    $input: FaqCategoryUpdateInput!
  ) {
    faqCategoryUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IFaqCategoryUpdateRequest
  extends IBaseGraphqlRequest<IFaqCategoryUpdateInput, IFaqCategoryUpdateFilterInput> {}

export interface IFaqCategoryUpdateResponse
  extends IBaseGraphqlResponse<IFaqCategoryUpdateInput> {
  data: {
    faqCategoryUpdate: IFaqCategoryUpdateResult;
  };
  errors: TGraphqlErrors<IFaqCategoryUpdateInput>;
}
