import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IFaqCategoryCreateInput,
  IFaqCategoryCreateResult,
} from '../resolverTypes/';

export const faqCategoryCreateQuery = gql`
  mutation faqCategoryCreate($input: FaqCategoryCreateInput!) {
    faqCategoryCreate(input: $input) {
      _id
    }
  }
`;

export interface IFaqCategoryCreateRequest
  extends IBaseGraphqlRequest<IFaqCategoryCreateInput> {}

export interface IFaqCategoryCreateResponse
  extends IBaseGraphqlResponse<IFaqCategoryCreateInput> {
  data: {
    faqCategoryCreate: IFaqCategoryCreateResult;
  };
  errors: TGraphqlErrors<IFaqCategoryCreateInput>;
}
