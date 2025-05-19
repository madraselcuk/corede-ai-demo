import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { policyFragment } from './policy.fragment';
import { IAcceptedPoliciesResult } from '../resolverTypes/accepted-policies.result';

export const acceptedPoliciesQuery = gql`
  ${policyFragment}

  query acceptedPolicies {
    acceptedPolicies {
      result {
        ...PolicyFragment
      }
    }
  }
`;

export interface IAcceptedPoliciesRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface IAcceptedPoliciesResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    acceptedPolicies: IAcceptedPoliciesResult;
  };
  errors: TGraphqlErrors<undefined>;
}
