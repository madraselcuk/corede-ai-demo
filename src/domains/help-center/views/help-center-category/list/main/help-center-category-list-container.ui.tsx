'use client'

import { HelpCenterCategoryListUIComponentProps } from '../help-center-category-list.container'
import { FuncContainerUIForListWithDataTableTemplate } from '@/components/template/func-container-ui-for-list-with-data-table/func-container-ui-for-list-with-data-table.template'

export const HelpCenterCategoryListTableUI = (
  props: HelpCenterCategoryListUIComponentProps,
) => {
  return (
    <FuncContainerUIForListWithDataTableTemplate
      title="helpCenter:helpCenterCategoryListTitle"
      createButtonTranslationKey="helpCenter:helpCenterCategoryCreateTitle"
      {...props}
    />
  )
}

export default HelpCenterCategoryListTableUI
