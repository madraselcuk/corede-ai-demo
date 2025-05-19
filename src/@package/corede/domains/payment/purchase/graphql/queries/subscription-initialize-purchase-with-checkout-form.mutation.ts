import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  ISubscriptionInitializePurchaseWithCheckoutFormInput,
  ISubscriptionInitializePurchaseWithCheckoutFormResult,
} from "../resolverTypes";

export const subscriptionInitializePurchaseWithCheckoutFormQuery = gql`
  mutation subscriptionInitializePurchaseWithCheckoutForm(
    $input: SubscriptionInitializePurchaseWithCheckoutFormInput!
  ) {
    subscriptionInitializePurchaseWithCheckoutForm(input: $input) {
      order {
        _id
      }
      checkoutFormContent
      paymentPageUrl
      payWithIyzicoPageUrl
    }
  }
`;

export interface ISubscriptionInitializePurchaseWithCheckoutFormRequest
  extends IBaseGraphqlRequest<ISubscriptionInitializePurchaseWithCheckoutFormInput> {}

export interface ISubscriptionInitializePurchaseWithCheckoutFormResponse
  extends IBaseGraphqlResponse<ISubscriptionInitializePurchaseWithCheckoutFormInput> {
  data: {
    subscriptionInitializePurchaseWithCheckoutForm: ISubscriptionInitializePurchaseWithCheckoutFormResult;
  };
  errors: TGraphqlErrors<ISubscriptionInitializePurchaseWithCheckoutFormInput>;
}
