import { IBaseError } from '@common_package';

export const organizationInfoNotFound: IBaseError = {
  code: 1,
  name: 'organizationInfoNotFound',
  message: {
    tr: 'Organizasyon Bilgisi bulunamadi.',
    en: 'Organization info could not be found.',
  },
};
