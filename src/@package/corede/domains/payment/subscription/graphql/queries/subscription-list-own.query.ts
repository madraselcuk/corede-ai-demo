import { gql } from "graphql-tag";
import { DocumentNode } from "graphql";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import {
  ISubscriptionListOwnInput,
  ISubscriptionListOwnResult,
} from "../resolverTypes";
import { subscriptionListOwnItemResultFragment } from "./subscription-list-own.item.result.fragment";

/**
 * @param params.fragment needs to be derived from `SubscriptionListOwnItemResult` fragment
 * @param params.fragmentName needs to be unique
 */
export function subscriptionListOwnQuery(params?: {
  fragment: DocumentNode;
  fragmentName: string;
}): DocumentNode {
  return gql`
    ${params?.fragment ?? subscriptionListOwnItemResultFragment}

    query subscriptionListOwn($input: SubscriptionListOwnInput) {
      subscriptionListOwn(input: $input) {
        data {
          ...${params?.fragmentName ?? "SubscriptionListOwnItemResultFragment"}
        }
        count
      }
    }
  `;
}

export interface ISubscriptionListOwnRequest
  extends IBaseGraphqlRequest<ISubscriptionListOwnInput, undefined> {}

export interface ISubscriptionListOwnResponse
  extends IBaseGraphqlResponse<ISubscriptionListOwnInput> {
  data: {
    subscriptionListOwn: ISubscriptionListOwnResult;
  };
  errors: TGraphqlErrors<ISubscriptionListOwnInput>;
}
