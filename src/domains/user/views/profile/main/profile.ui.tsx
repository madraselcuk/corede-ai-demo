'use client'

import ProfileFormContainer from '../profile-form.container'
import { ProfileFormUI } from './profile-form.ui'
import { useI18n } from '@/localization/hooks/useI18n'
import { Title, Container } from '@/components/shared/co'

export const ProfileUI = () => {
  const { t } = useI18n()

  return (
    <Container>
      <Title title={t('user:myProfile')} />

      <ProfileFormContainer>
        {(props) => <ProfileFormUI {...props} />}
      </ProfileFormContainer>
    </Container>
  )
}
