import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IHelpCenterCategoryListInput } from '../resolverTypes/helpCenterCategory-list.input';
import { IHelpCenterCategoryListResult } from '../resolverTypes/helpCenterCategory-list.result';
import { helpCenterCategoryListItemResultFragment } from '../fragments/helpCenterCategory-list.item.result.fragment';

export const helpCenterCategoryListQuery = gql`
  ${helpCenterCategoryListItemResultFragment}

  query helpCenterCategoryList($input: HelpCenterCategoryListInput) {
    helpCenterCategoryList(input: $input) {
      data {
        ...HelpCenterCategoryListItemResultFragment
      }
      count
    }
  }
`;

export interface IHelpCenterCategoryListRequest
  extends IBaseGraphqlRequest<IHelpCenterCategoryListInput, undefined> {}

export interface IHelpCenterCategoryListResponse
  extends IBaseGraphqlResponse<IHelpCenterCategoryListInput> {
  data: {
    helpCenterCategoryList: IHelpCenterCategoryListResult;
  };
  errors: TGraphqlErrors<IHelpCenterCategoryListInput>;
}
