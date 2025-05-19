import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IPoliciesInput } from '../resolverTypes/policies.input';
import { IPoliciesResult } from '../resolverTypes/policies.result';
import { policyResultFragment } from './policy-result.fragment';

export const policiesQuery = gql`
  ${policyResultFragment}

  query policies($input: PoliciesInput) {
    policies(input: $input) {
      data {
        ...PolicyResultFragment
      }
      count
    }
  }
`;

export interface IPoliciesRequest
  extends IBaseGraphqlRequest<IPoliciesInput, undefined> {}

export interface IPoliciesResponse
  extends IBaseGraphqlResponse<IPoliciesInput> {
  data: {
    policies: IPoliciesResult;
  };
  errors: TGraphqlErrors<IPoliciesInput>;
}
