import { RoleUpdateFormContainerUIProps } from '../role-update-form.container'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'
import Loading from '@/components/shared/Loading'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'

export const RoleUpdateFormUI = ({
  isLoadingDetail,
  form,
  handleUpdateRole,
  isUpdating,
  connectionError,
  noDataError,
  uiType = 'container',
}: RoleUpdateFormContainerUIProps) => {
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
      <Form onSubmit={form.handleSubmit(handleUpdateRole)}>
        <FormTextFieldGroupV2
          form={form}
          hookName="input.name"
          label={t('common:name')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.description"
          label={t('common:description')}
          inputProps={{
            textArea: true,
            rows: 4,
          }}
        />

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

export default RoleUpdateFormUI
