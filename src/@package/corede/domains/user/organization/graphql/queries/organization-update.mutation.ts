import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IOrganizationUpdateInput,
  IOrganizationUpdateFilterInput,
} from "../resolverTypes/organization-update.input";
import { IOrganizationUpdateResult } from "../resolverTypes/organization-update.result";

export const organizationUpdateQuery = gql`
  mutation organizationUpdate(
    $filter: OrganizationUpdateFilterInput!
    $input: OrganizationUpdateInput!
  ) {
    organizationUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IOrganizationUpdateRequest
  extends IBaseGraphqlRequest<
    IOrganizationUpdateInput,
    IOrganizationUpdateFilterInput
  > {}

export interface IOrganizationUpdateResponse
  extends IBaseGraphqlResponse<IOrganizationUpdateInput> {
  data: {
    organizationUpdate: IOrganizationUpdateResult;
  };
  errors: TGraphqlErrors<IOrganizationUpdateInput>;
}
