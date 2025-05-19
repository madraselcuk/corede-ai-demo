'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { FaqCategoryDetailContainer } from '../faq-category-detail.container'
import FaqCategoryDetailContent from './faq-category-detail-container.ui'

export const FaqCategoryDetailDialog = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog {...props} title={t('faq:faqCategoryDetailTitle')}>
      <FaqCategoryDetailContainer entityId={entityId}>
        {(contentProps) => <FaqCategoryDetailContent {...contentProps} />}
      </FaqCategoryDetailContainer>
    </EntityActionDialog>
  )
}
