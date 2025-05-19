'use client'

import SignUpFormContainer from '../sign-up-form.container'
import { SignUpFormUI } from './sign-up-form.ui'
import { containerVariants, itemVariants } from '../../../common/motion'

export const SignUpUI = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center items-center py-16">
      <SignUpFormContainer>
        {(props) => (
          <SignUpFormUI
            {...props}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
        )}
      </SignUpFormContainer>
    </div>
  )
}
