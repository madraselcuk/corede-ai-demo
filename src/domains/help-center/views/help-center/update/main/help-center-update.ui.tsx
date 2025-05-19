'use client'

import { HelpCenterUpdateFormContainer } from '../help-center-update-form.container'
import { HelpCenterUpdateFormUI } from './help-center-update-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { Title, Container } from '@/components/shared/co'

export const HelpCenterUpdateUI = ({ entityId }: { entityId: string }) => {
  const { t } = useI18n()

  return (
    <Container>
      <Title title={t('helpCenter:helpCenterUpdateTitle')} />
      <HelpCenterUpdateFormContainer entityId={entityId}>
        {(props) => <HelpCenterUpdateFormUI {...props} />}
      </HelpCenterUpdateFormContainer>
    </Container>
  )
}
