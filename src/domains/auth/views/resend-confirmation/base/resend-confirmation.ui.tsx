'use client'

import ResendConfirmationFormContainer from '../resend-confirmation-form.container'
import { ResendConfirmationFormUI } from './resend-confirmation-form.ui'

export const ResendConfirmationUI = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] gap-6  items-center justify-center text-center  py-16">
      <ResendConfirmationFormContainer>
        {(props) => <ResendConfirmationFormUI {...props} />}
      </ResendConfirmationFormContainer>
    </div>
  )
}
