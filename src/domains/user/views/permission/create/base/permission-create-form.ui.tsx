"use client"

import { PermissionCreateFormContainerUIProps } from '../permission-create-form.container'
import { Form } from '@/components/ui/Form'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormPermissionActionSelectorV2 } from '@/domains/user/components/form-permission-action-selector'
import { FormPermissionActionScopeSelectorV2 } from '@/domains/user/components/form-permission-action-scope-selector'
import { FormPermissionCategorySelectorV2 } from '@/domains/user/components/form-permission-category-selector'


export const PermissionCreateFormUI = ({
  form,
  handleCreatePermission,
  isLoading,
  uiType = 'container',
}: PermissionCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleCreatePermission)}>
        {/* PermissionAction Field */}
        <FormPermissionActionSelectorV2 form={form} />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.subject"
          label={t('common:subject')}
        />

        {/* PermissionActionScope Field */}
        <FormPermissionActionScopeSelectorV2 form={form} />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.description"
          label={t('common:description')}
        />


        <FormTextFieldGroupV2
          form={form}
          hookName="input.domain"
          label={t('common:domain')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.subdomain"
          label={t('common:subdomain')}
        />

        {/* PermissionCategory Field */}
        <FormPermissionCategorySelectorV2 form={form} />

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

export default PermissionCreateFormUI
