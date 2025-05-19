import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { DocumentNode } from "graphql";
import { organizationCardDetailOwnResultFragment } from "./organizationCard-detail-own.result.fragment";
import { IOrganizationCardDetailOwnResult } from "../resolverTypes";

/**
 * @param params.fragment needs to be derived from `OrganizationCardDetailOwnResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function organizationCardDetailOwnQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? organizationCardDetailOwnResultFragment}

    query organizationCardDetailOwn {
      organizationCardDetailOwn {
        ...${params?.fragmentName ?? "OrganizationCardDetailOwnResultFragment"}
      }
    }
  `;
}

export interface IOrganizationCardDetailOwnRequest
  extends IBaseGraphqlRequest<undefined, undefined> {}

export interface IOrganizationCardDetailOwnResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    organizationCardDetailOwn: IOrganizationCardDetailOwnResult;
  };
  errors: TGraphqlErrors<undefined>;
}
