'use client'

import { Container, Title } from '@/components/shared/co'
import { useI18n } from '@/localization/hooks/useI18n'
import { FaqCategoryCreateFormContainer } from '..'
import FaqCategoryCreateFormUI from '../base/faq-category-create-form.ui'

export const FaqCategoryCreateUI = () => {
  const { t } = useI18n()
  return (
    <Container>
      <Title title={t('faq:faqCategoryCreateTitle')} />
      <FaqCategoryCreateFormContainer>
        {(props) => <FaqCategoryCreateFormUI {...props} />}
      </FaqCategoryCreateFormContainer>
    </Container>
  )
}
