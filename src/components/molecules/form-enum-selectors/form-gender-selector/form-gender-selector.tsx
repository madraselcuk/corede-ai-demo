import { FormGenderSelectorFieldProps } from './form-gender-selector.props'
import { formGenderSelectorFieldDefaultProps } from './form-gender-selector.props.default'
import { EnumTranslationFactory } from '@/localization/helpers/enum.translation.factory'
import { FormFieldWrapper } from '../../form-field-wrapper'
import { EnumSelect } from '@/components/atoms/select-enum/enum-select'

export const FormGenderSelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormGenderSelectorFieldProps) => {
  const options = EnumTranslationFactory.genderEnumOptions
  const inputHookName = hookName ?? 'input.gender'

  return (
    <FormFieldWrapper
      form={form}
      hookName={inputHookName}
      label={label}
      containerProps={containerProps}
      description={description}
      messageProps={messageProps}
      inputComponent={EnumSelect}
      inputProps={{
        ...formGenderSelectorFieldDefaultProps.inputProps,
        ...inputProps,
        options: options,
      }}
    />
  )
}
