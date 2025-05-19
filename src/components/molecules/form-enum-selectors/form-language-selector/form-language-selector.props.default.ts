import { i18n } from '@/localization'
import { FormLanguageSelectorFieldProps } from './form-language-selector.props'

export const formLanguageSelectorFieldDefaultProps: Partial<FormLanguageSelectorFieldProps> =
  {
    containerProps: {
      className: 'flex flex-col',
    },
    label: {
      content: i18n.t('enums:language_name'),
    },
  }
