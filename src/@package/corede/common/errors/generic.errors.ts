import { IBaseError, IOptionalTranslation } from "@common_package";

export function statusInvalid(
  name: string,
  nameTranslation?: IOptionalTranslation
): IBaseError {
  return {
    code: 401,
    name: "statusInvalid",
    message: {
      en: `Status of ${nameTranslation?.en ?? name} is invalid`,
      tr: `${nameTranslation?.tr ?? name} durumu geçerli değil`,
    },
  };
}
