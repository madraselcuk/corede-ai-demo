import gql from 'graphql-tag';
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import {
  IUserRoleUpdateInput,
  IUserRoleUpdateFilterInput,
} from '../resolverTypes/user-role-update.input';
import { IUserRoleUpdateResult } from '../resolverTypes/user-role-update.result';

export const userRoleUpdateQuery = gql`
  mutation userRoleUpdate(
    $filter: UserRoleUpdateFilterInput!
    $input: UserRoleUpdateInput!
  ) {
    userRoleUpdate(filter: $filter, input: $input) {
      success
    }
  }
`;

export interface IUserRoleUpdateRequest
  extends IBaseGraphqlRequest<
    IUserRoleUpdateInput,
    IUserRoleUpdateFilterInput
  > {}

export interface IUserRoleUpdateResponse
  extends IBaseGraphqlResponse<IUserRoleUpdateInput> {
  data: {
    userRoleUpdate: IUserRoleUpdateResult;
  };
  errors: TGraphqlErrors<IUserRoleUpdateInput>;
}
