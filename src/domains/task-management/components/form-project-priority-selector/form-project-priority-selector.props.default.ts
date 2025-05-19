import { i18n } from '@/localization'
import { FormProjectPrioritySelectorFieldProps } from './form-project-priority-selector.props'

export const formProjectPrioritySelectorFieldDefaultProps: Partial<FormProjectPrioritySelectorFieldProps> =
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
      content: i18n.t('enum:projectPriority_name'),
    },
  }
