'use client'

import FaqDetailContainer from '../faq-detail.container'
import FaqDetailContent from './faq-detail-container.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { EntityActionDialog } from '@/components/organisms/entity-action-view/entity-action.dialog'
import { EntityActionWithIdViewBaseProps } from '@/components/interface'

export const FaqDetailDialog = ({
  entityId,
  ...props
}: EntityActionWithIdViewBaseProps) => {
  const { t } = useI18n()

  return (
    <EntityActionDialog title={t('faq:faqDetailTitle')} {...props}>
      <FaqDetailContainer entityId={entityId}>
        {(contentProps) => <FaqDetailContent {...contentProps} />}
      </FaqDetailContainer>
    </EntityActionDialog>
  )
}
