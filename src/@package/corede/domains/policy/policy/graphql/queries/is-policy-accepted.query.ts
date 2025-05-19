import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IIsPolicyAcceptedInput } from '../resolverTypes/is-policy-accepted.input';
import { IIsPolicyAcceptedResult } from '../resolverTypes/is-policy-accepted.result';

export const isPolicyAcceptedQuery = gql`
  query IsPolicyAccepted($input: IsPolicyAcceptedInput!) {
    isPolicyAccepted(input: $input) {
      result
    }
  }
`;

export interface IIsPolicyAcceptedRequest
  extends IBaseGraphqlRequest<IIsPolicyAcceptedInput, undefined> {}

export interface IIsPolicyAcceptedResponse
  extends IBaseGraphqlResponse<IIsPolicyAcceptedInput> {
  data: {
    isPolicyAccepted: IIsPolicyAcceptedResult;
  };
  errors: TGraphqlErrors<IIsPolicyAcceptedInput>;
}
