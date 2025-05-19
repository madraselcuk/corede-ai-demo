import { RequestResetPasswordFormContainer } from '../request-reset-password-form.container'
import { RequestResetPasswordFormUI } from './request-reset-password-form.ui'

export const RequestResetPasswordUI = () => {
  return (
    <div>
      <RequestResetPasswordFormContainer>
        {(props) => <RequestResetPasswordFormUI {...props} />}
      </RequestResetPasswordFormContainer>
    </div>
  )
}
