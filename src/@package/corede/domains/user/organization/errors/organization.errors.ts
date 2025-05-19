import { IBaseError } from '@common_package';

export const billingInfoAlreadyCreated: IBaseError = {
  code: 100,
  name: 'BillingInfoAlreadyCreated',
  message: {
    en: 'Billing info is already created, please try to update',
    tr: 'Fatura bilgisi onceden olusturulmustur. Lutfen guncellemeyi deneyin.',
  },
};

export const billingInfoNotFound: IBaseError = {
  code: 100,
  name: 'BillingInfoNotFound',
  message: {
    en: 'Billing info must be created first',
    tr: 'Fatura bilgisi once olusturulmasi gerekmektedir',
  },
};

export const mainSubscriptionHasAlreadyPurchased: IBaseError = {
  code: 100,
  name: 'MainSubscriptionHasAlreadyPurchased',
  message: {
    en: 'MainSubscriptionHasAlreadyPurchased',
    tr: 'MainSubscriptionHasAlreadyPurchased',
  },
};

export const trialSubscriptionHasAlreadyBeenStarted: IBaseError = {
  code: 100,
  name: 'TrialSubscriptionHasAlreadyBeenStarted',
  message: {
    en: 'TrialSubscriptionHasAlreadyBeenStarted',
    tr: 'TrialSubscriptionHasAlreadyBeenStarted',
  },
};

export const trialSubscriptionHasNotBeenStarted: IBaseError = {
  code: 100,
  name: 'TrialSubscriptionHasNotBeenStarted',
  message: {
    en: 'TrialSubscriptionHasNotBeenStarted',
    tr: 'TrialSubscriptionHasNotBeenStarted',
  },
};

export const trialSubscriptionIsNotOngoing: IBaseError = {
  code: 100,
  name: 'TrialSubscriptionIsNotOngoing',
  message: {
    en: 'TrialSubscriptionIsNotOngoing',
    tr: 'TrialSubscriptionIsNotOngoing',
  },
};
