import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import DatePicker from '@/components/ui/DatePicker'

const { DatePickerRange } = DatePicker
type DatePickerRangeProps = React.ComponentProps<typeof DatePickerRange>

export interface FormDateRangeFieldPropsV2
  extends FormFieldWrapperV2Props<DatePickerRangeProps> {}

export const FormDateRangeFieldGroupV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormDateRangeFieldPropsV2) => {
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
        render={({ field }) => <DatePickerRange {...inputProps} {...field} />}
      />
    </FormItem>
  )
}
