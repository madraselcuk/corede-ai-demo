import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IExchangeRateRetrieveInput,
  IExchangeRateRetrieveResult,
} from "../resolverTypes";

export const exchangeRateRetrieveQuery = gql`
  query exchangeRateRetrieve($input: ExchangeRateRetrieveInput!) {
    exchangeRateRetrieve(input: $input) {
      rate
    }
  }
`;

export interface IExchangeRateRetrieveRequest
  extends IBaseGraphqlRequest<IExchangeRateRetrieveInput> {}

export interface IExchangeRateRetrieveResponse
  extends IBaseGraphqlResponse<IExchangeRateRetrieveInput> {
  data: {
    exchangeRateRetrieve: IExchangeRateRetrieveResult;
  };
  errors: TGraphqlErrors<IExchangeRateRetrieveInput>;
}
