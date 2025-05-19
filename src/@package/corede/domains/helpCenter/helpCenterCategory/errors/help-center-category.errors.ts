import { IBaseError } from "@common_package";

export const helpCenterRelatedToCategoryExists: IBaseError = {
  code: 401,
  message: {
    en: "There is a help center related to the help center category",
    tr: "Help center category ile bağlantılı bir help center var",
  },
  name: "HelpCenterRelatedToCategoryExists",
};

export const SubCategoryOfCategoryExists: IBaseError = {
  code: 401,
  message: {
    en: "There is a sub category of the help center category",
    tr: "Help center'a ait bit sub category var",
  },
  name: "SubCategoryOfCategoryExists",
};
