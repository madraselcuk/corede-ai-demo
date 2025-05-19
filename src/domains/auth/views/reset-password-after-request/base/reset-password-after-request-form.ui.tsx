'use client'
import { FormPasswordFieldGroupV2 } from '@/components/molecules/form-password-field/form-password-field-v2'
import { ResetPasswordAfterRequestFormContainerUIProps } from '../reset-password-after-request-form.container'
import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'

export const ResetPasswordAfterRequestFormUI = ({
  form,
  handleResetPasswordAfterRequestSubmit,
  isLoading,
  navigateToSignIn,
}: ResetPasswordAfterRequestFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <>
      {/* Before request reset password */}
      <Form onSubmit={form.handleSubmit(handleResetPasswordAfterRequestSubmit)}>
        {/* Email Field */}
        <FormPasswordFieldGroupV2 form={form} />
        <FormPasswordFieldGroupV2 form={form} hookName="input.passwordAgain" />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!form.formState.isValid}
          loading={isLoading || form.formState.isSubmitting}
        >
          {t('common:submit')}
        </Button>

        {/* go back to sign in */}
        <div>
          <span onClick={navigateToSignIn}>{t('auth:backToLogin')}</span>
        </div>
      </Form>
    </>
  )
}
