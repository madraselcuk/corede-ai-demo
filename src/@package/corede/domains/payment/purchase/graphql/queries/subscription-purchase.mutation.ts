import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  ISubscriptionPurchaseInput,
  ISubscriptionPurchaseResult,
} from "../resolverTypes";
import { baseOrderEntityFragment } from "../../../order";

export const subscriptionPurchaseQuery = gql`
  ${baseOrderEntityFragment}

  mutation subscriptionPurchase($input: SubscriptionPurchaseInput!) {
    subscriptionPurchase(input: $input) {
      order {
        ...BaseOrderEntityFragment
      }
    }
  }
`;

export interface ISubscriptionPurchaseRequest
  extends IBaseGraphqlRequest<ISubscriptionPurchaseInput> {}

export interface ISubscriptionPurchaseResponse
  extends IBaseGraphqlResponse<ISubscriptionPurchaseInput> {
  data: {
    subscriptionPurchase: ISubscriptionPurchaseResult;
  };
  errors: TGraphqlErrors<ISubscriptionPurchaseInput>;
}
