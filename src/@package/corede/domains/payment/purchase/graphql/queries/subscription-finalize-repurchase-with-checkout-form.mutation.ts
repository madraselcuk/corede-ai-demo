import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  ISubscriptionFinalizeRepurchaseWithCheckoutFormInput,
  ISubscriptionFinalizeRepurchaseWithCheckoutFormResult,
} from "../resolverTypes";
import { baseOrderEntityFragment } from "../../../order";

export const subscriptionFinalizeRepurchaseWithCheckoutFormQuery = gql`
  ${baseOrderEntityFragment}

  mutation subscriptionFinalizeRepurchaseWithCheckoutForm(
    $input: SubscriptionFinalizeRepurchaseWithCheckoutFormInput!
  ) {
    subscriptionFinalizeRepurchaseWithCheckoutForm(input: $input) {
      order {
        ...BaseOrderEntityFragment
      }
    }
  }
`;

export interface ISubscriptionFinalizeRepurchaseWithCheckoutFormRequest
  extends IBaseGraphqlRequest<ISubscriptionFinalizeRepurchaseWithCheckoutFormInput> {}

export interface ISubscriptionFinalizeRepurchaseWithCheckoutFormResponse
  extends IBaseGraphqlResponse<ISubscriptionFinalizeRepurchaseWithCheckoutFormInput> {
  data: {
    subscriptionFinalizeRepurchaseWithCheckoutForm: ISubscriptionFinalizeRepurchaseWithCheckoutFormResult;
  };
  errors: TGraphqlErrors<ISubscriptionFinalizeRepurchaseWithCheckoutFormInput>;
}
