import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import {
  IDashboardEntityCountsInput,
  IDashboardEntityCountsResult,
} from "../resolverTypes";

/**
 * @param params.fragment
 * @param params.fragmentName needs to be unique
 */
export function dashboardEntityCountsQuery(): DocumentNode {
  return gql`
    query dashboardEntityCounts {
      totalLeadCount: leadListCount {
        count
      }
      totalCustomerCount: customerListCount {
        count
      }
      totalEstimateCount: estimateListCount {
        count
      }
      totalProposalCount: proposalListCount {
        count
      }
    }
  `;
}

export interface IDashboardEntityCountsRequest
  extends IBaseGraphqlRequest<IDashboardEntityCountsInput, undefined> {}

export interface IDashboardEntityCountsResponse
  extends IBaseGraphqlResponse<IDashboardEntityCountsInput> {
  data: {
    dashboardEntityCounts: IDashboardEntityCountsResult;
  };
  errors: TGraphqlErrors<IDashboardEntityCountsInput>;
}
