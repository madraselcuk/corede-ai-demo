'use client'

import FaqDetailContainer from '../faq-detail.container'
import FaqDetailContent from './faq-detail-container.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { Title, Container } from '@/components/shared/co'

export const FaqDetailUI = () => {
  const { t } = useI18n()

  return (
    <Container>
      <Title title={t('faq:faqDetailTitle')} />
      <FaqDetailContainer>
        {(props) => <FaqDetailContent {...props} />}
      </FaqDetailContainer>
    </Container>
  )
}
