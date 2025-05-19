'use client'

import { FaqCategoryListUIComponentProps } from '../faq-category-list.container'
import { FuncContainerUIForListWithDataTableTemplate } from '@/components/template/func-container-ui-for-list-with-data-table/func-container-ui-for-list-with-data-table.template'

export const FaqCategoryListTableUI = (
  props: FaqCategoryListUIComponentProps,
) => {
  return (
    <FuncContainerUIForListWithDataTableTemplate
      title="faq:faqCategoryListTitle"
      createButtonTranslationKey="faq:faqCategoryCreateTitle"
      {...props}
    />
  )
}

export default FaqCategoryListTableUI
