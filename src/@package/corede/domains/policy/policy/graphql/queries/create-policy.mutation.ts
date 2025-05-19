import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { ICreatePolicyInput } from '../resolverTypes/create-policy.input';
import { ICreatePolicyResult } from '../resolverTypes/create-policy.result';

export const createPolicyQuery = gql`
  mutation createPolicy($input: CreatePolicyInput!) {
    createPolicy(input: $input) {
      _id
    }
  }
`;

export interface ICreatePolicyRequest
  extends IBaseGraphqlRequest<ICreatePolicyInput> {}

export interface ICreatePolicyResponse
  extends IBaseGraphqlResponse<ICreatePolicyInput> {
  data: {
    createPolicy: ICreatePolicyResult;
  };
  errors: TGraphqlErrors<ICreatePolicyInput>;
}
