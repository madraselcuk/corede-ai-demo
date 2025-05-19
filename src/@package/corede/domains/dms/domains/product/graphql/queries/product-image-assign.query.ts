import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileAssignInput,
  IEntityFileAssignResult,
} from "@common_package";

export const productImageAssignQuery = gql`
  mutation productImageAssign($input: EntityFileAssignInput!) {
    productImageAssign(input: $input) {
      success
    }
  }
`;

export interface IProductImageAssignRequest
  extends IBaseGraphqlRequest<IEntityFileAssignInput> {}

export interface IProductImageAssignResponse
  extends IBaseGraphqlResponse<IEntityFileAssignInput> {
  data: {
    productImageAssign: IEntityFileAssignResult;
  };
  errors: TGraphqlErrors<IEntityFileAssignInput>;
}
