import { FormWebinarTypeSelectorFieldProps } from "./form-webinar-type-selector.props"
import { formWebinarTypeSelectorFieldDefaultProps } from "./form-webinar-type-selector.props.default"
import { EnumSelect } from "@/components/atoms/select-enum/enum-select"
import { FormFieldWrapper } from "@/components/molecules/form-field-wrapper"
import { EnumTranslationHelper } from "@/localization/helpers/enum.translation.helper"
import { WebinarType } from "@corede_package"

export const FormWebinarTypeSelector = ({
  form,
  hookName,
  label,
  containerProps,
  description,
  messageProps,
  inputProps
}: FormWebinarTypeSelectorFieldProps) => {
  const options = EnumTranslationHelper.generateSelectOptionsForTranslatedEnum({
    enumObj: WebinarType,
    enumName: "WebinarType"
  })
  const inputHookName = hookName ?? "input.type"

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
        ...formWebinarTypeSelectorFieldDefaultProps.inputProps,
        ...inputProps,
        options: options
      }}
    />
  )
}
