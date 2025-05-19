import { i18n } from "@/localization"
import { FormPasswordFieldProps } from "./form-password-field.props"

export const formPasswordFieldPropsDefaultValues: Partial<FormPasswordFieldProps> =
  {
    label: {
      content: i18n.t("common:password")
    }
  }
