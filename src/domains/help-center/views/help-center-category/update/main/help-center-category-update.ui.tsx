'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { Title, Container } from '@/components/shared/co'
import HelpCenterCategoryUpdateFormUI from '../base/help-center-category-update-form.ui'
import { HelpCenterCategoryUpdateFormContainer } from '../help-center-category-update-form.container'

export const HelpCenterCategoryUpdateUI = ({ entityId }: { entityId: string }) => {
  const { t } = useI18n()

  return (
    <Container>
      <Title title={t('helpCenter:helpCenterCategoryUpdateTitle')} />
      <HelpCenterCategoryUpdateFormContainer entityId={entityId}>
        {(props) => <HelpCenterCategoryUpdateFormUI {...props} />}
      </HelpCenterCategoryUpdateFormContainer>
    </Container>
  )
}
