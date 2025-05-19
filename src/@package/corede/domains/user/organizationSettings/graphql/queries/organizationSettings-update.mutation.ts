import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IOrganizationSettingsUpdateInput,
  IOrganizationSettingsUpdateFilterInput,
} from "../resolverTypes/organizationSettings-update.input";
import { IOrganizationSettingsUpdateResult } from "../resolverTypes/organizationSettings-update.result";

export const organizationSettingsUpdateQuery = gql`
  mutation organizationSettingsUpdate(
    $filter: OrganizationSettingsUpdateFilterInput!
    $input: OrganizationSettingsUpdateInput!
  ) {
    organizationSettingsUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IOrganizationSettingsUpdateRequest
  extends IBaseGraphqlRequest<IOrganizationSettingsUpdateInput, IOrganizationSettingsUpdateFilterInput> {}

export interface IOrganizationSettingsUpdateResponse
  extends IBaseGraphqlResponse<IOrganizationSettingsUpdateInput> {
  data: {
    organizationSettingsUpdate: IOrganizationSettingsUpdateResult;
  };
  errors: TGraphqlErrors<IOrganizationSettingsUpdateInput>;
}
