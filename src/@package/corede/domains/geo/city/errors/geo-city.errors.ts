import { IBaseError } from '@common_package';

export const stateNameMustExist: IBaseError = {
  code: 100,
  name: 'StateNameMustExist',
  message: {
    en: 'State name must be present in the filter',
    tr: 'Filtrede şehir ismi olmak zorunda',
  },
};
