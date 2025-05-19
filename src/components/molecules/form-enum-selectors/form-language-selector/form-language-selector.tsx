import { FormLanguageSelectorFieldProps } from './form-language-selector.props'
import { formLanguageSelectorFieldDefaultProps } from './form-language-selector.props.default'
import { EnumTranslationFactory } from '@/localization/helpers/enum.translation.factory'

import { FormFieldWrapper } from '../../form-field-wrapper'
import { EnumSelect } from '@/components/atoms/select-enum/enum-select'

export const FormLanguageSelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormLanguageSelectorFieldProps) => {
  const options = EnumTranslationFactory.languageEnumOptions
  const inputHookName = hookName ?? 'input.language'

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
        ...formLanguageSelectorFieldDefaultProps.inputProps,
        ...inputProps,
        options: options,
      }}
    />
  )
}
