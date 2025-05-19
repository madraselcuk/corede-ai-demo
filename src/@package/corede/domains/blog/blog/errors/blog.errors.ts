import { IBaseError } from "@common_package";

export const notInputFound: IBaseError = {
  code: 1,
  name: "NotInputFound",
  message: {
    en: "Id or slug must be present",
    tr: "Id veya slug bulunmalidir",
  },
};
