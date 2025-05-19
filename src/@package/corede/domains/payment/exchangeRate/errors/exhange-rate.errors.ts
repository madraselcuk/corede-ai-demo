import { IBaseError } from '@common_package';

export const manualExchangeRateNotFound: IBaseError = {
  code: 100,
  name: 'ManualExchangeRateNotFound',
  message: {
    en: 'Manuel exchange rate not found',
    tr: 'Manuel doviz kuru bulunamadi',
  },
};

export const paymentProductNotFound: IBaseError = {
  code: 100,
  name: 'PaymentProductNotFound',
  message: {
    en: 'The specified payment product was not found.',
    tr: 'Belirtilen ödeme ürünü bulunamadı.',
  },
};

export const recurringIntervalIsRequired: IBaseError = {
  code: 100,
  name: 'RecurringIntervalIsRequired',
  message: {
    en: 'A recurring interval is required for this operation.',
    tr: 'Bu işlem için bir tekrarlama aralığı gereklidir.',
  },
};

export const pricingForRecurringIntervalIsRequired: IBaseError = {
  code: 100,
  name: 'PricingForRecurringIntervalIsRequired',
  message: {
    en: 'Pricing information for the recurring interval is required.',
    tr: 'Tekrarlayan aralık için fiyatlandırma bilgisi gereklidir.',
  },
};
