'use client'

import { HelpCenterCategoryCreateUIComponentProps } from '../help-center-category-create-form.container'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormIconField } from '@/components/molecules/form-icon-field/form-icon-field'
import { FuncContainerUIForCreateFormTemplate } from '@/components/template/func-container-ui-for-create/func-container-ui-for-create.template'

export const HelpCenterCategoryCreateFormUI = ({
  form,
  handleCreate,
  isLoading,
  uiType = 'container',
}: HelpCenterCategoryCreateUIComponentProps) => {
  const { t } = useI18n()

  return (
    <FuncContainerUIForCreateFormTemplate
      form={form}
      handleCreate={handleCreate}
      isLoading={isLoading}
      uiType={uiType}
    >
      {/* Name Field */}

      <FormTextFieldGroupV2
        form={form}
        hookName="input.name"
        label={t('common:name')}
        isLoading={isLoading}
        inputProps={{
          placeholder: t('common:name'),
        }}
      />

      {/* Icon Field */}
      <FormIconField
        form={form}
        hookName="input.icon"
        label={t('common:icon')}
        isLoading={isLoading}
      />

      {/* NameTranslation Field */}
      {/* <FormTranslatableTextFieldGroup
          form={form}
          hookName="input.nameTranslation"
          label={{
            content: t('common:translations'),
          }}
          inputProps={{
            supportedLanguages: [Language.en, Language.tr],
          }}
        /> */}
    </FuncContainerUIForCreateFormTemplate>
  )
}
