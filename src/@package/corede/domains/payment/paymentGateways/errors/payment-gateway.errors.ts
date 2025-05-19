import { IBaseError } from '@common_package';

export const invalidRecurringInterval: IBaseError = {
  code: 100,
  name: 'InvalidRecurringInterval',
  message: {
    en: 'The specified recurring interval is invalid.',
    tr: 'Belirtilen tekrarlama aralığı geçersiz.',
  },
};
