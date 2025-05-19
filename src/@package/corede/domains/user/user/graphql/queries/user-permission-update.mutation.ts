import gql from 'graphql-tag';
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import {
  IUserPermissionUpdateFilterInput,
  IUserPermissionUpdateInput,
} from '../resolverTypes/user-permission-update.input';
import { IUserPermissionUpdateResult } from '../resolverTypes/user-permission-update.result';

export const userPermissionUpdateQuery = gql`
  mutation userPermissionUpdate(
    $filter: UserPermissionUpdateFilterInput!
    $input: UserPermissionUpdateInput!
  ) {
    userPermissionUpdate(filter: $filter, input: $input) {
      success
    }
  }
`;

export interface IUserPermissionUpdateRequest
  extends IBaseGraphqlRequest<
    IUserPermissionUpdateInput,
    IUserPermissionUpdateFilterInput
  > {}

export interface IUserPermissionUpdateResponse
  extends IBaseGraphqlResponse<IUserPermissionUpdateInput> {
  data: {
    userPermissionUpdate: IUserPermissionUpdateResult;
  };
  errors: TGraphqlErrors<IUserPermissionUpdateInput>;
}
