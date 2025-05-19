import gql from 'graphql-tag';
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IRoleDeleteInput } from '../resolverTypes/role-delete.input';
import { IRoleDeleteResult } from '../resolverTypes/role-delete.result';

export const roleDeleteQuery = gql`
  mutation roleDelete($input: RoleDeleteInput!) {
    roleDelete(input: $input) {
      success
    }
  }
`;

export interface IRoleDeleteRequest
  extends IBaseGraphqlRequest<IRoleDeleteInput> {}

export interface IRoleDeleteResponse
  extends IBaseGraphqlResponse<IRoleDeleteInput> {
  data: {
    roleDelete: IRoleDeleteResult;
  };
  errors: TGraphqlErrors<IRoleDeleteInput>;
}
