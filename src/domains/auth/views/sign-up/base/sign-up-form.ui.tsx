'use client'

import { SignUpFormContainerUIProps } from '../sign-up-form.container'
import { Form } from '@/components/ui/Form'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'
import { FormPasswordFieldGroupV2 } from '@/components/molecules/form-password-field/form-password-field-v2'
import Button from '@/components/ui/Button'
import { useI18n } from '@/localization/hooks/useI18n'

export const SignUpFormUI = ({
  form,
  handleRegisterSubmit,
  isLoading,
  registerIsSuccessful,
  navigateToSignIn,
}: SignUpFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <>
      <div className={registerIsSuccessful ? 'hidden' : ''}>
        <Form onSubmit={form.handleSubmit(handleRegisterSubmit)}>
          {/* Name Field */}
          <FormTextFieldGroupV2
            form={form}
            hookName={'input.name'}
            label={t('common:name')}
          />

          {/* Surname Field */}
          <FormTextFieldGroupV2
            form={form}
            hookName={'input.surname'}
            label={t('common:surname')}
          />

          {/* Email Field */}
          <FormEmailFieldGroupV2 form={form} />

          {/* Password Field */}
          <FormPasswordFieldGroupV2 form={form} />

          {/* Password Again Field */}
          <FormPasswordFieldGroupV2
            form={form}
            hookName="input.passwordAgain"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!form.formState.isValid}
            loading={isLoading || form.formState.isSubmitting}
          >
            {t('auth:signUp')}
          </Button>
        </Form>
      </div>
      <div className={!registerIsSuccessful ? 'hidden' : ''}>
        <div>
          {t('auth:signupSuccessfulTitle')}
          {t('auth:signupSuccessfulDescription')}
        </div>
        <div>
          <span onClick={navigateToSignIn}>{t('auth:backToLogin')}</span>
        </div>
      </div>
    </>
  )
}

export default SignUpFormUI
