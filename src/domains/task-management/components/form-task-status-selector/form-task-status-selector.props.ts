import { EnumSelectProps } from "@/components/atoms/select-enum/enum-select"
import { BaseFormFieldWrapperProps } from "@/components/molecules/form-field-wrapper/form-field-wrapper"
import { FieldPath, FieldValues } from "react-hook-form"

export interface FormTaskStatusSelectorFieldProps<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>
> extends Omit<BaseFormFieldWrapperProps<EnumSelectProps>, "hookName"> {
  hookName?: TName
}
