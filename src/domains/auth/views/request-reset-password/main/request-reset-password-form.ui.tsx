'use client'
import { RequestResetPasswordFormContainerUIProps } from '../request-reset-password-form.container'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'
import { Button } from '@/components/ui/Button'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'

export const ForgotPasswordFormUI = ({
  form,
  handleRequestResetPasswordSubmit,
  isLoading,
  navigateToSignIn,
}: RequestResetPasswordFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <>
      {/* Before request reset password */}
      <Form onSubmit={form.handleSubmit(handleRequestResetPasswordSubmit)}>
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
          loading={isLoading || form.formState.isSubmitting}
        >
          {t('auth:submit')}
        </Button>


      </Form>


      {/* back to sign in */}
      <div className="flex items-center gap-1 justify-center mt-4">
        <span className="text-sm text-gray-600 dark:text-gray-500 text-center">
          {t('auth:rememberPassword')}
        </span>
        <a className="text-sm text-primary" onClick={navigateToSignIn}>
          {' '}
          <span className="text-sm text-primary cursor-pointer">
            {t('auth:signIn')}
          </span>
        </a>
      </div>
    </>
  )
}
