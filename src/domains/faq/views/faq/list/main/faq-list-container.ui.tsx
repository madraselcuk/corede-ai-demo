'use client'

import { FaqListUIComponentProps } from '../faq-list.container'
import { FuncContainerUIForListWithDataTableTemplate } from '@/components/template/func-container-ui-for-list-with-data-table/func-container-ui-for-list-with-data-table.template'

export const FaqListTableUI = (props: FaqListUIComponentProps) => {
  return (
    <FuncContainerUIForListWithDataTableTemplate
      title="faq:faqListTitle"
      createButtonTranslationKey="faq:faqCreateTitle"
      {...props}
    />
  )
}

export default FaqListTableUI
