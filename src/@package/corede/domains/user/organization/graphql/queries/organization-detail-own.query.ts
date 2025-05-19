import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { IOrganizationDetailResult } from "../resolverTypes/organization-detail.result";
import { organizationDetailResultFragment } from "./organization-detail-result.fragment";

export const organizationDetailOwnQuery = gql`
  ${organizationDetailResultFragment}

  query organizationDetailOwn {
    organizationDetailOwn {
      ...OrganizationDetailResultFragment
    }
  }
`;

export interface IOrganizationDetailOwnRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface IOrganizationDetailOwnResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    organizationDetailOwn: IOrganizationDetailResult;
  };
  errors: TGraphqlErrors<undefined>;
}
