import { HelpCenterUpdateUIComponentProps } from '../help-center-update-form.container'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'
import Loading from '@/components/shared/Loading'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import { FormHelpCenterCategorySelectorV2 } from '@/domains/help-center/components/form-help-center-selector/form-help-center-category-selector-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'

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

  if (detailQueryIsLoading) {
    return <Loading loading={detailQueryIsLoading} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('helpCenter:noHelpCenterFound')} />
  }

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleUpdate)}>
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
            title: t('common:update'),
            disabled: !form.formState.isValid,
            loading: isUpdating || form.formState.isSubmitting,
          }}
        />
      </Form>
    </div>
  )
}
