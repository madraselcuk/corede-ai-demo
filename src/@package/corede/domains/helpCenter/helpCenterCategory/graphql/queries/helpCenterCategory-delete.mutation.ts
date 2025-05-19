import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IHelpCenterCategoryDeleteInput } from '../resolverTypes/helpCenterCategory-delete.input';
import { IHelpCenterCategoryDeleteResult } from '../resolverTypes/helpCenterCategory-delete.result';

export const helpCenterCategoryDeleteQuery = gql`
  mutation helpCenterCategoryDelete($input: HelpCenterCategoryDeleteInput!) {
    helpCenterCategoryDelete(input: $input) {
      success
    }
  }
`;

export interface IHelpCenterCategoryDeleteRequest
  extends IBaseGraphqlRequest<IHelpCenterCategoryDeleteInput> {}

export interface IHelpCenterCategoryDeleteResponse
  extends IBaseGraphqlResponse<IHelpCenterCategoryDeleteInput> {
  data: {
    helpCenterCategoryDelete: IHelpCenterCategoryDeleteResult;
  };
  errors: TGraphqlErrors<IHelpCenterCategoryDeleteInput>;
}
