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
        <FormPasswordFieldGroupV2
          form={form}
          label={t('auth:password')}
          className="w-72"
          inputProps={{
            placeholder: t('auth:password'),
          }}
        />
        <FormPasswordFieldGroupV2
          form={form}
          hookName="input.passwordAgain"
          label={t('auth:confirmPassword')}
          className="w-72"
          inputProps={{
            placeholder: t('auth:confirmPassword'),
          }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!form.formState.isValid}
          loading={isLoading || form.formState.isSubmitting}
        >
          {t('common:submit')}
        </Button>

        {/* Already have account - go to sign in */}
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
      </Form>
    </>
  )
}
