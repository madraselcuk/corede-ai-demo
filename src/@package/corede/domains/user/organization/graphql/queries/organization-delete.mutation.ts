import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IOrganizationDeleteInput } from "../resolverTypes/organization-delete.input";
import { IOrganizationDeleteResult } from "../resolverTypes/organization-delete.result";

export const organizationDeleteQuery = gql`
  mutation organizationDelete($input: OrganizationDeleteInput!) {
    organizationDelete(input: $input) {
      success
    }
  }
`;

export interface IOrganizationDeleteRequest
  extends IBaseGraphqlRequest<IOrganizationDeleteInput> {}

export interface IOrganizationDeleteResponse
  extends IBaseGraphqlResponse<IOrganizationDeleteInput> {
  data: {
    organizationDelete: IOrganizationDeleteResult;
  };
  errors: TGraphqlErrors<IOrganizationDeleteInput>;
}
