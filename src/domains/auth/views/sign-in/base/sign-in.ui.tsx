'use client'

import SignInFormContainer from '../sign-in-form.container'
import { SignInFormUI } from './sign-in-form.ui'

export const SignInUI = () => {
  return (
    <div>
      <SignInFormContainer>
        {(props) => <SignInFormUI {...props} />}
      </SignInFormContainer>
    </div>
  )
}
