'use client'

import { ResendConfirmationFormContainerUIProps } from '../resend-confirmation-form.container'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'
import Button from '@/components/ui/Button'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'

export const ResendConfirmationFormUI = ({
  form,
  handleResendConfirmationSubmit,
  isSending,
  navigateToSignIn,
}: ResendConfirmationFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <Form onSubmit={form.handleSubmit(handleResendConfirmationSubmit)}>
      {/* Email Field */}
      <FormEmailFieldGroupV2 form={form} hookName="input.email" />

      {/* Forget Password */}
      <a onClick={navigateToSignIn}>{t('auth:signIn')}</a>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={!form.formState.isValid}
        loading={isSending || form.formState.isSubmitting}
      >
        {t('auth:signIn')}
      </Button>
    </Form>
  )
}

export default ResendConfirmationFormUI
