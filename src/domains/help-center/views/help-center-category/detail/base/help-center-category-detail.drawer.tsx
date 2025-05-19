'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { HelpCenterCategoryDetailContainer } from '..'
import HelpCenterCategoryDetailContent from './help-center-category-detail-container.ui'

export const HelpCenterCategoryDetailDrawer = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer {...props} title={t('helpCenter:helpCenterCategoryDetailTitle')}>
      <HelpCenterCategoryDetailContainer entityId={entityId}>
        {(contentProps) => <HelpCenterCategoryDetailContent {...contentProps} />}
      </HelpCenterCategoryDetailContainer>
    </EntityActionDrawer>
  )
}
