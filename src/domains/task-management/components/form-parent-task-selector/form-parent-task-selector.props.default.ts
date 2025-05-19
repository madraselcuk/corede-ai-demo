import { i18n } from '@/localization'
import { FormParentTaskSelectorProps } from './form-parent-task-selector.props'

export const formParentTaskSelectorDefaultProps: Partial<FormParentTaskSelectorProps> =
  {
    label: {
      content: i18n.t('taskManagement:parentTask'),
    },
  }
