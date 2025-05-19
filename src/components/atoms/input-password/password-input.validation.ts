import i18n from "@/localization/i18next"
import { z } from "zod"

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+,.\\/;':"-])[A-Za-z\d!@#$%^&*()_+,.\\/;':"-]{8,}$/

export function validPassword(required?: boolean): z.ZodString {
  let result = z.string()
  if (required) {
    result = result.nonempty(i18n.t("common:requiredPasswordMessage"))
  }

  result = result.regex(passwordRegex, i18n.t("common:invalidPasswordMessage"))

  return result
}
