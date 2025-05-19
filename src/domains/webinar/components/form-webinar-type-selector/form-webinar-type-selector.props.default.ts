import { i18n } from '@/localization'
import { FormWebinarTypeSelectorFieldProps } from './form-webinar-type-selector.props'

export const formWebinarTypeSelectorFieldDefaultProps: Partial<FormWebinarTypeSelectorFieldProps> =
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
      content: i18n.t('enum:webinarType_name'),
    },
  }
