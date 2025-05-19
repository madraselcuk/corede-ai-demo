'use client'

import { HelpCenterCreateFormContainer } from '../help-center-create-form.container'
import { HelpCenterCreateFormUI } from './help-center-create-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionViewBaseProps } from '@/components/interface'

export const HelpCenterCreateDialog = (props: EntityActionViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog title={t('helpCenter:helpCenterCreateTitle')} {...props}>
      <HelpCenterCreateFormContainer
        onCreateSuccess={() => {
          notifyOnSuccess({ entity: t('helpCenter:helpCenter') })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <HelpCenterCreateFormUI {...contentProps} uiType="dialog" />
        )}
      </HelpCenterCreateFormContainer>
    </EntityActionDialog>
  )
}
