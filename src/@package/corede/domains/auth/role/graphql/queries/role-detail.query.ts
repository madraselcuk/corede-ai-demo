import { gql } from 'graphql-tag';
import { IBaseGraphqlRequest, IBaseGraphqlResponse, TGraphqlErrors } from '@common_package';
import { IRoleDetailInput } from '../resolverTypes/role-detail.input';
import { IRoleDetailResult } from '../resolverTypes/role-detail.result';
import { roleDetailResultFragment } from './role-detail.result.fragment';

export const roleDetailQuery = gql`
  ${roleDetailResultFragment}

  query roleDetail($input: RoleDetailInput!) {
    roleDetail(input: $input) {
      ...RoleDetailResultFragment
    }
  }
`;

export interface IRoleDetailRequest
  extends IBaseGraphqlRequest<IRoleDetailInput, undefined> {}

export interface IRoleDetailResponse extends IBaseGraphqlResponse<IRoleDetailInput> {
  data: {
    roleDetail: IRoleDetailResult;
  };
  errors: TGraphqlErrors<IRoleDetailInput>;
}
