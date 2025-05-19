import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  IDepartmentUpdateInput,
  IDepartmentUpdateFilterInput,
} from '../resolverTypes/department-update.input';
import { IDepartmentUpdateResult } from '../resolverTypes/department-update.result';

export const departmentUpdateQuery = gql`
  mutation departmentUpdate(
    $filter: DepartmentUpdateFilterInput!
    $input: DepartmentUpdateInput!
  ) {
    departmentUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IDepartmentUpdateRequest
  extends IBaseGraphqlRequest<IDepartmentUpdateInput, IDepartmentUpdateFilterInput> {}

export interface IDepartmentUpdateResponse
  extends IBaseGraphqlResponse<IDepartmentUpdateInput> {
  data: {
    departmentUpdate: IDepartmentUpdateResult;
  };
  errors: TGraphqlErrors<IDepartmentUpdateInput>;
}
