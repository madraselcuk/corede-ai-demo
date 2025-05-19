'use client'

import { SignUpVerifyFormContainer } from '../sign-up-verify-form.container'
import { SignUpVerifyFormUI } from './sign-up-verify-form.ui'

export const SignUpVerifyUI = () => {
  return (
    <div>
      <SignUpVerifyFormContainer>
        {(props) => <SignUpVerifyFormUI {...props} />}
      </SignUpVerifyFormContainer>
    </div>
  )
}
