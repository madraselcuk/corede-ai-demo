'use client'

import { Form } from '@/components/ui/Form'
import { SubscriptionFormCreateFormContainerUIProps } from '../subscription-form-create-form.container'
import { useI18n } from '@/localization/hooks/useI18n'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { FormCheckFieldGroupV2 } from '@/components/molecules/form-check-field/form-check-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import { FormNumberFieldGroupV2 } from '@/components/molecules/form-number-field/form-number-field-v2'
import { FormSubscriptionFormTypeSelectorGroupV2 } from '@/domains/form/components/contact-form-enum-selectors/form-subscription-form-user-type-selector'

export const SubscriptionFormCreateFormUIBase = ({
  form,
  handleSubscriptionFormCreate,
  isLoading,
  uiType,
}: SubscriptionFormCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <>
      <Form onSubmit={form.handleSubmit(handleSubscriptionFormCreate)}>
        {/* User Type Field */}
        <FormSubscriptionFormTypeSelectorGroupV2
          form={form}
          label={t('common:userType')}
        />

        {/* Page Field */}
        <FormNumberFieldGroupV2
          form={form}
          hookName="input.page"
          label={t('common:page')}
        />

        {/* Topic Subscriptions */}
        <div className="space-y-4">
          <FormCheckFieldGroupV2
            form={form}
            hookName="input.newsTopicSubscribed"
            label={t('common:newsTopic')}
          />

          <FormCheckFieldGroupV2
            form={form}
            hookName="input.blogTopicSubscribed"
            label={t('common:blogTopic')}
          />

          <FormCheckFieldGroupV2
            form={form}
            hookName="input.productTopicSubscribed"
            label={t('common:productTopic')}
          />

          <FormCheckFieldGroupV2
            form={form}
            hookName="input.offerTopicSubscribed"
            label={t('common:offerTopic')}
          />
        </div>

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
            title: t('common:create'),
            disabled: !form.formState.isValid,
            loading: isLoading || form.formState.isSubmitting,
          }}
        />
      </Form>
    </>
  )
}

export default SubscriptionFormCreateFormUIBase
