import { i18n } from '@/localization'
import { FormAuthorSelectorProps } from './form-author-selector.props'

export const formAuthorSelectorDefaultProps: Partial<FormAuthorSelectorProps> =
  {
    label: {
      content: i18n.t('blog:author'),
    },
  }
