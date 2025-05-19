'use client'

import { HelpCenterCreateFormContainer } from '../help-center-create-form.container'
import { HelpCenterCreateFormUI } from './help-center-create-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { EntityActionViewProps } from '@/components/interface'

export const HelpCenterCreateDrawer = (props: EntityActionViewProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer
      title={t('helpCenter:helpCenterCreateTitle')}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
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
