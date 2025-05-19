import { FormTaskPrioritySelectorFieldProps } from './form-task-priority-selector.props'
import { formTaskPrioritySelectorFieldDefaultProps } from './form-task-priority-selector.props.default'
import { EnumSelect } from '@/components/atoms/select-enum/enum-select'
import { FormFieldWrapper } from '@/components/molecules/form-field-wrapper'
import { TaskPriority } from '@corede_package'
import { EnumTranslationHelper } from '@/localization/helpers/enum.translation.helper'

export const FormTaskPrioritySelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormTaskPrioritySelectorFieldProps) => {
  const options = EnumTranslationHelper.generateSelectOptionsForTranslatedEnum({
    enumObj: TaskPriority,
    enumName: 'TaskPriority',
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
        ...formTaskPrioritySelectorFieldDefaultProps.inputProps,
        ...inputProps,
        options: options,
      }}
    />
  )
}
