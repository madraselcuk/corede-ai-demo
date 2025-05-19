'use client'

import { Form } from '@/components/ui/Form'
import { TFAVerifyFormContainerUIProps } from '../tfa-verify-form.container'
import { Button } from '@/components/ui/Button'
import { FormOtpFieldGroupV2 } from '@/components/molecules/form-otp-field/form-otp-field-v2'
import { useI18n } from '@/localization/hooks/useI18n'

export const TFAVerifyFormUI = ({
  form,
  handleTFAVerifySubmit,
  handleResendCode,
  isLoading,
}: TFAVerifyFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <Form onSubmit={form.handleSubmit(handleTFAVerifySubmit)}>


      
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

      {/* Resend Code Button */}
      {/* TODO: Implement resend code button logic: put a timer and activate button after timer */}
      <Button onClick={handleResendCode}>{t('common:resendCode')}</Button>
    </Form>
  )
}
