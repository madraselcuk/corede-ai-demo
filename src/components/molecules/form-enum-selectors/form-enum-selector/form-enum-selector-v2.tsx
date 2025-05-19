import { EnumTranslationFactory } from '@/localization/helpers/enum.translation.factory'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { FormFieldWrapperV2Props } from '../../form-field-wrapper/form-field-wrapper-v2'
import {
  EnumSelectProps,
  EnumSelectV2,
} from '@/components/atoms/select-enum/enum-select-v2'

export interface FormEnumSelectorGroupPropsV2<TEnumObj extends object>
  extends FormFieldWrapperV2Props<EnumSelectProps> {
  enumObj: TEnumObj
  enumName: string
  namespace?: string
}

export const FormEnumSelectorGroupV2 = <TEnumObj extends object>({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  enumObj,
  enumName,
  namespace,
  required,
  ...rest
}: FormEnumSelectorGroupPropsV2<TEnumObj>) => {
  const options = EnumTranslationFactory.enumOptions({
    enumObj: enumObj,
    enumName: enumName,
    namespace: namespace,
  })

  return (
    <FormItem
      form={form}
      hookName={hookName}
      label={label}
      className={className}
      layout={layout}
      size={size}
      asterisk={required}
      {...rest}
    >
      <Controller
        name={hookName}
        control={form.control}
        render={({ field }) => (
          <EnumSelectV2
            options={options}
            {...inputProps}
            {...field}
            value={options.filter((option) => option.value === field.value)}
            onChange={(option) => field.onChange(option?.value)}
          />
        )}
      />
    </FormItem>
  )
}
