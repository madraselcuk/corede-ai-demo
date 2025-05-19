'use client'

import HelpCenterDetailContainer from '../help-center-detail.container'
import HelpCenterDetailContent from './help-center-detail-container.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { Title, Container } from '@/components/shared/co'

export const HelpCenterDetailUI = () => {
  const { t } = useI18n()

  return (
    <Container>
      <Title title={t('helpCenter:helpCenterDetailTitle')} />
      <HelpCenterDetailContainer>
        {(props) => <HelpCenterDetailContent {...props} />}
      </HelpCenterDetailContainer>
    </Container>
  )
}
