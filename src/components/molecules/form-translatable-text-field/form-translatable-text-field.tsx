import { FormTranslatableTextFieldProps } from "./form-translatable-text-field.props"
import { formTranslatableTextFieldDefaultProps } from "./form-translatable-text-field.props.default"
import { TranslatableTextInput } from "@/components/atoms/input-translatable-text/translatable-text-input"
import { FormFieldWrapper } from "../form-field-wrapper"

export const FormTranslatableTextFieldGroup = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps
}: FormTranslatableTextFieldProps) => {
  return (
    <FormFieldWrapper
      form={form}
      hookName={hookName}
      label={label}
      containerProps={containerProps}
      description={description}
      messageProps={messageProps}
      inputComponent={TranslatableTextInput}
      inputProps={{
        ...formTranslatableTextFieldDefaultProps.inputProps,
        ...inputProps
      }}
    />
  )
}
