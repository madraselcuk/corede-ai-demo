'use client'

import { SignInFormContainerUIProps } from '../sign-in-form.container'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'
import Button from '@/components/ui/Button'
import { FormPasswordFieldGroupV2 } from '@/components/molecules/form-password-field/form-password-field-v2'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'

export const SignInFormUI = ({
  form,
  handleSignInSubmit,
  isLoading,
  navigateToSignUp,
  navigateToForgotPassword,
}: SignInFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <Form onSubmit={form.handleSubmit(handleSignInSubmit)}>
      {/* Email Field */}
      <FormEmailFieldGroupV2 form={form} />

      {/* Password Field */}
      <FormPasswordFieldGroupV2 form={form} />

      {/* Forget Password */}
      <a onClick={navigateToForgotPassword}>{t('auth:forgotPassword')}</a>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={!form.formState.isValid}
        loading={isLoading || form.formState.isSubmitting}
      >
        {t('auth:signIn')}
      </Button>

      {/* No account - go to sign up */}
      <a onClick={navigateToSignUp}>{t('auth:signUp')}</a>
    </Form>
  )
}

export default SignInFormUI
