"use client"

import { NotificationCreateFormContainerUIProps } from '../notification-create-form.container'
import { Form } from '@/components/ui/Form'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormNotificationTypeSelectorGroupV2 } from '@/domains/notification/components/form-notification-type-selector'


export const NotificationCreateFormUI = ({
  form,
  handleCreateNotification,
  isLoading,
  uiType = 'container',
}: NotificationCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleCreateNotification)}>
        <FormTextFieldGroupV2
          form={form}
          hookName="input.name"
          label={t('common:name')}
        />

        <FormNotificationTypeSelectorGroupV2
          form={form}
          hookName="input.type"
          label={t('common:type')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.domain"
          label={t('notification:domain')}
        />


        {/* TODO Channels Field -> FormNotificationChannelData */}

        {/* Submit Button */}
        <ActionFooter
          uiType={uiType}
          mainAction={{
            type: 'submit',
            title: t('common:create'),
            disabled: !form.formState.isValid,
            loading: isLoading || form.formState.isSubmitting,
          }}
        />
      </Form>
    </div>
  )
}

export default NotificationCreateFormUI
