import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import {
  ISubscriptionListInput,
  ISubscriptionListResult,
} from "../resolverTypes";
import { subscriptionListItemResultFragment } from "./subscription-list.item.result.fragment";

/**
 * @param params.fragment needs to be derived from `SubscriptionListItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function subscriptionListQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? subscriptionListItemResultFragment}

    query subscriptionList($input: SubscriptionListInput) {
      subscriptionList(input: $input) {
        data {
          ...${params?.fragmentName ?? "SubscriptionListItemResultFragment"}
        }
        count
      }
    }
  `;
}

export interface ISubscriptionListRequest
  extends IBaseGraphqlRequest<ISubscriptionListInput, undefined> {}

export interface ISubscriptionListResponse
  extends IBaseGraphqlResponse<ISubscriptionListInput> {
  data: {
    subscriptionList: ISubscriptionListResult;
  };
  errors: TGraphqlErrors<ISubscriptionListInput>;
}
