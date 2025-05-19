import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  ISubscriptionPurchaseWithMoneyTransferInput,
  ISubscriptionPurchaseWithMoneyTransferResult,
} from "../resolverTypes";
import { baseOrderEntityFragment } from "../../../order";

export const subscriptionPurchaseWithMoneyTransferQuery = gql`
  ${baseOrderEntityFragment}

  mutation subscriptionPurchaseWithMoneyTransfer(
    $input: SubscriptionPurchaseWithMoneyTransferInput!
  ) {
    subscriptionPurchaseWithMoneyTransfer(input: $input) {
      order {
        ...BaseOrderEntityFragment
      }
    }
  }
`;

export interface ISubscriptionPurchaseWithMoneyTransferRequest
  extends IBaseGraphqlRequest<ISubscriptionPurchaseWithMoneyTransferInput> {}

export interface ISubscriptionPurchaseWithMoneyTransferResponse
  extends IBaseGraphqlResponse<ISubscriptionPurchaseWithMoneyTransferInput> {
  data: {
    subscriptionPurchaseWithMoneyTransfer: ISubscriptionPurchaseWithMoneyTransferResult;
  };
  errors: TGraphqlErrors<ISubscriptionPurchaseWithMoneyTransferInput>;
}
