import { RequestResetPasswordFormContainerUIProps } from '../request-reset-password-form.container'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'
import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { Label } from '@/components/ui/Label/label'
import { useI18n } from '@/localization/hooks/useI18n'

export const RequestResetPasswordFormUI = ({
  form,
  handleRequestResetPasswordSubmit,
  handleResendCodeSubmit,
  isLoading,
  navigateToSignIn,
  forgotPasswordCodeIsSent,
}: RequestResetPasswordFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <>
      {/* Before request reset password */}
      <Form onSubmit={form.handleSubmit(handleRequestResetPasswordSubmit)}>
        {/* Email Field */}
        <FormEmailFieldGroupV2 form={form} />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!form.formState.isValid}
          loading={isLoading || form.formState.isSubmitting}
        >
          {t('auth:submit')}
        </Button>

        {/* go back to sign in */}
        <div>
          {t('auth:rememberPassword')}
          <span onClick={navigateToSignIn}>{t('auth:backToLogin')}</span>
        </div>
      </Form>

      {/* After successful request reset password */}
      <div className={!forgotPasswordCodeIsSent ? 'hidden' : ''}>
        {/* resend code */}
        <span>
          <Label>{t('auth:didNotReceiveCode')}</Label>
          <span onClick={form.handleSubmit(handleResendCodeSubmit)}>
            {t('auth:resendCode')}
          </span>
        </span>
      </div>
    </>
  )
}
