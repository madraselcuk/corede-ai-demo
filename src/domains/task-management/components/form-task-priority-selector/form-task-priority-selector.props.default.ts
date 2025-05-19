import { i18n } from '@/localization'
import { FormTaskPrioritySelectorFieldProps } from './form-task-priority-selector.props'

export const formTaskPrioritySelectorFieldDefaultProps: Partial<FormTaskPrioritySelectorFieldProps> =
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
      content: i18n.t('enum:taskPriority_name'),
    },
  }
