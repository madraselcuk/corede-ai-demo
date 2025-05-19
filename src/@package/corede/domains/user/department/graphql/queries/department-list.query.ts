import { gql } from 'graphql-tag';

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import { IDepartmentListInput } from '../resolverTypes/department-list.input';
import { IDepartmentListResult } from '../resolverTypes/department-list.result';
import { departmentListItemResultFragment } from './department-list-item-result.fragment';

export const departmentListQuery = gql`
  ${departmentListItemResultFragment}

  query departmentList($input: DepartmentListInput) {
    departmentList(input: $input) {
      data {
        ...DepartmentListItemResultFragment
      }
      count
    }
  }
`;

export interface IDepartmentListRequest
  extends IBaseGraphqlRequest<IDepartmentListInput, undefined> {}

export interface IDepartmentListResponse
  extends IBaseGraphqlResponse<IDepartmentListInput> {
  data: {
    departmentList: IDepartmentListResult;
  };
  errors: TGraphqlErrors<IDepartmentListInput>;
}
