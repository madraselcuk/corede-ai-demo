import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IExchangeRateRetrieveForPaymentProductInput,
  IExchangeRateRetrieveForPaymentProductResult,
} from "../resolverTypes";

export const exchangeRateRetrieveForPaymentProductQuery = gql`
  query exchangeRateRetrieveForPaymentProduct(
    $input: ExchangeRateRetrieveForPaymentProductInput!
  ) {
    exchangeRateRetrieveForPaymentProduct(input: $input) {
      rate
    }
  }
`;

export interface IExchangeRateRetrieveForPaymentProductRequest
  extends IBaseGraphqlRequest<IExchangeRateRetrieveForPaymentProductInput> {}

export interface IExchangeRateRetrieveForPaymentProductResponse
  extends IBaseGraphqlResponse<IExchangeRateRetrieveForPaymentProductInput> {
  data: {
    exchangeRateRetrieveForPaymentProduct: IExchangeRateRetrieveForPaymentProductResult;
  };
  errors: TGraphqlErrors<IExchangeRateRetrieveForPaymentProductInput>;
}
