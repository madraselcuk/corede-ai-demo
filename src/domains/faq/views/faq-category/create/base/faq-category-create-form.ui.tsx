'use client'

import { FaqCategoryCreateUIComponentProps } from '../faq-category-create-form.container'
import { Form } from '@/components/ui/Form'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { useI18n } from '@/localization/hooks/useI18n'

export const FaqCategoryCreateFormUI = ({
  form,
  handleCreate,
  isLoading,
  uiType = 'container',
}: FaqCategoryCreateUIComponentProps) => {
  const { t } = useI18n()

  return (
    <>
      <Form onSubmit={form.handleSubmit(handleCreate)}>
        {/* Name Field */}
        <FormTextFieldGroupV2
          form={form}
          hookName="input.name"
          label={t('common:name')}
        />

        {/* Icon Field */}
        <FormTextFieldGroupV2
          form={form}
          hookName="input.icon"
          label={t('common:icon')}
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

        {/* Submit Button */}
        <ActionFooter
          uiType={uiType}
          backButton={{
            noBack: uiType === 'dialog' || uiType === 'drawer',
          }}
          mainAction={{
            type: 'submit',
            title: t('common:create'),
            disabled: !form.formState.isValid,
            loading: isLoading || form.formState.isSubmitting,
          }}
        />
      </Form>
    </>
  )
}

export default FaqCategoryCreateFormUI
