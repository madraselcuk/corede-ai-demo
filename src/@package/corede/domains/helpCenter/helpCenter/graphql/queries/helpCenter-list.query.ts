import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IHelpCenterListInput } from '../resolverTypes/helpCenter-list.input';
import { IHelpCenterListResult } from '../resolverTypes/helpCenter-list.result';
import { helpCenterListItemResultFragment } from '../fragments/helpCenter-list.item.result.fragment';

export const helpCenterListQuery = gql`
  ${helpCenterListItemResultFragment}

  query helpCenterList($input: HelpCenterListInput) {
    helpCenterList(input: $input) {
      data {
        ...HelpCenterListItemResultFragment
      }
      count
    }
  }
`;

export interface IHelpCenterListRequest
  extends IBaseGraphqlRequest<IHelpCenterListInput, undefined> {}

export interface IHelpCenterListResponse
  extends IBaseGraphqlResponse<IHelpCenterListInput> {
  data: {
    helpCenterList: IHelpCenterListResult;
  };
  errors: TGraphqlErrors<IHelpCenterListInput>;
}
