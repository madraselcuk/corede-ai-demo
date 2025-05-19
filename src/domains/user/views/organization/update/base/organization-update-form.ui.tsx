'use client'
import { OrganizationUpdateFormContainerUIProps } from '../organization-update-form.container'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'
import Loading from '@/components/shared/Loading'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'

export const OrganizationUpdateFormUI = ({
  isLoadingDetail,
  form,
  handleUpdateOrganization,
  isUpdating,
  connectionError,
  noDataError,
  uiType = 'container',
}: OrganizationUpdateFormContainerUIProps) => {
  const { t } = useI18n()

  if (isLoadingDetail) {
    return <Loading loading={isLoadingDetail} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('user:noOrganizationFound')} />
  }

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleUpdateOrganization)}>
        <FormTextFieldGroupV2
          form={form}
          hookName="input.name"
          label={t('common:name')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.legalName"
          label={t('common:legalName')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.summary"
          label={t('common:summary')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.website"
          label={t('common:website')}
        />

        {/* TODO: Addresses Field */}

        <FormTextFieldGroupV2
          form={form}
          hookName="input.phone"
          label={t('common:phone')}
        />

        <FormEmailFieldGroupV2
          form={form}
          hookName="input.email"
          label={t('common:email')}
        />

        {/* Facebook Field */}
        <FormTextFieldGroupV2
          form={form}
          hookName="input.socialMedias.facebook"
          label={t('common:facebook')}
        />

        {/* Instagram Field */}
        <FormTextFieldGroupV2
          form={form}
          hookName="input.socialMedias.instagram"
          label={t('common:instagram')}
        />

        {/* LinkedIn Field */}
        <FormTextFieldGroupV2
          form={form}
          hookName="input.socialMedias.linkedin"
          label={t('common:linkedIn')}
        />

        {/* X Field */}
        <FormTextFieldGroupV2
          form={form}
          hookName="input.socialMedias.x"
          label={t('common:x')}
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

export default OrganizationUpdateFormUI
