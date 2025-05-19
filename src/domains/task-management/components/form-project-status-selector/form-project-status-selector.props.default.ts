import { i18n } from '@/localization'
import { FormProjectStatusSelectorFieldProps } from './form-project-status-selector.props'

export const formProjectStatusSelectorFieldDefaultProps: Partial<FormProjectStatusSelectorFieldProps> =
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
      content: i18n.t('enum:projectStatus_name'),
    },
  }
