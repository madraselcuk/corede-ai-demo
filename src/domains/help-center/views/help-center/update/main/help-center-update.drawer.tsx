'use client'

import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { HelpCenterUpdateFormContainer } from '../help-center-update-form.container'
import { HelpCenterUpdateFormUI } from './help-center-update-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'

export const HelpCenterUpdateDrawer = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()
  return (
    <EntityActionDrawer {...props} title={t('helpCenter:helpCenterUpdateTitle')}>
      <HelpCenterUpdateFormContainer
        entityId={entityId}
        onUpdateSuccess={() => {
          notifyOnSuccess({ entity: t('helpCenter:helpCenter'), actionType: 'update' })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <HelpCenterUpdateFormUI {...contentProps} uiType="drawer" />
        )}
      </HelpCenterUpdateFormContainer>
    </EntityActionDrawer>
  )
}
