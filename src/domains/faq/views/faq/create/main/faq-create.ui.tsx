'use client'

import { FaqCreateFormContainer } from '../faq-create-form.container'
import { FaqCreateFormUI } from './faq-create-form.ui'
import { Container, Title } from '@/components/shared/co'
import { useI18n } from '@/localization/hooks/useI18n'

export const FaqCreateUI = () => {
  const { t } = useI18n()
  return (
    <Container>
      <Title title={t('faq:faqCreateTitle')} />
      <FaqCreateFormContainer>
        {(props) => <FaqCreateFormUI {...props} />}
      </FaqCreateFormContainer>
    </Container>
  )
}
