'use client'

import { ProfileFormContainerUIProps } from '../profile-form.container'
import { Form } from '@/components/ui/Form'
import { CoAvatar } from '@/components/atoms/avatar/avatar'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormDateFieldGroupV2 } from '@/components/molecules/form-date-field/form-date-field-v2'
import { FormCountrySelectorV2 } from '@/domains/geo/components/form-country-selector/form-country-selector-v2'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormStateSelectorV2 } from '@/domains/geo/components/form-state-selector/form-state-selector-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import { FormGenderSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-gender-selector/form-gender-selector-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'

export const ProfileFormUI = ({
  form,
  isLoading,
  handleUserUpdateOwnSubmit,
  setOpenChangeImage,
  profileImageUrl,
  uiType = 'container',
}: ProfileFormContainerUIProps) => {
  const { t } = useI18n()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex  gap-4">
        <CoAvatar
          imageProps={{
            src: profileImageUrl,
          }}
          border="solid"
          shape="rounded"
          size="lg"
          rootProps={{
            onClick: () => {
                setOpenChangeImage(true)
            },
          }}
        />
      </div>
      <Form onSubmit={form.handleSubmit(handleUserUpdateOwnSubmit)}>
            {/* Name Field */}
            <FormTextFieldGroupV2
              form={form}
              hookName="input.name"
              label={t('common:name')}
            />

            {/* Surname Field */}
            <FormTextFieldGroupV2
              form={form}
              hookName="input.surname"
              label={t('common:surname')}
            />

            {/* Birthdate Field */}
            <FormDateFieldGroupV2
              form={form}
              hookName="input.birthDate"
              label={t('common:birthDate')}
        />

            {/* Country Field */}
        <FormCountrySelectorV2 form={form} hookName="input.country" />

            {/* State Field */}
            <FormStateSelectorV2
              countryName={form.watch(`input.country`)}
              form={form}
              hookName={'input.city'}
            />

            {/* Language Field */}
        <FormLanguageSelectorGroupV2 form={form} label={t('common:language')} />

        {/* Gender Field */}
        <FormGenderSelectorGroupV2 form={form} />

            {/* Phone Number Field */}
        <FormTextFieldGroupV2 form={form} hookName="input.phoneNumber" />

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
