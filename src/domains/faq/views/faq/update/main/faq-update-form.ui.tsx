import { FaqUpdateUIComponentProps } from '../faq-update-form.container'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import { FormFaqCategorySelectorV2 } from '@/domains/faq/components/form-faq-selector/form-faq-category-selector-v2'
import { FuncContainerUIForUpdateFormTemplate } from '@/components/template/func-container-ui-for-update/func-container-ui-for-update.template'
import { FormCheckFieldGroupV2 } from '@/components/molecules/form-check-field/form-check-field-v2'

export const FaqUpdateFormUI = ({
  detailQueryIsLoading,
  form,
  handleUpdate,
  isUpdating,
  connectionError,
  noDataError,
  uiType = 'container',
}: FaqUpdateUIComponentProps) => {
  const { t } = useI18n()

  return (
    <FuncContainerUIForUpdateFormTemplate
      form={form}
      handleUpdate={handleUpdate}
      isUpdating={isUpdating}
      detailQueryIsLoading={detailQueryIsLoading}
      connectionError={connectionError}
      noDataError={noDataError}
      uiType={uiType}
    >
      <FormTextFieldGroupV2
        form={form}
        hookName="input.question"
        label={t('faq:question')}
        required
        inputProps={{
          placeholder: t('faq:question'),
        }}
        isLoading={detailQueryIsLoading}
      />

      <FormTextFieldGroupV2
        form={form}
        hookName="input.answer"
        label={t('faq:answer')}
        required
        inputProps={{
          placeholder: t('faq:answer'),
          textArea: true,
          rows: 3,
          className: 'modern-scrollbar',
        }}
        isLoading={detailQueryIsLoading}
      />

      <FormTextFieldGroupV2
        form={form}
        hookName="input.readingTime"
        label={t('faq:readingTime')}
        required
        inputProps={{
          placeholder: t('faq:readingTime'),
        }}
        isLoading={detailQueryIsLoading}
      />

      {/* Language Field */}
      <FormLanguageSelectorGroupV2
        form={form}
        label={t('common:language')}
        required
      />

      {/* Faq Category Field */}
      <FormFaqCategorySelectorV2
        form={form}
        label={t('faq:category')}
        required
      />

      {/* Faq Popular Field */}
      <FormCheckFieldGroupV2
        form={form}
        hookName="input.popular"
        label={t('faq:popular')}
      />
      
    </FuncContainerUIForUpdateFormTemplate>
  )
}
