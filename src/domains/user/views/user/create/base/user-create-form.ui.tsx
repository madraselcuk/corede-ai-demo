"use client"

import { UserCreateFormContainerUIProps } from '../user-create-form.container'
import { Form } from '@/components/ui/Form'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import { FormUserTypeSelectorGroupV2 } from '@/domains/user/components/form-user-type-selector'
import { FormEmailFieldGroupV2 } from '@/components/molecules/form-email-field/form-email-field-v2'
import { FormDateFieldGroupV2 } from '@/components/molecules/form-date-field/form-date-field-v2'
import { FormGenderSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-gender-selector/form-gender-selector-v2'


export const UserCreateFormUI = ({
  form,
  handleCreateUser,
  isLoading,
  uiType = 'container',
}: UserCreateFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleCreateUser)}>
        <FormUserTypeSelectorGroupV2
          form={form}
          hookName="input.type"
          label={t('common:type')}
        />

        <FormEmailFieldGroupV2
          form={form}
          hookName="input.email"
          label={t('common:email')}
        />

        {/*TODO PhoneNumber Field -> FormPhoneNumberGroupV2 is required*/}
        <FormTextFieldGroupV2
          form={form}
          hookName="input.phoneNumber"
          label={t('common:phoneNumber')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.name"
          label={t('common:name')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.surname"
          label={t('common:surname')}
        />

        <FormDateFieldGroupV2
          form={form}
          hookName="input.birthDate"
          label={t('common:birthDate')}
        />

        <FormGenderSelectorGroupV2
          form={form}
          hookName="input.gender"
          label={t('common:gender')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.address"
          label={t('common:address')}
        />


        <FormTextFieldGroupV2
          form={form}
          hookName="input.description"
          label={t('common:description')}
        />

        {/*TODO  Country Field -> FormCountrySelectorV2 is required*/}
        <FormTextFieldGroupV2
          form={form}
          hookName="input.country"
          label={t('common:country')}
        />

        {/*TODO  City Field -> FormCitySelectorV2 is required*/}
        <FormTextFieldGroupV2
          form={form}
          hookName="input.city"
          label={t('common:city')}
        />

        {/* Language Field */}
        <FormLanguageSelectorGroupV2 form={form} />

        {/*TODO ProfileImage Field*/}
        {/*TODO BackgroundImage Field*/}

        {/*TODO AcceptedPolicyIds Field*/}
        {/*TODO RoleIds Field*/}
        {/*TODO PermissionIds Field*/}
        {/*TODO ProhibitedPermissionIds Field*/}

        {/*TODO OrganizationId Field*/}
        {/*TODO DepartmentId Field*/}

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

export default UserCreateFormUI
