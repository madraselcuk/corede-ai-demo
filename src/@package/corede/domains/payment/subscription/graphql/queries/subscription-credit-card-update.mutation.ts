import { gql } from "graphql-tag";
import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  TGraphqlErrors,
} from "@common_package";

import { ISubscriptionCreditCardUpdateInput } from "../resolverTypes";

export const subscriptionCreditCardUpdateQuery = gql`
  mutation subscriptionCreditCardUpdate(
    $filter: EntityInput
    $input: SubscriptionCreditCardUpdateInput
  ) {
    subscriptionCreditCardUpdate(filter: $filter, input: $input) {
      success
    }
  }
`;

export interface ISubscriptionCreditCardUpdateRequest
  extends IBaseGraphqlRequest<ISubscriptionCreditCardUpdateInput, undefined> {}

export interface ISubscriptionCreditCardUpdateResponse
  extends IBaseGraphqlResponse<ISubscriptionCreditCardUpdateInput> {
  data: {
    subscriptionCreditCardUpdate: IBaseResult;
  };
  errors: TGraphqlErrors<ISubscriptionCreditCardUpdateInput>;
}
