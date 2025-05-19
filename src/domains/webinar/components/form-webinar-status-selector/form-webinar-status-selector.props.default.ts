import { i18n } from '@/localization'
import { FormWebinarStatusSelectorFieldProps } from './form-webinar-status-selector.props'

export const formWebinarStatusSelectorFieldDefaultProps: Partial<FormWebinarStatusSelectorFieldProps> =
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
      content: i18n.t('enum:webinarStatus_name'),
    },
  }
