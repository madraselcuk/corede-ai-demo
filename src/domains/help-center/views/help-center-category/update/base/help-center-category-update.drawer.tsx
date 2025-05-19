'use client'

import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { notifyOnSuccess } from '@/components/organisms/query-result-toast/notify-on-success'
import { useI18n } from '@/localization/hooks/useI18n'
import { HelpCenterCategoryUpdateFormContainer } from '../help-center-category-update-form.container'
import HelpCenterCategoryUpdateFormUI from './help-center-category-update-form.ui'

export const HelpCenterCategoryUpdateDrawer = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()
  return (
    <EntityActionDrawer {...props} title={t('helpCenter:helpCenterCategoryUpdateTitle')}>
      <HelpCenterCategoryUpdateFormContainer
        entityId={entityId}
        onUpdateSuccess={() => {
          notifyOnSuccess({
            entity: t('helpCenter:helpCenterCategory'),
            actionType: 'update',
          })
          props.onClose()
        }}
      >
        {(contentProps) => (
          <HelpCenterCategoryUpdateFormUI {...contentProps} uiType="drawer" />
        )}
      </HelpCenterCategoryUpdateFormContainer>
    </EntityActionDrawer>
  )
}
