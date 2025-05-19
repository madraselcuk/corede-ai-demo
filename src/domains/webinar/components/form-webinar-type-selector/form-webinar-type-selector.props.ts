import { EnumSelectProps } from '@/components/atoms/select-enum'
import { BaseFormFieldWrapperProps } from '@/components/molecules/form-field-wrapper'
import { FieldPath, FieldValues } from 'react-hook-form'

export interface FormWebinarTypeSelectorFieldProps<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<BaseFormFieldWrapperProps<EnumSelectProps>, 'hookName'> {
  hookName?: TName
}
