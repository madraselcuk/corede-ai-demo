import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  ISubscriptionRepurchaseInput,
  ISubscriptionRepurchaseResult,
} from "../resolverTypes";
import { baseOrderEntityFragment } from "../../../order";

export const subscriptionRepurchaseQuery = gql`
  ${baseOrderEntityFragment}

  mutation subscriptionRepurchase($input: SubscriptionRepurchaseInput!) {
    subscriptionRepurchase(input: $input) {
      order {
        ...BaseOrderEntityFragment
      }
    }
  }
`;

export interface ISubscriptionRepurchaseRequest
  extends IBaseGraphqlRequest<ISubscriptionRepurchaseInput> {}

export interface ISubscriptionRepurchaseResponse
  extends IBaseGraphqlResponse<ISubscriptionRepurchaseInput> {
  data: {
    subscriptionRepurchase: ISubscriptionRepurchaseResult;
  };
  errors: TGraphqlErrors<ISubscriptionRepurchaseInput>;
}
