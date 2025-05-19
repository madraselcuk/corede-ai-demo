import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IFaqCategoryDeleteInput,
  IFaqCategoryDeleteResult,
} from '../resolverTypes';

export const faqCategoryDeleteQuery = gql`
  mutation faqCategoryDelete($input: FaqCategoryDeleteInput!) {
    faqCategoryDelete(input: $input) {
      success
    }
  }
`;

export interface IFaqCategoryDeleteRequest
  extends IBaseGraphqlRequest<IFaqCategoryDeleteInput> {}

export interface IFaqCategoryDeleteResponse
  extends IBaseGraphqlResponse<IFaqCategoryDeleteInput> {
  data: {
    faqCategoryDelete: IFaqCategoryDeleteResult;
  };
  errors: TGraphqlErrors<IFaqCategoryDeleteInput>;
}
