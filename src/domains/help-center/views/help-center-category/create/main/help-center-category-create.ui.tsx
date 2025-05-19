'use client'

import { Container, Title } from '@/components/shared/co'
import { useI18n } from '@/localization/hooks/useI18n'
import { HelpCenterCategoryCreateFormContainer } from '..'
import HelpCenterCategoryCreateFormUI from '../base/help-center-category-create-form.ui'

export const HelpCenterCategoryCreateUI = () => {
  const { t } = useI18n()
  return (
    <Container>
      <Title title={t('helpCenter:helpCenterCategoryCreateTitle')} />
      <HelpCenterCategoryCreateFormContainer>
        {(props) => <HelpCenterCategoryCreateFormUI {...props} />}
      </HelpCenterCategoryCreateFormContainer>
    </Container>
  )
}
