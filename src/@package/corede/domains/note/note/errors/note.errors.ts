import { IBaseError } from "@common_package";

export const invalidTargetType: IBaseError = {
  code: 401,
  message: {
    en: "TargetType already exists, targetType input is expected to be null",
    tr: "TargetType'i zaten mevcuti targetType null olmalı",
  },
  name: "InvalidTargetType",
};
