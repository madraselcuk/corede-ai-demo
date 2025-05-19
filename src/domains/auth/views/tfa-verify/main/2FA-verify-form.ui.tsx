'use client'

import { Form } from '@/components/ui/Form'
import { TFAVerifyFormContainerUIProps } from '../tfa-verify-form.container'
import { Button } from '@/components/ui/Button'
import { FormOtpFieldGroupV2 } from '@/components/molecules/form-otp-field/form-otp-field-v2'
import { useI18n } from '@/localization/hooks/useI18n'
import { motion } from 'framer-motion'
import { itemVariants } from '@/domains/auth/common/motion'

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
        {t('auth:signIn')}
      </Button>

      {/* Resend Code */}
      {/* TODO: Implement resend code button logic: put a timer and activate button after timer */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-1 mt-4 justify-center">
          <span className="text-sm text-gray-600 dark:text-gray-500 text-center">
            {t('auth:resendCodeDescription')}
          </span>
          <a className="text-sm text-primary" onClick={handleResendCode}>
            {' '}
            <span className="text-sm text-primary cursor-pointer">
              {t('auth:resendCode')}
            </span>
          </a>
        </div>
      </motion.div>
    </Form>
  )
}
