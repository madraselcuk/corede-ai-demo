'use client'

import SignUpFormContainer from '@/domains/auth/views/sign-up/sign-up-form.container'
import SignUpFormUI from '@/domains/auth/views/sign-up/base/sign-up-form.ui'

export const SignUpUI = () => {
  return (
    <div>
      <SignUpFormContainer>
        {(props) => <SignUpFormUI {...props} />}
      </SignUpFormContainer>
    </div>
  )
}
