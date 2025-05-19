'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { FaqCategoryDetailContent } from './faq-category-detail-container.ui'
import { FaqCategoryDetailContainer } from '../faq-category-detail.container'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'

export const FaqCategoryDetailDrawer = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer {...props} title={t('faq:faqCategoryDetailTitle')}>
      <FaqCategoryDetailContainer entityId={entityId}>
        {(contentProps) => <FaqCategoryDetailContent {...contentProps} />}
      </FaqCategoryDetailContainer>
    </EntityActionDrawer>
  )
}
