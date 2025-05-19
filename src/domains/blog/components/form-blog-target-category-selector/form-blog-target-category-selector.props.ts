import { CoAutocompleteSelectProps } from "@/components/atoms/select-autocomplete/autocomplete-select.props"
import { BaseFormFieldProps } from "@/components/interface"
import { FieldPath, FieldValues } from "react-hook-form"

export interface FormBlogTargetCategorySelectorProps<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>
> extends Omit<BaseFormFieldProps, "hookName"> {
  hookName?: TName
  inputProps?: Omit<CoAutocompleteSelectProps, "options">
}
