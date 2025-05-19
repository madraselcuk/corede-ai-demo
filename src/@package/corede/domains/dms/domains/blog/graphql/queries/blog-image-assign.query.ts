import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileAssignInput,
  IEntityFileAssignResult,
} from "@common_package";

export const blogImageAssignQuery = gql`
  mutation blogImageAssign($input: EntityFileAssignInput!) {
    blogImageAssign(input: $input) {
      success
    }
  }
`;

export interface IBlogImageAssignRequest
  extends IBaseGraphqlRequest<IEntityFileAssignInput> {}

export interface IBlogImageAssignResponse
  extends IBaseGraphqlResponse<IEntityFileAssignInput> {
  data: {
    blogImageAssign: IEntityFileAssignResult;
  };
  errors: TGraphqlErrors<IEntityFileAssignInput>;
}
