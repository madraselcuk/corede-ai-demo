'use client'

import { FormOtpFieldGroupV2 } from '@/components/molecules/form-otp-field/form-otp-field-v2'
import { SignUpVerifyFormContainerUIProps } from '../sign-up-verify-form.container'
import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'
import { itemVariants } from '@/domains/auth/common/motion'
import { motion } from 'framer-motion'
import { FormPasswordFieldGroupV2 } from '@/components/molecules/form-password-field/form-password-field-v2'
import { useRouter } from 'next/navigation'
import { authFullPath, authPaths } from '@/domains/auth/routes/auth.path'

export const SignUpVerifyFormUI = ({
  form,
  handleSignUpVerifySubmit,
  isLoading,
  navigateToSignIn,
  resetPasswordToken,
}: SignUpVerifyFormContainerUIProps) => {
  const { t } = useI18n()
  const router = useRouter()

  return (
    <div className="flex flex-col gap-4">
      <Form onSubmit={form.handleSubmit(handleSignUpVerifySubmit)}>
        {/* Code Field */}
        <FormOtpFieldGroupV2
          form={form}
          hookName="input.code"
          label={t('common:code')}
        />

        {/* Password Field */}
        <FormPasswordFieldGroupV2
          form={form}
          hookName="input.password"
          label={t('common:password')}
          className={`${resetPasswordToken ? '' : 'hidden'}`}
        />

        {/* Password Again Field */}
        <FormPasswordFieldGroupV2
          form={form}
          hookName="input.passwordAgain"
          label={t('common:passwordAgain')}
          className={`${resetPasswordToken ? '' : 'hidden'}`}
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

      {/* Resend Code */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-1 mt-4 justify-center">
          <span className="text-sm text-gray-600 dark:text-gray-500 text-center">
            {t('auth:resendCodeDescription')}
          </span>
          <a
            className="text-sm text-primary"
            onClick={() =>
              router.push(authFullPath(authPaths.auth.resendVerify))
            }
          >
            {' '}
            <span className="text-sm text-primary cursor-pointer">
              {t('auth:resendCode')}
            </span>
          </a>
        </div>
      </motion.div>

      {/* Sign in */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-1 mt-4 justify-center">
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
      </motion.div>
    </div>
  )
}
