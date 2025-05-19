import { HelpCenterCategoryUpdateUIComponentProps } from '../help-center-category-update-form.container'
import { useI18n } from '@/localization/hooks/useI18n'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FuncContainerUIForUpdateFormTemplate } from '@/components/template/func-container-ui-for-update/func-container-ui-for-update.template'

export const HelpCenterCategoryUpdateFormUI = ({
  detailQueryIsLoading,
  form,
  handleUpdate,
  isUpdating,
  connectionError,
  noDataError,
  uiType = 'container',
}: HelpCenterCategoryUpdateUIComponentProps) => {
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

      {/*TODO NameTranslation Field */}
    </FuncContainerUIForUpdateFormTemplate>
  )
}
