'use client'
import { UserUpdateFormContainerUIProps } from '../user-update-form.container'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'
import Loading from '@/components/shared/Loading'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { FormDateFieldGroupV2 } from '@/components/molecules/form-date-field/form-date-field-v2'
import { FormGenderSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-gender-selector/form-gender-selector-v2'

export const UserUpdateFormUI = ({
  isLoadingDetail,
  form,
  handleUpdateUser,
  isUpdating,
  connectionError,
  noDataError,
  uiType = 'container',
}: UserUpdateFormContainerUIProps) => {
  const { t } = useI18n()

  if (isLoadingDetail) {
    return <Loading loading={isLoadingDetail} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('user:noUserFound')} />
  }

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleUpdateUser)}>
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


        {/*TODO PhoneNumber Field -> FormPhoneNumberGroupV2 is required*/}
        <FormTextFieldGroupV2
          form={form}
          hookName="input.phoneNumber"
          label={t('common:phoneNumber')}
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
            title: t('common:update'),
            disabled: !form.formState.isValid,
            loading: isUpdating || form.formState.isSubmitting,
          }}
        />
      </Form>
    </div>
  )
}

export default UserUpdateFormUI
