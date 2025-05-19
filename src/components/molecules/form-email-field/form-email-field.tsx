import {
  BaseFormFieldWrapperProps,
  FormFieldWrapper,
} from '../form-field-wrapper'
import { CoEmailInput } from '@/components/atoms/input-email/email-input'
import { CoEmailInputProps } from '@/components/atoms/input-email'
import { FieldPath, FieldValues } from 'react-hook-form'
import { i18n } from '@/localization'

export const formEmailFieldPropsDefaultValues: Partial<FormEmailFieldProps> = {
  label: {
    content: i18n.t('common:email'),
  },
}

export interface FormEmailFieldProps<
  TName extends FieldPath<FieldValues> = FieldPath<FieldValues>,
> extends Omit<BaseFormFieldWrapperProps<CoEmailInputProps>, 'hookName'> {
  hookName?: TName
}

export const FormEmailFieldGroup = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormEmailFieldProps) => {
  const inputHookName = hookName ?? 'input.email'

  return (
    <FormFieldWrapper
      form={form}
      hookName={inputHookName}
      label={label}
      containerProps={containerProps}
      description={description}
      messageProps={messageProps}
      inputComponent={CoEmailInput}
      inputProps={{
        ...formEmailFieldPropsDefaultValues.inputProps,
        ...inputProps,
      }}
    />
  )
}
