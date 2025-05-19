import { PhoneInput } from "@/components/atoms/input-phone/phone-input"
import { FormFieldWrapper } from "../form-field-wrapper"
import { FormPhoneFieldProps } from "./form-phone-field.props"
import { formPhoneFieldPropsDefaultValues } from "./form-phone-field.props.default"

export const FormPhoneFieldGroup = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps
}: FormPhoneFieldProps) => {
  const inputHookName = hookName ?? "input.phoneNumber"

  return (
    <FormFieldWrapper
      form={form}
      hookName={inputHookName}
      label={label}
      containerProps={containerProps}
      description={description}
      messageProps={messageProps}
      inputComponent={PhoneInput}
      inputProps={{
        ...formPhoneFieldPropsDefaultValues.inputProps,
        ...inputProps
        // placeholder="Enter a phone number" // TODO:
      }}
    />
  )
}
