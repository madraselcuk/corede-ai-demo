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
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import {
  containerAnimation,
  avatarSectionAnimation,
  formFieldsAnimation,
  footerAnimation,
  formContainerAnimation,
} from '@/components/animation/motion'

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
    <Form onSubmit={form.handleSubmit(handleUserUpdateOwnSubmit)}>
      <motion.div className="flex flex-col min-h-[calc(100dvh-10rem)] gap-4 justify-between">
        <motion.div className="flex flex-col gap-4" {...containerAnimation}>
          <motion.div
            className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-xl px-4 py-4 md:px-8 md:py-7 w-fit"
            {...formContainerAnimation}
          >
            <motion.div className="flex gap-4" {...avatarSectionAnimation}>
              <CoAvatar
                imageProps={{
                  src: profileImageUrl,
                }}
                border="solid"
                shape="rounded"
                size="lg"
              />
              <div className="flex flex-col gap-2 justify-around">
                <div className="flex flex-col md:flex-row gap-2">
                  <Button
                    size="xs"
                    variant="solid"
                    onClick={() => {
                      setOpenChangeImage(true)
                    }}
                  >
                    {t('user:changeImage')}
                  </Button>
                  <Button
                    size="xs"
                    onClick={() => {
                      setOpenChangeImage(true)
                    }}
                  >
                    {t('user:removeImage')}
                  </Button>
                </div>
                <div className="text-sm text-gray-500">
                  {t('user:allowedImageTypes')}
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="border border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-xl px-4 py-4 md:px-8 md:py-7"
            {...formContainerAnimation}
          >
            <motion.div className="flex flex-col" {...formFieldsAnimation}>
              <div className="flex flex-col md:flex-row gap-0 md:gap-6 w-full">
                {/* Name Field */}
                <FormTextFieldGroupV2
                  form={form}
                  hookName="input.name"
                  label={t('common:name')}
                  className="w-full"
                  isLoading={isLoading}
                />

                {/* Surname Field */}
                <FormTextFieldGroupV2
                  form={form}
                  hookName="input.surname"
                  label={t('common:surname')}
                  className="w-full"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-0 md:gap-6 w-full">
                {/* Birthdate Field */}
                <FormDateFieldGroupV2
                  form={form}
                  hookName="input.birthDate"
                  label={t('common:birthDate')}
                  className="w-full"
                  inputProps={{
                    placeholder: t('common:birthDate'),
                  }}
                />

                {/* Gender Field */}
                <FormGenderSelectorGroupV2
                  form={form}
                  label={t('user:gender')}
                  className="w-full"
                  inputProps={{
                    placeholder: t('user:gender'),
                  }}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-0 md:gap-6 w-full">
                {/* Country Field */}
                <FormCountrySelectorV2
                  form={form}
                  hookName="input.country"
                  className="w-full"
                  label={t('common:country')}
                  inputProps={{
                    placeholder: t('common:country'),
                  }}
                />

                {/* State Field */}
                <FormStateSelectorV2
                  countryName={form.watch(`input.country`)}
                  form={form}
                  hookName={'input.city'}
                  className="w-full"
                  label={t('common:city')}
                  inputProps={{
                    placeholder: t('common:city'),
                  }}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-0 md:gap-6 w-full">
                {/* Language Field */}
                <FormLanguageSelectorGroupV2
                  form={form}
                  label={t('common:language')}
                  className="w-full"
                  inputProps={{
                    imgPath: 'https://flagcdn.com/w40/tr.png',
                    label: 'Türkçe',
                    value: 'tr',
                  }}
                />

                {/* Phone Number Field */}
                <FormTextFieldGroupV2
                  form={form}
                  hookName="input.phoneNumber"
                  className="w-full"
                  label={t('common:phoneNumber')}
                  inputProps={{
                    placeholder: t('common:phoneNumber'),
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Submit Button */}
        <motion.div className="sticky bottom-6" {...footerAnimation}>
          <ActionFooter
            uiType={uiType}
            mainAction={{
              type: 'submit',
              title: t('user:update'),
              disabled: !form.formState.isValid,
              loading: isLoading || form.formState.isSubmitting,
            }}
          />
        </motion.div>
      </motion.div>
    </Form>
  )
}
