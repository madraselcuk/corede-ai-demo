import { FormWebinarStatusSelectorFieldProps } from "./form-webinar-status-selector.props"
import { formWebinarStatusSelectorFieldDefaultProps } from "./form-webinar-status-selector.props.default"
import { EnumSelect } from "@/components/atoms/select-enum/enum-select"
import { FormFieldWrapper } from "@/components/molecules/form-field-wrapper"
import { EnumTranslationHelper } from "@/localization/helpers/enum.translation.helper"
import { WebinarStatus } from "@corede_package"

export const FormWebinarStatusSelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps
}: FormWebinarStatusSelectorFieldProps) => {
  const options = EnumTranslationHelper.generateSelectOptionsForTranslatedEnum({
    enumObj: WebinarStatus,
    enumName: "WebinarStatus"
  })
  const inputHookName = hookName ?? "input.status"

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
        ...formWebinarStatusSelectorFieldDefaultProps.inputProps,
        ...inputProps,
        options: options
      }}
    />
  )
}
