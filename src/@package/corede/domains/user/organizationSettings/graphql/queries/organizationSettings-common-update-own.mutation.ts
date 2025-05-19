import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IOrganizationSettingsCommonUpdateOwnInput } from "../resolverTypes/organizationSettings-common-update-own.input";
import { IOrganizationSettingsCommonUpdateOwnResult } from "../resolverTypes/organizationSettings-common-update-own.result";

export const organizationSettingsCommonUpdateOwnQuery = gql`
  mutation organizationSettingsCommonUpdateOwn(
    $input: OrganizationSettingsCommonUpdateOwnInput!
  ) {
    organizationSettingsCommonUpdateOwn(input: $input) {
      _id
    }
  }
`;

export interface IOrganizationSettingsCommonUpdateOwnRequest
  extends IBaseGraphqlRequest<IOrganizationSettingsCommonUpdateOwnInput> {}

export interface IOrganizationSettingsCommonUpdateOwnResponse
  extends IBaseGraphqlResponse<IOrganizationSettingsCommonUpdateOwnInput> {
  data: {
    organizationSettingsCommonUpdateOwn: IOrganizationSettingsCommonUpdateOwnResult;
  };
  errors: TGraphqlErrors<IOrganizationSettingsCommonUpdateOwnInput>;
}
