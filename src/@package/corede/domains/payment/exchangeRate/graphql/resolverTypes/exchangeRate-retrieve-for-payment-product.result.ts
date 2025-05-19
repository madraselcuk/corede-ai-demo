import { Currency } from "@common_package";
import { RecurringInterval } from "../../../common";

export interface IExchangeRateRetrieveForPaymentProductInput {
  paymentProductId: string;
  recurringInterval?: RecurringInterval;
  fromCurrency: Currency;
  toCurrency: Currency;
}
