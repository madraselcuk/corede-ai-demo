import { HelpCenterUpdateUIComponentProps } from '../help-center-update-form.container'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import { FormHelpCenterCategorySelectorV2 } from '@/domains/help-center/components/form-help-center-selector/form-help-center-category-selector-v2'
import { FuncContainerUIForUpdateFormTemplate } from '@/components/template/func-container-ui-for-update/func-container-ui-for-update.template'

export const HelpCenterUpdateFormUI = ({
  detailQueryIsLoading,
  form,
  handleUpdate,
  isUpdating,
  connectionError,
  noDataError,
  uiType = 'container',
}: HelpCenterUpdateUIComponentProps) => {
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
    </FuncContainerUIForUpdateFormTemplate>
  )
}
