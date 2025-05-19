import { FaqUpdateUIComponentProps } from '../faq-update-form.container'
import { Form } from '@/components/ui/Form'
import { useI18n } from '@/localization/hooks/useI18n'
import Loading from '@/components/shared/Loading'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'
import { FormLanguageSelectorGroupV2 } from '@/components/molecules/form-enum-selectors/form-language-selector/form-language-selector-v2'
import { FormFaqCategorySelectorV2 } from '@/domains/faq/components/form-faq-selector/form-faq-category-selector-v2'
import ActionFooter from '@/components/molecules/action-footer/action-footer'

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

  if (detailQueryIsLoading) {
    return <Loading loading={detailQueryIsLoading} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('faq:noFaqFound')} />
  }

  return (
    <div>
      <Form onSubmit={form.handleSubmit(handleUpdate)}>
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
