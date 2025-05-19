import { PhoneInputProps } from "@/components/atoms/input-phone/phone-input.props"
import { BaseFormFieldWrapperProps } from "../form-field-wrapper/form-field-wrapper"
import { FieldPath, FieldValues } from "react-hook-form"

export interface FormPhoneFieldProps<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>
> extends Omit<BaseFormFieldWrapperProps<PhoneInputProps>, "hookName"> {
  hookName?: TName
}
