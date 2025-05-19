import { FormFieldWrapper } from '../form-field-wrapper'
import { Checkbox } from '@/components/ui/Checkbox'
import { CheckboxProps } from '@/components/ui/Checkbox'
import { BaseFormFieldWrapperProps } from '../form-field-wrapper/form-field-wrapper'

export interface FormCheckboxFieldProps
  extends BaseFormFieldWrapperProps<CheckboxProps> {}

export const FormCheckboxFieldGroup = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormCheckboxFieldProps) => {
  return (
    <FormFieldWrapper
      form={form}
      hookName={hookName}
      label={label}
      containerProps={containerProps}
      description={description}
      messageProps={messageProps}
      inputComponent={Checkbox}
      inputProps={inputProps}
    />
  )
}
