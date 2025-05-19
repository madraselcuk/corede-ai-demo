import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { latestPolicyResultFragment } from './policy-result.fragment';
import { ILatestPolicyResult } from '../resolverTypes/latest-policy.result';
import { ILatestPolicyInput } from '../resolverTypes/latest-policy.input';

export const latestPolicyQuery = gql`
  ${latestPolicyResultFragment}

  query latestPolicy($input: LatestPolicyInput!) {
    latestPolicy(input: $input) {
      ...LatestPolicyResultFragment
    }
  }
`;

export interface ILatestPolicyRequest
  extends IBaseGraphqlRequest<ILatestPolicyInput, undefined> {}

export interface ILatestPolicyResponse
  extends IBaseGraphqlResponse<ILatestPolicyInput> {
  data: {
    latestPolicy: ILatestPolicyResult;
  };
  errors: TGraphqlErrors<ILatestPolicyInput>;
}
