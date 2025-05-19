'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { Title, Container } from '@/components/shared/co'
import { FaqCategoryDetailContainer } from '../faq-category-detail.container'
import { FaqCategoryDetailContent } from './faq-category-detail-container.ui'

export const FaqCategoryDetailUI = () => {
  const { t } = useI18n()

  return (
    <Container>
      <Title title={t('faq:faqCategoryDetailTitle')} />
      <FaqCategoryDetailContainer>
        {(props) => <FaqCategoryDetailContent {...props} />}
      </FaqCategoryDetailContainer>
    </Container>
  )
}
