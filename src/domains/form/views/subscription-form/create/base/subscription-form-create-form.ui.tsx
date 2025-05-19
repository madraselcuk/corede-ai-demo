'use client'

import { Form } from '@/components/ui/Form'
import { SubscriptionFormCreateFormContainerUIProps } from '../subscription-form-create-form.container'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormUserSelectorGroupV3 } from '@/components/molecules/form-user-selector'
import { FormSubscriptionFormTypeSelectorGroupV2 } from '@/domains/form/components/contact-form-enum-selectors/form-subscription-form-user-type-selector'
import { FormCheckFieldGroupV2 } from '@/components/molecules/form-check-field/form-check-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { useUserListQuery } from '@/domains/user/api'

export const SubscriptionFormCreateFormUI = ({
  form,
  handleSubscriptionFormCreate,
  isLoading,
  uiType,
}: SubscriptionFormCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <>
      <Form onSubmit={form.handleSubmit(handleSubscriptionFormCreate)}>
        {/* User ID Field */}
        <FormUserSelectorGroupV3
          form={form}
          hookName="input.userId"
          label={t('common:user')}
          useUserOptionListQuery={useUserListQuery}
        />

        {/* User Type Field */}
        <FormSubscriptionFormTypeSelectorGroupV2
          form={form}
          label={t('common:userType')}
        />

        {/* Page Field */}
        <FormTextFieldGroupV2
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

export default SubscriptionFormCreateFormUI
