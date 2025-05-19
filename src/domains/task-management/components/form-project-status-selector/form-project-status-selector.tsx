import { FormProjectStatusSelectorFieldProps } from './form-project-status-selector.props'
import { formProjectStatusSelectorFieldDefaultProps } from './form-project-status-selector.props.default'
import { EnumSelect } from '@/components/atoms/select-enum/enum-select'
import { FormFieldWrapper } from '@/components/molecules/form-field-wrapper'
import { EnumTranslationHelper } from '@/localization/helpers/enum.translation.helper'
import { ProjectStatus } from '@corede_package'

export const FormProjectStatusSelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormProjectStatusSelectorFieldProps) => {
  const options = EnumTranslationHelper.generateSelectOptionsForTranslatedEnum({
    enumObj: ProjectStatus,
    enumName: 'ProjectStatus',
  })
  const inputHookName = hookName ?? 'input.status'

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
        ...formProjectStatusSelectorFieldDefaultProps.inputProps,
        ...inputProps,
        options: options,
      }}
    />
  )
}
