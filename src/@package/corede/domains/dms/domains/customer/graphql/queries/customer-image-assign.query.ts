import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileAssignInput,
  IEntityFileAssignResult,
} from "@common_package";

export const customerImageAssignQuery = gql`
  mutation customerImageAssign($input: EntityFileAssignInput!) {
    customerImageAssign(input: $input) {
      success
    }
  }
`;

export interface ICustomerImageAssignRequest
  extends IBaseGraphqlRequest<IEntityFileAssignInput> {}

export interface ICustomerImageAssignResponse
  extends IBaseGraphqlResponse<IEntityFileAssignInput> {
  data: {
    customerImageAssign: IEntityFileAssignResult;
  };
  errors: TGraphqlErrors<IEntityFileAssignInput>;
}
