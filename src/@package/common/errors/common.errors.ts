import { IBaseError } from "../interfaces";

export const internalServerError: IBaseError = {
  code: 100,
  name: "internalServerError",
  message: {
    en: "Internal Server Error",
    tr: "Beklenmeyen bir hata ile karşılaşıldı.",
  },
};

export const unknownError: IBaseError = {
  code: 100,
  name: "unknownError",
  message: {
    en: "Unknown error",
    tr: "Beklenmeyen bir hata ile karşılaşıldı.",
  },
};

export const notFoundError: IBaseError = {
  code: 100,
  name: "notFoundError",
  message: {
    en: "Data is not found",
    tr: "Veri Bulunamadı.",
  },
};

export const userNotFoundError: IBaseError = {
  code: 100,
  name: "userNotFoundError",
  message: {
    en: "User is not found",
    tr: "Kullanıcı bulunamadı.",
  },
};
