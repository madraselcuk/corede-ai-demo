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
      <FormEmailFieldGroupV2
        form={form}
        hookName="input.email"
        label={t('auth:emailAddress')}
        className="w-72"
        inputProps={{
          placeholder: t('auth:emailAddress'),
        }}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={!form.formState.isValid}
        loading={isSending || form.formState.isSubmitting}
      >
        {t('auth:resendConfirmation')}
      </Button>

      {/* Go to sign in */}
      <div className="flex items-center gap-1 justify-center mt-4">
        <span className="text-sm text-gray-600 dark:text-gray-500 text-center">
          {t('auth:goToSignIn')}
        </span>
        <a className="text-sm text-primary" onClick={navigateToSignIn}>
          {' '}
          <span className="text-sm text-primary cursor-pointer">
            {t('auth:signIn')}
          </span>
        </a>
      </div>
    </Form>
  )
}

export default ResendConfirmationFormUI
