import i18n from '@/localization/i18next'
import { z } from 'zod'

export function createEmailSchema(required?: boolean): z.ZodString {
  let result = z.string()
  if (required) {
    result = result.min(1, i18n.t('common:requiredEmailMessage'))
  }
  result = result.email(i18n.t('common:invalidEmailMessage'))
  return result
}
