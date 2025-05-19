import { gql } from 'graphql-tag';

import { IBaseGraphqlRequest, IBaseGraphqlResponse, TGraphqlErrors } from '@common_package';
import { IDepartmentDetailInput } from '../resolverTypes/department-detail.input';
import { IDepartmentDetailResult } from '../resolverTypes/department-detail.result';
import { departmentDetailResultFragment } from './department-detail-result.fragment';

export const departmentDetailQuery = gql`
  ${departmentDetailResultFragment}

  query departmentDetail($input: DepartmentDetailInput!) {
    departmentDetail(input: $input) {
      ...DepartmentDetailResultFragment
    }
  }
`;

export interface IDepartmentDetailRequest
  extends IBaseGraphqlRequest<IDepartmentDetailInput, undefined> {}

export interface IDepartmentDetailResponse extends IBaseGraphqlResponse<IDepartmentDetailInput> {
  data: {
    departmentDetail: IDepartmentDetailResult;
  };
  errors: TGraphqlErrors<IDepartmentDetailInput>;
}
