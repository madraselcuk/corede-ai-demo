import { FormNumberFieldProps } from "./form-number-field.props"
import { formNumberFieldDefaultProps } from "./form-number-field.props.default"
import { FormFieldWrapper } from "../form-field-wrapper"
import { CoNumberInput } from "@/components/atoms/input-number/number-input"

export const FormNumberFieldGroup = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps
}: FormNumberFieldProps) => {
  return (
    <FormFieldWrapper
      form={form}
      hookName={hookName}
      label={label}
      containerProps={containerProps}
      description={description}
      messageProps={messageProps}
      inputComponent={CoNumberInput}
      inputProps={{
        ...formNumberFieldDefaultProps.inputProps,
        ...inputProps
      }}
    />
  )
}
