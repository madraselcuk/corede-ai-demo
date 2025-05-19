'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { Title, Container } from '@/components/shared/co'
import { HelpCenterCategoryDetailContainer } from '../help-center-category-detail.container'
import { HelpCenterCategoryDetailContent } from './help-center-category-detail-container.ui'

export const HelpCenterCategoryDetailUI = () => {
  const { t } = useI18n()

  return (
    <Container>
      <Title title={t('helpCenter:helpCenterCategoryDetailTitle')} />
      <HelpCenterCategoryDetailContainer>
        {(props) => <HelpCenterCategoryDetailContent {...props} />}
      </HelpCenterCategoryDetailContainer>
    </Container>
  )
}
