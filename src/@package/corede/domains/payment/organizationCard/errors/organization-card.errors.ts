import { IBaseError } from '@common_package';

export const noCardFound: IBaseError = {
  code: 100,
  name: 'NoCardFound',
  message: {
    en: 'No card was found.',
    tr: 'Kart bulunamadı.',
  },
};

export const cardHasNotCreatedYet: IBaseError = {
  code: 100,
  name: 'CardHasNotCreatedYet',
  message: {
    en: 'Card can not be added before creating.',
    tr: 'Kart olusturulmadan once eklenemez.',
  },
};

export const registeredCardNotFound: IBaseError = {
  code: 100,
  name: 'RegisteredCardNotFound',
  message: {
    en: 'Registered card not found',
    tr: 'Kayitli kart bulunamadi',
  },
};

export const cardNotFound: IBaseError = {
  code: 100,
  name: 'CardNotFound',
  message: {
    en: 'Organization does not have referred card',
    tr: 'Organizasyon karta sahip degildir',
  },
};

export const cardIsSavedToSubscription: IBaseError = {
  code: 100,
  name: 'CardIsSavedToSubscription',
  message: {
    en: 'Credit card is saved for a subscription.',
    tr: 'Kredit karti bir abonelige baglanmistir. ',
  },
};
