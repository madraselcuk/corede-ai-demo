'use client'

import { HelpCenterCreateFormContainer } from '../help-center-create-form.container'
import { HelpCenterCreateFormUI } from './help-center-create-form.ui'
import { Container, Title } from '@/components/shared/co'
import { useI18n } from '@/localization/hooks/useI18n'

export const HelpCenterCreateUI = () => {
  const { t } = useI18n()
  return (
    <Container>
      <Title title={t('helpCenter:helpCenterCreateTitle')} />
      <HelpCenterCreateFormContainer>
        {(props) => <HelpCenterCreateFormUI {...props} />}
      </HelpCenterCreateFormContainer>
    </Container>
  )
}
