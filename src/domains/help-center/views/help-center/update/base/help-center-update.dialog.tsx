'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { HelpCenterUpdateFormContainer } from '../help-center-update-form.container'
import { HelpCenterUpdateFormUI } from './help-center-update-form.ui'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'

export const HelpCenterUpdateDialog = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog {...props} title={t('helpCenter:helpCenterUpdateTitle')}>
      <HelpCenterUpdateFormContainer
        entityId={entityId}
        onUpdateSuccess={() => {
          notifyOnSuccess({ entity: t('helpCenter:helpCenter'), actionType: 'update' })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <HelpCenterUpdateFormUI {...contentProps} uiType="dialog" />
        )}
      </HelpCenterUpdateFormContainer>
    </EntityActionDialog>
  )
}
