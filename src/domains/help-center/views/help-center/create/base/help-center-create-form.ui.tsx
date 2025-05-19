import { HelpCenterCreateUIComponentProps } from '../help-center-create-form.container'
import { Form } from '@/components/ui/Form'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import { FormHelpCenterCategorySelectorV2 } from '@/domains/help-center/components/form-help-center-selector/form-help-center-category-selector-v2'

export const HelpCenterCreateFormUI = ({
  form,
  handleCreate,
  isLoading,
  uiType = 'container',
}: HelpCenterCreateUIComponentProps) => {
  const { t } = useI18n()

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleCreate)}>
        <FormTextFieldGroupV2
          form={form}
          hookName="input.question"
          label={t('helpCenter:question')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.answer"
          label={t('helpCenter:answer')}
        />

        <FormTextFieldGroupV2
          form={form}
          hookName="input.readingTime"
          label={t('helpCenter:readingTime')}
        />

        {/* Language Field */}
        <FormLanguageSelectorGroupV2 form={form} />

        {/* HelpCenter Category Field */}
        <FormHelpCenterCategorySelectorV2 form={form} />

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

export default HelpCenterCreateFormUI
