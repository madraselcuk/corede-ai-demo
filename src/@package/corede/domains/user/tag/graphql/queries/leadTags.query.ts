import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { ILeadTagsResult } from '../resolverTypes/leadTags.result';
import { ILeadTagsFilterInput } from '../resolverTypes/leadTags.filter.input';
import { leadTagsResultFragment } from './leadTags-result.fragment';

export const leadTagsQuery = gql`
  ${leadTagsResultFragment}

  query leadTags($filter: FilterLeadTagsInput) {
    leadTags(filter: $filter) {
      ...LeadTagsResultFragment
    }
  }
`;

export interface ILeadTagsRequest
  extends IBaseGraphqlRequest<undefined, ILeadTagsFilterInput> {}

export interface ILeadTagsResponse extends IBaseGraphqlResponse<undefined> {
  data: {
    leadTags: ILeadTagsResult;
  };
  errors: TGraphqlErrors<undefined>;
}
