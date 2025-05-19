import { FormTaskStatusSelectorFieldProps } from './form-task-status-selector.props'
import { formTaskStatusSelectorFieldDefaultProps } from './form-task-status-selector.props.default'
import { EnumSelect } from '@/components/atoms/select-enum/enum-select'
import { FormFieldWrapper } from '@/components/molecules/form-field-wrapper'
import { EnumTranslationHelper } from '@/localization/helpers/enum.translation.helper'
import { TaskStatus } from '@corede_package'

export const FormTaskStatusSelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps,
}: FormTaskStatusSelectorFieldProps) => {
  const options = EnumTranslationHelper.generateSelectOptionsForTranslatedEnum({
    enumObj: TaskStatus,
    enumName: 'TaskStatus',
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
        ...formTaskStatusSelectorFieldDefaultProps.inputProps,
        ...inputProps,
        options: options,
      }}
    />
  )
}
