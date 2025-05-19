'use client'
import { TFAVerifyFormContainer } from '../tfa-verify-form.container'
import { TFAVerifyFormUI } from './2FA-verify-form.ui'

export const TFAVerifyUI = () => {
  return (
    <div>
      <TFAVerifyFormContainer>
        {(props) => <TFAVerifyFormUI {...props} />}
      </TFAVerifyFormContainer>
    </div>
  )
}
