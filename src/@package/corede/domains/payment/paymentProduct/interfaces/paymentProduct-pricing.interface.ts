import { Currency } from '@common_package';

export interface IPaymentProductSalesPrice {
  currency: Currency;
  exchangeRate: number; // (CoCRM Settings)
  applicableCountries: string[];
}

export interface IPaymentProductPricing {
  basePrice: number;
  discountRate: number;
  discountedPrice: number;
  salesPrices: IPaymentProductSalesPrice[];
}
