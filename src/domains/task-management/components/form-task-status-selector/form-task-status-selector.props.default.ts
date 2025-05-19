import { i18n } from '@/localization'
import { FormTaskStatusSelectorFieldProps } from './form-task-status-selector.props'

export const formTaskStatusSelectorFieldDefaultProps: Partial<FormTaskStatusSelectorFieldProps> =
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
      content: i18n.t('enum:taskStatus_name'),
    },
  }
