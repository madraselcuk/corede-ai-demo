import { FormFieldWrapper } from '../form-field-wrapper'
import { TextInput } from '@/components/atoms/input-text/text-input'
import { TextInputProps } from '@/components/atoms/input-text/text-input'
import { BaseFormFieldWrapperProps } from '../form-field-wrapper/form-field-wrapper'

export interface FormTextFieldProps
  extends BaseFormFieldWrapperProps<TextInputProps> {}

export const FormTextFieldGroup = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormTextFieldProps) => {
  return (
    <FormFieldWrapper
      form={form}
      hookName={hookName}
      label={label}
      containerProps={containerProps}
      description={description}
      messageProps={messageProps}
      inputComponent={TextInput}
      inputProps={inputProps}
    />
  )
}
