import { gql } from 'graphql-tag';
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from '@common_package';
import { TGraphqlErrors } from '@common_package';
import { IPermissionListInput } from '../resolverTypes/permission-list.input';
import { IPermissionListResult } from '../resolverTypes/permission-list.result';
import { permissionListItemResultFragment } from './permission-list-item.result.fragment';

export const permissionListQuery = gql`
  ${permissionListItemResultFragment}

  query permissionList($input: PermissionListInput) {
    permissionList(input: $input) {
      data {
        ...PermissionListItemResultFragment
      }
      count
    }
  }
`;

export interface IPermissionListRequest
  extends IBaseGraphqlRequest<IPermissionListInput, undefined> {}

export interface IPermissionListResponse
  extends IBaseGraphqlResponse<IPermissionListInput> {
  data: {
    permissionList: IPermissionListResult;
  };
  errors: TGraphqlErrors<IPermissionListInput>;
}
