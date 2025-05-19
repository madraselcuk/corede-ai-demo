import { IBaseError } from '@common_package';

export const mimiTypeCanNotBeAssigned: IBaseError = {
  code: 1000,
  name: 'mimiTypeCanNotBeAssigned',
  message: {
    en: 'mimeType has default value, can not be changed',
    tr: 'mimeType varsayilan degere sahiptir, degistirilemez.',
  },
};

export const mimiTypeNotFound: IBaseError = {
  code: 1000,
  name: 'mimiTypeNotFound',
  message: {
    en: 'mimeType is mandatory',
    tr: 'mimeType zorunludur',
  },
};

export const mimiTypeIsInvalid: IBaseError = {
  code: 1000,
  name: 'mimiTypeIsInvalid',
  message: {
    en: 'mimeType is invalid',
    tr: 'mimeType gecersizdir',
  },
};

export const invalidFileFieldType: IBaseError = {
  code: 100,
  name: 'invalidFileFieldType',
  message: {
    en: 'Field must be type of array',
    tr: 'Alanin liste olmasi gerekiyor',
  },
};

export const alreadyDeleted: IBaseError = {
  code: 100,
  name: 'alreadyDeleted',
  message: {
    en: 'Already deleted',
    tr: 'Silinmistir.',
  },
};
