'use client'

import { HelpCenterCreateFormContainer } from '../help-center-create-form.container'
import { HelpCenterCreateFormUI } from './help-center-create-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { EntityActionViewBaseProps } from '@/components/interface'

export const HelpCenterCreateDrawer = (props: EntityActionViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer {...props} title={t('helpCenter:helpCenterCreateTitle')}>
      <HelpCenterCreateFormContainer
        onCreateSuccess={() => {
          notifyOnSuccess({ entity: t('helpCenter:helpCenter') })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <HelpCenterCreateFormUI {...contentProps} uiType="drawer" />
        )}
      </HelpCenterCreateFormContainer>
    </EntityActionDrawer>
  )
}
