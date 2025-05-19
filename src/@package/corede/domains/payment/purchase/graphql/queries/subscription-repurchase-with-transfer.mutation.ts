import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  ISubscriptionRepurchaseWithTransferInput,
  ISubscriptionRepurchaseWithTransferResult,
} from "../resolverTypes";
import { baseOrderEntityFragment } from "../../../order";

export const subscriptionRepurchaseWithTransferQuery = gql`
  ${baseOrderEntityFragment}

  mutation subscriptionRepurchaseWithTransfer(
    $input: SubscriptionRepurchaseWithTransferInput!
  ) {
    subscriptionRepurchaseWithTransfer(input: $input) {
      order {
        ...BaseOrderEntityFragment
      }
    }
  }
`;

export interface ISubscriptionRepurchaseWithTransferRequest
  extends IBaseGraphqlRequest<ISubscriptionRepurchaseWithTransferInput> {}

export interface ISubscriptionRepurchaseWithTransferResponse
  extends IBaseGraphqlResponse<ISubscriptionRepurchaseWithTransferInput> {
  data: {
    subscriptionRepurchaseWithTransfer: ISubscriptionRepurchaseWithTransferResult;
  };
  errors: TGraphqlErrors<ISubscriptionRepurchaseWithTransferInput>;
}
