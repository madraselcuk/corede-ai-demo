import { i18n } from "@/localization"
import { FormPhoneFieldProps } from "./form-phone-field.props"

export const formPhoneFieldPropsDefaultValues: Partial<FormPhoneFieldProps> = {
  label: {
    content: i18n.t("common:phoneNumber")
  }
}
