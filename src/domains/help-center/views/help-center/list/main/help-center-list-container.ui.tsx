'use client'

import { HelpCenterListUIComponentProps } from '../help-center-list.container'
import { FuncContainerUIForListWithDataTableTemplate } from '@/components/template/func-container-ui-for-list-with-data-table/func-container-ui-for-list-with-data-table.template'

export const HelpCenterListTableUI = (props: HelpCenterListUIComponentProps) => {
  return (
    <FuncContainerUIForListWithDataTableTemplate
      title="helpCenter:helpCenterListTitle"
      createButtonTranslationKey="helpCenter:helpCenterCreateTitle"
      {...props}
    />
  )
}

export default HelpCenterListTableUI
