import { FormPasswordFieldProps } from "./form-password-field.props"
import { formPasswordFieldPropsDefaultValues } from "./form-password-field.props.default"
import { FormFieldWrapper } from "../form-field-wrapper"
import { PasswordInput } from "@/components/atoms/input-password/password-input"

export const FormPasswordFieldGroup = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps
}: FormPasswordFieldProps) => {
  const inputHookName = hookName ?? "input.password"

  return (
    <FormFieldWrapper
      form={form}
      hookName={inputHookName}
      label={label}
      containerProps={containerProps}
      description={description}
      messageProps={messageProps}
      inputComponent={PasswordInput}
      inputProps={{
        ...formPasswordFieldPropsDefaultValues.inputProps,
        ...inputProps
      }}
    />
  )
}
