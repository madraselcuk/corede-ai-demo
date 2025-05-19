import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IAcceptPolicyInput } from '../resolverTypes/accept-policy.input';
import { IAcceptPolicyResult } from '../resolverTypes/accept-policy.result';

export const acceptPolicyQuery = gql`
  mutation acceptPolicy($input: AcceptPolicyInput!) {
    acceptPolicy(input: $input) {
      _id
    }
  }
`;

export interface IAcceptPolicyRequest
  extends IBaseGraphqlRequest<IAcceptPolicyInput> {}

export interface IAcceptPolicyResponse
  extends IBaseGraphqlResponse<IAcceptPolicyInput> {
  data: {
    acceptPolicy: IAcceptPolicyResult;
  };
  errors: TGraphqlErrors<IAcceptPolicyInput>;
}
