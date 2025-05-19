"use client"

import { RoleCreateFormContainerUIProps } from '../role-create-form.container'
import { Form } from '@/components/ui/Form'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormRoleActionSelectorV2 } from '@/domains/user/components/form-role-action-selector'
import { FormRoleActionScopeSelectorV2 } from '@/domains/user/components/form-role-action-scope-selector'
import { FormRoleCategorySelectorV2 } from '@/domains/user/components/form-role-category-selector'


export const RoleCreateFormUI = ({
  form,
  handleCreateRole,
  isLoading,
  uiType = 'container',
}: RoleCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleCreateRole)}>
        {/* RoleAction Field */}
        <FormRoleActionSelectorV2 form={form} />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.subject"
          label={t('common:subject')}
        />

        {/* RoleActionScope Field */}
        <FormRoleActionScopeSelectorV2 form={form} />

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

        {/* RoleCategory Field */}
        <FormRoleCategorySelectorV2 form={form} />

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

export default RoleCreateFormUI
