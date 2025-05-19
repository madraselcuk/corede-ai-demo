'use client'

import FaqDetailContainer from '../faq-detail.container'
import FaqDetailContent from './faq-detail-container.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDrawer } from '@/components/organisms/entity-action-view/entity-action.drawer'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'

export const FaqDetailDrawer = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDrawer {...props} title={t('faq:faqDetailTitle')}>
      <FaqDetailContainer entityId={entityId}>
        {(contentProps) => <FaqDetailContent {...contentProps} />}
      </FaqDetailContainer>
    </EntityActionDrawer>
  )
}
