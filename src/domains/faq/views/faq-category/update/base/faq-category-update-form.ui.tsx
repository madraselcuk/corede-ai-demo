import { FaqCategoryUpdateUIComponentProps } from '../faq-category-update-form.container'
import { Form } from '@/components/ui/Form'
import { NoDataState } from '@/components/organisms/no-data-state/no-data-state'
import { useI18n } from '@/localization/hooks/useI18n'
import Loading from '@/components/shared/Loading'
import { NoConnectionState } from '@/components/organisms/no-connection-state/no-connection-state'
import ActionFooter from '@/components/molecules/action-footer/action-footer'
import { FormTextFieldGroupV2 } from '@/components/molecules/form-text-field/form-text-field-v2'

export const FaqCategoryUpdateFormUI = ({
  detailQueryIsLoading,
  form,
  handleUpdate,
  isUpdating: isLoading,
  connectionError,
  noDataError,
  uiType = 'container',
}: FaqCategoryUpdateUIComponentProps) => {
  const { t } = useI18n()

  if (detailQueryIsLoading) {
    return <Loading loading={detailQueryIsLoading} />
  }

  if (connectionError) {
    return <NoConnectionState />
  }

  if (noDataError) {
    return <NoDataState text={t('faq:noFaqCategoryFound')} />
  }

  return (
    <>
      <div>
        <Form onSubmit={form.handleSubmit(handleUpdate)}>
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

          {/* Submit Button */}
          <ActionFooter
            uiType={uiType}
            mainAction={{
              type: 'submit',
              title: t('common:update'),
              disabled: !form.formState.isValid,
              loading: isLoading || form.formState.isSubmitting,
            }}
          />
        </Form>
      </div>
    </>
  )
}

export default FaqCategoryUpdateFormUI
