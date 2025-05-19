import { IBaseError } from '@common_package';

export const emailIsSpam: IBaseError = {
  code: 1,
  name: 'EmailIsSpam',
  message: {
    en: 'Email is a spam email!',
    tr: 'Mail spam olabilir.',
  },
};

export const escalatedUserRequired: IBaseError = {
  code: 2,
  name: 'EscalatedUserRequired',
  message: {
    en: 'EscalatedUser is required while updating status to Escalated',
    tr: 'Escalated durumuna guncellerken EscalatedUser gereklidir.',
  },
};

export const statusIsRequired: IBaseError = {
  code: 3,
  name: 'StatusIsRequired',
  message: {
    en: 'Status is required if note is present',
    tr: 'Not var ise durum gereklidir.',
  },
};
