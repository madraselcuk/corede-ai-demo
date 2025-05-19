import { gql } from 'graphql-tag';
import { IBaseGraphqlRequest, IBaseGraphqlResponse } from '@common_package';
import { TGraphqlErrors } from '@common_package';
import { IPermissionDetailInput } from '../resolverTypes/permission-detail.input';
import { IPermissionDetailResult } from '../resolverTypes/permission-detail.result';
import { permissionDetailResultFragment } from './permission-detail.result.fragment';

export const permissionDetailQuery = gql`
  ${permissionDetailResultFragment}

  query permissionDetail($input: PermissionDetailInput!) {
    permissionDetail(input: $input) {
      ...PermissionDetailResultFragment
    }
  }
`;

export interface IPermissionDetailRequest
  extends IBaseGraphqlRequest<IPermissionDetailInput, undefined> {}

export interface IPermissionDetailResponse
  extends IBaseGraphqlResponse<IPermissionDetailInput> {
  data: {
    permissionDetail: IPermissionDetailResult;
  };
  errors: TGraphqlErrors<IPermissionDetailInput>;
}
