import { IBaseError } from '@common_package'

export const tagInUser: IBaseError = {
  code: 102,
  name: 'tagInUser',
  message: {
    en: 'The tag is currently in use and cannot be modified.',
    tr: 'Etiket şu anda kullanımda ve değiştirilemez.',
  },
}

export const tagNotFoundError: IBaseError = {
  code: 2003,
  name: 'tagNotFound',
  message: {
    en: 'The specified tag was not found.',
    tr: 'Belirtilen etiket bulunamadı.',
  },
}

export const tagAlreadyExist: IBaseError = {
  code: 2003,
  name: 'tagAlreadyExist',
  message: {
    en: 'The tag already exists.',
    tr: 'Etiket zaten mevcut.',
  },
}
