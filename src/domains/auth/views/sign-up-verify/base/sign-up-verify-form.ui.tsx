'use client'

import { FormOtpFieldGroupV2 } from '@/components/molecules/form-otp-field/form-otp-field-v2'
import { SignUpVerifyFormContainerUIProps } from '../sign-up-verify-form.container'
import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'

export const SignUpVerifyFormUI = ({
  form,
  handleSignUpVerifySubmit,
  isLoading,
  navigateToSignIn,
}: SignUpVerifyFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <div className="flex flex-col gap-4">
      <Form onSubmit={form.handleSubmit(handleSignUpVerifySubmit)}>
        {/* Code Field */}
        <FormOtpFieldGroupV2
          form={form}
          hookName="input.code"
          label={t('common:code')}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!form.formState.isValid}
          loading={isLoading || form.formState.isSubmitting}
        >
          {t('common:submit')}
        </Button>
      </Form>

      <div className="flex flex-col gap-4">
        <Button variant="plain" onClick={navigateToSignIn}>
          {t('auth:signIn')}
        </Button>
      </div>
    </div>
  )
}
