'use client'

import { Form } from '@/components/ui/Form'
import { SubscriptionFormCreateFormContainerUIProps } from '../webinar-join-public.func.container'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'

export const SubscriptionFormCreateFormUI = ({
  form,
  handleSubscriptionFormCreate,
  isLoading,
  uiType,
}: SubscriptionFormCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <>
      <div>
        <Form onSubmit={form.handleSubmit(handleSubscriptionFormCreate)}>
          {/* Email Field */}
          <FormEmailFieldGroupV2
            form={form}
            hookName="input.email"
            label={t('common:email')}
          />

          {/* Page Field */}
          <FormTextFieldGroupV2
            form={form}
            hookName="input.page"
            label={t('common:page')}
          />

          {/* Language Field */}
          <FormLanguageSelectorGroupV2 form={form} />

          {/* Submit Button */}
          <ActionFooter
            uiType={uiType}
            backButton={{
              noBack: uiType === 'dialog' || uiType === 'drawer',
            }}
            mainAction={{
              type: 'submit',
              title: t('common:updated'),
              disabled: !form.formState.isValid,
              loading: isLoading || form.formState.isSubmitting,
            }}
          />
        </Form>
      </div>
    </>
  )
}

export default SubscriptionFormCreateFormUI
