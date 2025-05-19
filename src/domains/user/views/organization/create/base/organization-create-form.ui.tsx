"use client"

import { OrganizationCreateFormContainerUIProps } from '../organization-create-form.container'
import { Form } from '@/components/ui/Form'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'


export const OrganizationCreateFormUI = ({
  form,
  handleCreateOrganization,
  isLoading,
  uiType = 'container',
}: OrganizationCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleCreateOrganization)}>
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
          hookName="input.website"
          label={t('common:website')}
        />

        {/* TODO: Addresses Field */}

        <FormTextFieldGroupV2
          form={form}
          hookName="input.phone"
          label={t('common:phone')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.email"
          label={t('common:email')}
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
            title: t('common:create'),
            disabled: !form.formState.isValid,
            loading: isLoading || form.formState.isSubmitting,
          }}
        />
      </Form>
    </div>
  )
}

export default OrganizationCreateFormUI
