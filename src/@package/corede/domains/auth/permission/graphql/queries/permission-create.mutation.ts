import gql from 'graphql-tag';
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IPermissionCreateInput } from '../resolverTypes/permission-create.input';
import { IPermissionCreateResult } from '../resolverTypes/permission-create.result';

export const permissionCreateQuery = gql`
  mutation permissionCreate($input: PermissionCreateInput!) {
    permissionCreate(input: $input) {
      _id
    }
  }
`;

export interface IPermissionCreateRequest
  extends IBaseGraphqlRequest<IPermissionCreateInput> {}

export interface IPermissionCreateResponse
  extends IBaseGraphqlResponse<IPermissionCreateInput> {
  data: {
    permissionCreate: IPermissionCreateResult;
  };
  errors: TGraphqlErrors<IPermissionCreateInput>;
}
