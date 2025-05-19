'use client'
import { ResetPasswordAfterRequestFormContainer } from '../reset-password-after-request-form.container'
import { ResetPasswordAfterRequestFormUI } from './reset-password-after-request-form.ui'

export const ResetPasswordAfterRequestUI = () => {
  return (
    <div>
      <ResetPasswordAfterRequestFormContainer>
        {(props) => <ResetPasswordAfterRequestFormUI {...props} />}
      </ResetPasswordAfterRequestFormContainer>
    </div>
  )
}
