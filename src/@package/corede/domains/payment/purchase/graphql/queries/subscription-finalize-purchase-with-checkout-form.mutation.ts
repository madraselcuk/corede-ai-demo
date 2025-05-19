import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  ISubscriptionFinalizePurchaseWithCheckoutFormInput,
  ISubscriptionFinalizePurchaseWithCheckoutFormResult,
} from "../resolverTypes";
import { baseOrderEntityFragment } from "../../../order";

export const subscriptionFinalizePurchaseWithCheckoutFormQuery = gql`
  ${baseOrderEntityFragment}

  mutation subscriptionFinalizePurchaseWithCheckoutForm(
    $input: SubscriptionFinalizePurchaseWithCheckoutFormInput!
  ) {
    subscriptionFinalizePurchaseWithCheckoutForm(input: $input) {
      order {
        ...BaseOrderEntityFragment
      }
    }
  }
`;

export interface ISubscriptionFinalizePurchaseWithCheckoutFormRequest
  extends IBaseGraphqlRequest<ISubscriptionFinalizePurchaseWithCheckoutFormInput> {}

export interface ISubscriptionFinalizePurchaseWithCheckoutFormResponse
  extends IBaseGraphqlResponse<ISubscriptionFinalizePurchaseWithCheckoutFormInput> {
  data: {
    subscriptionFinalizePurchaseWithCheckoutForm: ISubscriptionFinalizePurchaseWithCheckoutFormResult;
  };
  errors: TGraphqlErrors<ISubscriptionFinalizePurchaseWithCheckoutFormInput>;
}
