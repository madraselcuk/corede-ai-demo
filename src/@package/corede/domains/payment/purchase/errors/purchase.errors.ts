import { IBaseError } from "@common_package";

export const purchaseFailed: IBaseError = {
  code: 100,
  name: "PurchaseFailed",
  message: {
    en: "Purchase failed, please try again or contact to support.",
    tr: "Odeme basarisiz, lutfen yeniden deneyin veya yardima basvurun.",
  },
};

export const cardIsNotRegisteredToOrganization: IBaseError = {
  code: 100,
  name: "CardIsNotRegisteredToOrganization",
  message: {
    en: "The card is not registered to organization",
    tr: "Kart organization adina kayitli degildir.",
  },
};

export const billingInfoMissing: IBaseError = {
  code: 100,
  name: "BillingInfoMissing",
  message: {
    en: "Billing info must be filled first",
    tr: "Once fatura bilgileri doldurulmalidir.",
  },
};

export const paymentProductIsNotFound: IBaseError = {
  code: 100,
  name: "PaymentProductIsNotFound",
  message: {
    en: "Product is not found.",
    tr: "Urun bulunamadi.",
  },
};

export const subscriptionIsNotFound: IBaseError = {
  code: 100,
  name: "SubscriptionIsNotFound",
  message: {
    en: "The specified subscription was not found.",
    tr: "Belirtilen abonelik bulunamadı.",
  },
};
