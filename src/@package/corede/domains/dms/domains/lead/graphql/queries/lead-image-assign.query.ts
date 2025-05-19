import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileAssignInput,
  IEntityFileAssignResult,
} from "@common_package";

export const leadImageAssignQuery = gql`
  mutation leadImageAssign($input: EntityFileAssignInput!) {
    leadImageAssign(input: $input) {
      success
    }
  }
`;

export interface ILeadImageAssignRequest
  extends IBaseGraphqlRequest<IEntityFileAssignInput> {}

export interface ILeadImageAssignResponse
  extends IBaseGraphqlResponse<IEntityFileAssignInput> {
  data: {
    leadImageAssign: IEntityFileAssignResult;
  };
  errors: TGraphqlErrors<IEntityFileAssignInput>;
}
