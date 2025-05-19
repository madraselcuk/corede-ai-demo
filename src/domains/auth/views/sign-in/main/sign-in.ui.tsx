'use client'

import SignInFormContainer from '../sign-in-form.container'
import { SignInFormUI } from './sign-in-form.ui'
import { containerVariants, itemVariants } from '../../../common/motion'

export const SignInUI = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center items-center py-16 ">
      <SignInFormContainer>
        {(props) => (
          <SignInFormUI
            {...props}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
        )}
      </SignInFormContainer>
    </div>
  )
}
