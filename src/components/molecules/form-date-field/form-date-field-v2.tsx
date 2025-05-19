import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import DatePicker, { DatePickerProps } from '@/components/ui/DatePicker'

export interface FormDateFieldPropsV2
  extends FormFieldWrapperV2Props<DatePickerProps> {}

export const FormDateFieldGroupV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormDateFieldPropsV2) => {
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
          <DatePicker
            {...inputProps}
            {...field}
            value={field.value ? new Date(field.value) : null}
          />
        )}
      />
    </FormItem>
  )
}
