import { FormFieldWrapperV2Props } from '@/components/molecules/form-field-wrapper/form-field-wrapper-v2'
import { IFaqCategory } from '@/@package/corede'
import { FormEntityAsyncSelector } from '@/components/molecules/form-entity-async-selector'
import { SelectItemProps } from '@/components/interface'
import { useFaqCategoryListQuery } from '@/domains/faq/api'
import { useI18n } from '@/localization/hooks/useI18n'

export interface FormFaqCategorySelectorGroupPropsV2
  extends Omit<FormFieldWrapperV2Props<IFaqCategory>, 'hookName'> {
  hookName?: string
}

export const FormFaqCategorySelectorV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormFaqCategorySelectorGroupPropsV2) => {
  const { t } = useI18n()

  const inputHookName = hookName ?? 'input.categoryId'

  return (
    <FormEntityAsyncSelector<IFaqCategory, SelectItemProps>
      form={form}
      hookName={inputHookName}
      required={required}
      className={className}
      label={label}
      layout={layout}
      size={size}
      useEntityListQuery={useFaqCategoryListQuery}
      convertEntityToSelectItemProps={(entity) => ({
        label: entity.name,
        value: entity._id.toString(),
      })}
      inputProps={{
        ...inputProps,
        placeholder: t('faq:selectFaqCategory'),
      }}
      {...rest}
    />
  )
}
