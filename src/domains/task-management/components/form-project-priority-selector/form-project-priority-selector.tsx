import { FormProjectPrioritySelectorFieldProps } from './form-project-priority-selector.props'
import { formProjectPrioritySelectorFieldDefaultProps } from './form-project-priority-selector.props.default'
import { EnumSelect } from '@/components/atoms/select-enum/enum-select'
import { FormFieldWrapper } from '@/components/molecules/form-field-wrapper'
import { EnumTranslationHelper } from '@/localization/helpers/enum.translation.helper'
import { ProjectPriority } from '@corede_package'

export const FormProjectPrioritySelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormProjectPrioritySelectorFieldProps) => {
  const options = EnumTranslationHelper.generateSelectOptionsForTranslatedEnum({
    enumObj: ProjectPriority,
    enumName: 'ProjectPriority',
  })
  const inputHookName = hookName ?? 'input.priority'

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
        ...formProjectPrioritySelectorFieldDefaultProps.inputProps,
        ...inputProps,
        options: options,
      }}
    />
  )
}
