import { i18n } from '@/localization'
import { FormGenderSelectorFieldProps } from './form-gender-selector.props'

export const formGenderSelectorFieldDefaultProps: Partial<FormGenderSelectorFieldProps> =
  {
    inputProps: {
      select: {
        search: {
          noSearch: true,
        },
      },
    },
    containerProps: {
      className: 'flex flex-col',
    },
    label: {
      content: i18n.t('enum:gender_name'),
    },
  }
