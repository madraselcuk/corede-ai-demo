import { CoSelectProps } from '../components/atoms/select/select.props'
import { i18n } from '@/localization'

export const selectTheme: Partial<CoSelectProps> = {
  triggerProps: {
    className:
      'flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white p-3 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200',
  },
  placeholderProps: {
    placeholder: i18n.t('common:selectPlaceholder'),
  },
  contentProps: {
    className: 'overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800',
  },
  viewPortProps: {
    className: 'p-2',
  },
  itemProps: {
    className:
      'flex cursor-pointer items-center justify-between rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700',
    classNameAddForSelected: 'font-semibold',
  },
}
