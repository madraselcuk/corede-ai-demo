'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { HelpCenterCategoryDetailContainer } from '../help-center-category-detail.container'
import { HelpCenterCategoryDetailContent } from './help-center-category-detail-container.ui'

export const HelpCenterCategoryDetailDialog = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog title={t('helpCenter:helpCenterCategoryDetailTitle')} {...props}>
      <HelpCenterCategoryDetailContainer entityId={entityId}>
        {(contentProps) => <HelpCenterCategoryDetailContent {...contentProps} />}
      </HelpCenterCategoryDetailContainer>
    </EntityActionDialog>
  )
}
