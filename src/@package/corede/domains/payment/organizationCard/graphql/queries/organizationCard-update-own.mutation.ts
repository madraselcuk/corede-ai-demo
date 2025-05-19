import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IOrganizationCardUpdateOwnFilterInput,
  IOrganizationCardUpdateOwnInput,
} from "../resolverTypes";

export const organizationCardUpdateOwnQuery = gql`
  mutation organizationCardUpdateOwn(
    $filter: OrganizationCardUpdateOwnFilterInput!
    $input: OrganizationCardUpdateOwnInput!
  ) {
    organizationCardUpdateOwn(filter: $filter, input: $input) {
      success
    }
  }
`;

export interface IOrganizationCardUpdateOwnRequest
  extends IBaseGraphqlRequest<
    IOrganizationCardUpdateOwnInput,
    IOrganizationCardUpdateOwnFilterInput
  > {}

export interface IOrganizationCardUpdateOwnResponse
  extends IBaseGraphqlResponse<IOrganizationCardUpdateOwnInput> {
  data: {
    organizationCardUpdateOwn: IBaseResult;
  };
  errors: TGraphqlErrors<IOrganizationCardUpdateOwnInput>;
}
