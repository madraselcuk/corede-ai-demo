import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import { IDepartmentCreateInput } from '../resolverTypes/department-create.input';
import { IDepartmentCreateResult } from '../resolverTypes/department-create.result';

export const departmentCreateQuery = gql`
  mutation departmentCreate($input: DepartmentCreateInput!) {
    departmentCreate(input: $input) {
      _id
    }
  }
`;

export interface IDepartmentCreateRequest
  extends IBaseGraphqlRequest<IDepartmentCreateInput> {}

export interface IDepartmentCreateResponse
  extends IBaseGraphqlResponse<IDepartmentCreateInput> {
  data: {
    departmentCreate: IDepartmentCreateResult;
  };
  errors: TGraphqlErrors<IDepartmentCreateInput>;
}
