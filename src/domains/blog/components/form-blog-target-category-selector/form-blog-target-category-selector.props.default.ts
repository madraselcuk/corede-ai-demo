import { i18n } from '@/localization'
import { FormBlogTargetCategorySelectorProps } from './form-blog-target-category-selector.props'

export const formBlogTargetCategorySelectorDefaultProps: Partial<FormBlogTargetCategorySelectorProps> =
  {
    label: {
      content: i18n.t('blog:targetCategory'),
    },
  }
