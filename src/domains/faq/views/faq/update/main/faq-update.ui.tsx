'use client'

import { FaqUpdateFormContainer } from '../faq-update-form.container'
import { FaqUpdateFormUI } from './faq-update-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { Title, Container } from '@/components/shared/co'

export const FaqUpdateUI = ({ entityId }: { entityId: string }) => {
  const { t } = useI18n()

  return (
    <Container>
      <Title title={t('faq:faqUpdateTitle')} />
      <FaqUpdateFormContainer entityId={entityId}>
        {(props) => <FaqUpdateFormUI {...props} />}
      </FaqUpdateFormContainer>
    </Container>
  )
}
