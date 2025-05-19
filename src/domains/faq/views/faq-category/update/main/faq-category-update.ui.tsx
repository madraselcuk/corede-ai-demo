'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { Title, Container } from '@/components/shared/co'
import FaqCategoryUpdateFormUI from '../base/faq-category-update-form.ui'
import { FaqCategoryUpdateFormContainer } from '../faq-category-update-form.container'

export const FaqCategoryUpdateUI = ({ entityId }: { entityId: string }) => {
  const { t } = useI18n()

  return (
    <Container>
      <Title title={t('faq:faqCategoryUpdateTitle')} />
      <FaqCategoryUpdateFormContainer entityId={entityId}>
        {(props) => <FaqCategoryUpdateFormUI {...props} />}
      </FaqCategoryUpdateFormContainer>
    </Container>
  )
}
