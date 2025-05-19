import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IDepartmentDeleteInput } from '../resolverTypes/department-delete.input';
import { IDepartmentDeleteResult } from '../resolverTypes/department-delete.result';

export const deleteDepartmentQuery = gql`
  mutation departmentDelete($input: DepartmentDeleteInput!) {
    departmentDelete(input: $input) {
      success
    }
  }
`;

export interface IDepartmentDeleteRequest
  extends IBaseGraphqlRequest<IDepartmentDeleteInput> {}

export interface IDepartmentDeleteResponse
  extends IBaseGraphqlResponse<IDepartmentDeleteInput> {
  data: {
    departmentDelete: IDepartmentDeleteResult;
  };
  errors: TGraphqlErrors<IDepartmentDeleteInput>;
}
