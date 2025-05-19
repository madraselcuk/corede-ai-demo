import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IUpdatePolicyInput,
  IUpdatePolicyFilterInput,
} from '../resolverTypes/update-policy.input';
import { IUpdatePolicyResult } from '../resolverTypes/update-policy.result';

export const updatePolicyQuery = gql`
  mutation updatePolicy(
    $filter: UpdatePolicyFilterInput!
    $input: UpdatePolicyInput!
  ) {
    updatePolicy(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IUpdatePolicyRequest
  extends IBaseGraphqlRequest<IUpdatePolicyInput, IUpdatePolicyFilterInput> {}

export interface IUpdatePolicyResponse
  extends IBaseGraphqlResponse<IUpdatePolicyInput> {
  data: {
    updatePolicy: IUpdatePolicyResult;
  };
  errors: TGraphqlErrors<IUpdatePolicyInput>;
}
