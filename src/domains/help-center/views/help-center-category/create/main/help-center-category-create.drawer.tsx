'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { EntityActionViewProps } from '@/components/interface'
import { HelpCenterCategoryCreateFormUI } from './help-center-category-create-form.ui'
import HelpCenterCategoryCreateFormContainer from '../help-center-category-create-form.container'

export const HelpCenterCategoryCreateDrawer = (props: EntityActionViewProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer
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
          <HelpCenterCategoryCreateFormUI {...contentProps} uiType="drawer" />
        )}
      </HelpCenterCategoryCreateFormContainer>
    </EntityActionDrawer>
  )
}
