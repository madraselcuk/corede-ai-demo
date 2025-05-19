import { IBaseError } from "../../../interfaces";

export const invalidContentTypeError: IBaseError = {
  code: 1001,
  name: "invalidContentTypeError",
  message: {
    en: "The content type provided is invalid.",
    tr: "Sağlanan içerik türü geçersiz.",
  },
};
