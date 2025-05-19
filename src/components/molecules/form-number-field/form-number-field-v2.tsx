import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import NumericInput, {
  NumericInputProps,
} from '@/components/shared/NumericInput'

export interface FormNumberFieldPropsV2
  extends FormFieldWrapperV2Props<NumericInputProps> {}

export const FormNumberFieldGroupV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormNumberFieldPropsV2) => {
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
        render={({ field }) => <NumericInput {...inputProps} {...field} />}
      />
    </FormItem>
  )
}
