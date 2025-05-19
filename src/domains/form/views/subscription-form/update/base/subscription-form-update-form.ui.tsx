'use client'

import { useI18n } from '@/localization/hooks/useI18n'
import { Form } from '@/components/ui/Form'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { SubscriptionFormUpdateFormContainerUIProps } from '../subscription-form-update-form.container'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { FormCheckFieldGroupV2 } from '@/components/molecules/form-check-field/form-check-field-v2'

export const SubscriptionFormUpdateFormUIBase = ({
  form,
  handleUpdateSubscriptionForm,
  isLoading,
  connectionError,
  noDataError,
  uiType,
}: SubscriptionFormUpdateFormContainerUIProps) => {
  const { t } = useI18n()

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('form:noSubscriptionFormFound')} />
  }

  return (
    <>
      <Form onSubmit={form.handleSubmit(handleUpdateSubscriptionForm)}>
        {/* Email Field */}
        <FormEmailFieldGroupV2
          form={form}
          hookName="input.email"
          label={t('common:email')}
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

        {/* Action Buttons */}
        <ActionFooter
          uiType={uiType}
          backButton={{
            noBack: uiType === 'dialog' || uiType === 'drawer',
          }}
          mainAction={{
            type: 'submit',
            title: t('common:update'),
            disabled: !form.formState.isValid || isLoading,
            loading: isLoading || form.formState.isSubmitting,
          }}
        />
      </Form>
    </>
  )
}

export default SubscriptionFormUpdateFormUIBase
