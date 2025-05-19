import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IOrganizationListInput } from "../resolverTypes/organization-list.input";
import { IOrganizationListResult } from "../resolverTypes/organization-list.result";
import { organizationListItemResultFragment } from "./organization-list-item-result.fragment";

export const organizationListQuery = gql`
  ${organizationListItemResultFragment}

  query organizationList($input: OrganizationListInput) {
    organizationList(input: $input) {
      data {
        ...OrganizationListItemResultFragment
      }
      count
    }
  }
`;

export interface IOrganizationListRequest
  extends IBaseGraphqlRequest<IOrganizationListInput, undefined> {}

export interface IOrganizationListResponse
  extends IBaseGraphqlResponse<IOrganizationListInput> {
  data: {
    organizationList: IOrganizationListResult;
  };
  errors: TGraphqlErrors<IOrganizationListInput>;
}
