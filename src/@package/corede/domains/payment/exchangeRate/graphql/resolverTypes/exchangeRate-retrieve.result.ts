import { Currency } from "@common_package";

export interface IExchangeRateRetrieveInput {
  fromCurrency: Currency;
  toCurrency: Currency;
}
