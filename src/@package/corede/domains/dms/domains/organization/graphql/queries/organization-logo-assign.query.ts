import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
  IEntityFileAssignOwnInput,
  IEntityFileAssignResult,
} from "@common_package";

export const organizationLogoAssignQuery = gql`
  mutation organizationLogoAssign($input: EntityFileAssignOwnInput!) {
    organizationLogoAssign(input: $input) {
      success
    }
  }
`;

export interface IOrganizationLogoAssignRequest
  extends IBaseGraphqlRequest<IEntityFileAssignOwnInput> {}

export interface IOrganizationLogoAssignResponse
  extends IBaseGraphqlResponse<IEntityFileAssignOwnInput> {
  data: {
    organizationLogoAssign: IEntityFileAssignResult;
  };
  errors: TGraphqlErrors<IEntityFileAssignOwnInput>;
}
