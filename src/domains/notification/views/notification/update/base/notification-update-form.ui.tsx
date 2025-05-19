'use client'
import { NotificationUpdateFormContainerUIProps } from '../notification-update-form.container'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'
import Loading from '@/components/shared/Loading'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { FormNotificationTypeSelectorGroupV2 } from '@/domains/notification/components/form-notification-type-selector/form-notification-type-selector-v2'

export const NotificationUpdateFormUI = ({
  isLoadingDetail,
  form,
  handleUpdateNotification,
  isUpdating,
  connectionError,
  noDataError,
  uiType = 'container',
}: NotificationUpdateFormContainerUIProps) => {
  const { t } = useI18n()

  if (isLoadingDetail) {
    return <Loading loading={isLoadingDetail} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('common:noResultPlaceholder')} />
  }

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleUpdateNotification)}>
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
            title: t('common:update'),
            disabled: !form.formState.isValid,
            loading: isUpdating || form.formState.isSubmitting,
          }}
        />
      </Form>
    </div>
  )
}

export default NotificationUpdateFormUI
