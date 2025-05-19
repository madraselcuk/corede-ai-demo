import { gql } from 'graphql-tag';

import { IBaseGraphqlRequest, IBaseGraphqlResponse, TGraphqlErrors } from '@common_package';
import { IPolicyInput } from '../resolverTypes/policy.input';
import { IPolicyResult } from '../resolverTypes/policy.result';
import { policyResultFragment } from './policy-result.fragment';

export const policyQuery = gql`
  ${policyResultFragment}

  query policy($input: PolicyInput!) {
    policy(input: $input) {
      ...PolicyResultFragment
    }
  }
`;

export interface IPolicyRequest
  extends IBaseGraphqlRequest<IPolicyInput, undefined> {}

export interface IPolicyResponse extends IBaseGraphqlResponse<IPolicyInput> {
  data: {
    policy: IPolicyResult;
  };
  errors: TGraphqlErrors<IPolicyInput>;
}
