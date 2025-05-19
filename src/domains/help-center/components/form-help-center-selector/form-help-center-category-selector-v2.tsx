import { FormFieldWrapperV2Props } from '@/components/molecules/form-field-wrapper/form-field-wrapper-v2'
import { IHelpCenterCategory } from '@/@package/corede'
import { FormEntityAsyncSelector } from '@/components/molecules/form-entity-async-selector'
import { SelectItemProps } from '@/components/interface'
import { useI18n } from '@/localization/hooks/useI18n'
import { useHelpCenterCategoryListQuery } from '../../api'

export interface FormHelpCenterCategorySelectorGroupPropsV2
  extends Omit<FormFieldWrapperV2Props<IHelpCenterCategory>, 'hookName'> {
  hookName?: string
}

export const FormHelpCenterCategorySelectorV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  inputProps,
  errorMessage,
  ...rest
}: FormHelpCenterCategorySelectorGroupPropsV2) => {
  const { t } = useI18n()

  const inputHookName = hookName ?? 'input.categoryId'

  return (
    <FormEntityAsyncSelector<IHelpCenterCategory, SelectItemProps>
      form={form}
      hookName={inputHookName}
      className={className}
      label={label}
      layout={layout}
      useEntityListQuery={useHelpCenterCategoryListQuery}
      convertEntityToSelectItemProps={(entity) => ({
        label: entity.name,
        value: entity._id.toString(),
      })}
      inputProps={{
        ...inputProps,
        placeholder: t('helpCenter:selectHelpCenterCategory'),
      }}
      errorMessage={errorMessage}
      {...rest}
    />
  )
}
