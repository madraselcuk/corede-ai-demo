import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import Input, { InputProps } from '@/components/ui/Input'
import { FormFieldWrapperV2Props } from '../form-field-wrapper/form-field-wrapper-v2'

export interface FormTextFieldPropsV2
  extends FormFieldWrapperV2Props<InputProps> {
  isLoading?: boolean
}

//CHANGED: isLoading prop to show skeleton when loading
export const FormTextFieldGroupV2 = ({
  form,
  hookName,
  className,
  label,
  labelShow,
  layout = 'vertical',
  size = 'md',
  inputProps,
  isLoading,
  required,
  ...rest
}: FormTextFieldPropsV2) => {
  
  return (
    <FormItem
      form={form}
      hookName={hookName}
      label={label}
      labelShow={labelShow}
      className={className}
      layout={layout}
      size={size}
      isLoading={isLoading}
      asterisk={required}
      {...rest}
    >
      <Controller
        name={hookName}
        control={form.control}
        render={({ field }) => (
          <Input type="text" autoComplete="off" {...inputProps} {...field} />
        )}
      />
    </FormItem>
  )
}
