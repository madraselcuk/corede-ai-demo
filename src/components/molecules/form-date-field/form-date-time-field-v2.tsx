import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import DatePicker from '@/components/ui/DatePicker'

const { DateTimepicker } = DatePicker
type DateTimepickerProps = React.ComponentProps<typeof DateTimepicker>

export interface FormDateTimeFieldPropsV2
  extends FormFieldWrapperV2Props<DateTimepickerProps> {}

export const FormDateTimeFieldGroupV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormDateTimeFieldPropsV2) => {
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
          <DateTimepicker
            {...inputProps}
            {...field}
            value={field.value ? new Date(field.value) : null}
          />
        )}
      />
    </FormItem>
  )
}
