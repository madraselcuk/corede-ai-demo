import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  ISubscriptionInitializeRepurchaseWithCheckoutFormInput,
  ISubscriptionInitializeRepurchaseWithCheckoutFormResult,
} from "../resolverTypes";

export const subscriptionInitializeRepurchaseWithCheckoutFormQuery = gql`
  mutation subscriptionInitializeRepurchaseWithCheckoutForm(
    $input: SubscriptionInitializeRepurchaseWithCheckoutFormInput!
  ) {
    subscriptionInitializeRepurchaseWithCheckoutForm(input: $input) {
      order {
        _id
      }
      checkoutFormContent
      paymentPageUrl
      payWithIyzicoPageUrl
    }
  }
`;

export interface ISubscriptionInitializeRepurchaseWithCheckoutFormRequest
  extends IBaseGraphqlRequest<ISubscriptionInitializeRepurchaseWithCheckoutFormInput> {}

export interface ISubscriptionInitializeRepurchaseWithCheckoutFormResponse
  extends IBaseGraphqlResponse<ISubscriptionInitializeRepurchaseWithCheckoutFormInput> {
  data: {
    subscriptionInitializeRepurchaseWithCheckoutForm: ISubscriptionInitializeRepurchaseWithCheckoutFormResult;
  };
  errors: TGraphqlErrors<ISubscriptionInitializeRepurchaseWithCheckoutFormInput>;
}
