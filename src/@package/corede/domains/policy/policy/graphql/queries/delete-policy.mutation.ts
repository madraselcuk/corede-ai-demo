import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IDeletePolicyInput } from '../resolverTypes/delete-policy.input';
import { IDeletePolicyResult } from '../resolverTypes/delete-policy.result';

export const deletePolicyQuery = gql`
  mutation deletePolicy($input: DeletePolicyInput!) {
    deletePolicy(input: $input) {
      success
    }
  }
`;

export interface IDeletePolicyRequest
  extends IBaseGraphqlRequest<IDeletePolicyInput> {}

export interface IDeletePolicyResponse
  extends IBaseGraphqlResponse<IDeletePolicyInput> {
  data: {
    deletePolicy: IDeletePolicyResult;
  };
  errors: TGraphqlErrors<IDeletePolicyInput>;
}
