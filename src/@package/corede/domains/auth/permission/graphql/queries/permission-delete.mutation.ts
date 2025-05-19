import gql from 'graphql-tag';
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IPermissionDeleteInput } from '../resolverTypes/permission-delete.input';
import { IPermissionDeleteResult } from '../resolverTypes/permission-delete.result';

export const permissionDeleteQuery = gql`
  mutation permissionDelete($input: PermissionDeleteInput!) {
    permissionDelete(input: $input) {
      success
    }
  }
`;

export interface IPermissionDeleteRequest
  extends IBaseGraphqlRequest<IPermissionDeleteInput> {}

export interface IPermissionDeleteResponse
  extends IBaseGraphqlResponse<IPermissionDeleteInput> {
  data: {
    permissionDelete: IPermissionDeleteResult;
  };
  errors: TGraphqlErrors<IPermissionDeleteInput>;
}
