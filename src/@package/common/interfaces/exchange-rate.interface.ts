import { Currency } from "../enums";

export interface IExchangeRate {
  fromCurrency: Currency;
  toCurrency: Currency;
  rate: number;
  updatedAt: Date;
}
