'use client'

import { EntityActionViewBaseProps } from '@/components/interface'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { useI18n } from '@/localization/hooks/useI18n'
import { HelpCenterCategoryCreateFormContainer } from '..'
import HelpCenterCategoryCreateFormUI from './help-center-category-create-form.ui'

export const HelpCenterCategoryCreateDrawer = (props: EntityActionViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer {...props} title={t('helpCenter:helpCenterCategoryCreateTitle')}>
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
