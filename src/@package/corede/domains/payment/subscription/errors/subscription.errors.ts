import { IBaseError } from "@common_package";

export const organizationNotFound: IBaseError = {
  code: 100,
  name: "OrganizationNotFound",
  message: {
    en: "The specified organization was not found.",
    tr: "Belirtilen organizasyon bulunamadı.",
  },
};

export const registeredCreditCardNotFound: IBaseError = {
  code: 100,
  name: "RegisteredCreditCardNotFound",
  message: {
    en: "The registered credit card was not found.",
    tr: "Kayıtlı kredi kartı bulunamadı.",
  },
};

export const subscriptionNeedsToBePurchased: IBaseError = {
  code: 100,
  name: "SubscriptionNeedsToBePurchased",
  message: {
    en: "A subscription needs to be purchased to access this feature.",
    tr: "Bu özelliğe erişmek için bir abonelik satın alınmalıdır.",
  },
};

export const subscriptionPurchaseFailed: IBaseError = {
  code: 100,
  name: "SubscriptionPurchaseFailed",
  message: {
    en: "The subscription purchase failed. Please try again.",
    tr: "Abonelik satın alımı başarısız oldu. Lütfen tekrar deneyin.",
  },
};

export const subscriptionCancelled: IBaseError = {
  code: 100,
  name: "SubscriptionCancelled",
  message: {
    en: "The subscription is cancelled.",
    tr: "Abonelik iptal edildi.",
  },
};

export const subscriptionUpdatedToOngoingWithCancelled: IBaseError = {
  code: 100,
  name: "SubscriptionUpdatedToOngoingWithCancelled",
  message: {
    en: "The subscription is cancelled. Your account will be restricted when current payed period is over",
    tr: "Abonelik iptal edildi. Mevcut ödenen dönem sona erdiğinde hesabınız kısıtlanacak",
  },
};

export const noActiveSubscription: IBaseError = {
  code: 100,
  name: "NoActiveSubscription",
  message: {
    en: "No active subscription found.",
    tr: "Aktif bir abonelik bulunamadı.",
  },
};

export const activeSubscriptionAlreadyCancelled: IBaseError = {
  code: 100,
  name: "ActiveSubscriptionAlreadyCancelled",
  message: {
    en: "The active subscription has already been cancelled.",
    tr: "Aktif abonelik zaten iptal edilmiş.",
  },
};
