import { FaqCreateUIComponentProps } from '../faq-create-form.container'
import { Form } from '@/components/ui/Form'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import { FormFaqCategorySelectorV2 } from '@/domains/faq/components/form-faq-selector/form-faq-category-selector-v2'
import { FormCheckFieldGroupV2 } from '@/components/molecules/form-check-field/form-check-field-v2'

export const FaqCreateFormUI = ({
  form,
  handleCreate,
  isLoading,
  uiType = 'container',
}: FaqCreateUIComponentProps) => {
  const { t } = useI18n()

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleCreate)}>
        <FormTextFieldGroupV2
          form={form}
          hookName="input.question"
          label={t('faq:question')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.answer"
          label={t('faq:answer')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.readingTime"
          label={t('faq:readingTime')}
        />

        {/* Language Field */}
        <FormLanguageSelectorGroupV2 form={form} />

        {/* Faq Category Field */}
        <FormFaqCategorySelectorV2 form={form} />

        {/* Faq Popular Field */}
        <FormCheckFieldGroupV2
          form={form}
          hookName="input.popular"
          label={t('faq:popular')}
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

export default FaqCreateFormUI
