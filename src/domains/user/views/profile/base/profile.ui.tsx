'use client'

import ProfileFormContainer from '../profile-form.container'
import { ProfileFormUI } from './profile-form.ui'

export const ProfileUI = () => {
  return (
    <div>
      <div>
        <ProfileFormContainer>
          {(props) => <ProfileFormUI {...props} />}
        </ProfileFormContainer>
      </div>
    </div>
  )
}
