import { IBaseError } from '@common_package';

export const forbiddenFilterRoleType: IBaseError = {
  code: 100,
  name: 'ForbiddenFilterRoleType',
  message: {
    en: 'Role type can not be filtered',
    tr: 'Rol turu filtrelenemez',
  },
};

export const forbiddenRoleType: IBaseError = {
  code: 100,
  name: 'ForbiddenRoleType',
  message: {
    en: 'Role type can not used in role creation',
    tr: 'Rol turu rol olusturmada kullanilamaz.',
  },
};

export const organizationIsNotActive: IBaseError = {
  code: 100,
  name: 'OrganizationIsNotActive',
  message: {
    en: 'Organization is not active',
    tr: 'Organizasyon aktif değil',
  },
};
