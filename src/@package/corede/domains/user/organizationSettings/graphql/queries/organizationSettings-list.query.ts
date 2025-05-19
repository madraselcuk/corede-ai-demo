import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { IOrganizationSettingsListResult } from "../resolverTypes/organizationSettings-list.result";
import { IOrganizationSettingsListInput } from "../resolverTypes";
import { organizationSettingsListItemResultFragment } from "./organizationSettings-list.item.result.fragment";

export const organizationSettingsListQuery = gql`
  ${organizationSettingsListItemResultFragment}

  query organizationSettingsList($input: OrganizationSettingsListInput) {
    organizationSettingsList(input: $input) {
      data {
        ...OrganizationSettingsListItemResultFragment
      }
      count
    }
  }
`;

export interface IOrganizationSettingsListRequest
  extends IBaseGraphqlRequest<IOrganizationSettingsListInput, undefined> {}

export interface IOrganizationSettingsListResponse
  extends IBaseGraphqlResponse<IOrganizationSettingsListInput> {
  data: {
    organizationSettingsList: IOrganizationSettingsListResult;
  };
  errors: TGraphqlErrors<IOrganizationSettingsListInput>;
}
