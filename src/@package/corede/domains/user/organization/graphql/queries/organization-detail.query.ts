import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IOrganizationDetailInput } from "../resolverTypes/organization-detail.input";
import { IOrganizationDetailResult } from "../resolverTypes/organization-detail.result";
import { organizationDetailResultFragment } from "./organization-detail-result.fragment";

export const organizationDetailQuery = gql`
  ${organizationDetailResultFragment}

  query organizationDetail($input: OrganizationDetailInput!) {
    organizationDetail(input: $input) {
      ...OrganizationDetailResultFragment
    }
  }
`;

export interface IOrganizationDetailRequest
  extends IBaseGraphqlRequest<IOrganizationDetailInput, undefined> {}

export interface IOrganizationDetailResponse
  extends IBaseGraphqlResponse<IOrganizationDetailInput> {
  data: {
    organizationDetail: IOrganizationDetailResult;
  };
  errors: TGraphqlErrors<IOrganizationDetailInput>;
}
