import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { ISubscriptionDetailResult } from '../resolverTypes/subscription-detail.result';
import { subscriptionDetailResultFragment } from './subscription-detail.result.fragment';
import { DocumentNode } from 'graphql';
import { ISubscriptionDetailInput } from '../resolverTypes';

/**
 * @param params.fragment needs to be derived from `SubscriptionDetailResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function subscriptionDetailQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? subscriptionDetailResultFragment}

    query subscriptionDetail($input: SubscriptionDetailInput!) {
      subscriptionDetail(input: $input) {
        ...${params?.fragmentName ?? 'SubscriptionDetailResultFragment'}
      }
    }
  `;
}

export interface ISubscriptionDetailRequest
  extends IBaseGraphqlRequest<ISubscriptionDetailInput, undefined> {}

export interface ISubscriptionDetailResponse
  extends IBaseGraphqlResponse<ISubscriptionDetailInput> {
  data: {
    subscriptionDetail: ISubscriptionDetailResult;
  };
  errors: TGraphqlErrors<ISubscriptionDetailInput>;
}
