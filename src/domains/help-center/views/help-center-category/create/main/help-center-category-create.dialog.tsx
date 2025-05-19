'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionViewBaseProps } from '@/components/interface'
import { HelpCenterCategoryCreateFormContainer } from '..'
import { HelpCenterCategoryCreateFormUI } from './help-center-category-create-form.ui'

export const HelpCenterCategoryCreateDialog = (props: EntityActionViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog
      title={t('helpCenter:helpCenterCreateTitle')}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <HelpCenterCategoryCreateFormContainer
        onCreateSuccess={() => {
          notifyOnSuccess({ entity: t('helpCenter:helpCenterCategory') })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <HelpCenterCategoryCreateFormUI {...contentProps} uiType="dialog" />
        )}
      </HelpCenterCategoryCreateFormContainer>
    </EntityActionDialog>
  )
}
