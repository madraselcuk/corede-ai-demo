import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'
import Checkbox, { CheckboxProps } from '@/components/ui/Checkbox'

export interface FormCheckFieldPropsV2
  extends FormFieldWrapperV2Props<CheckboxProps> {}

export const FormCheckFieldGroupV2 = ({
  form,
  hookName,
  className,
  label,
  layout = 'vertical',
  size = 'md',
  inputProps,
  required,
  ...rest
}: FormCheckFieldPropsV2) => {
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
          <Checkbox {...inputProps} checked={field.value} {...field} />
        )}
      />
    </FormItem>
  )
}
