import { PasswordInputProps } from "@/components/atoms/input-password/password-input.props"
import { BaseFormFieldWrapperProps } from "../form-field-wrapper/form-field-wrapper"
import { FieldPath, FieldValues } from "react-hook-form"

export interface FormPasswordFieldProps<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>
> extends Omit<BaseFormFieldWrapperProps<PasswordInputProps>, "hookName"> {
  hookName?: TName
}
