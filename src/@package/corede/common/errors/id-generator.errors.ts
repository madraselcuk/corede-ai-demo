import { IBaseError } from "@common_package";

export const monthlyIdLimitExceed: IBaseError = {
  message: {
    en: "Every organization can have max 999 entities in a month",
    tr: "Bir organizasyon bir ayda maximum 999 kayit sahibi olabilir",
  },
  name: "monthlyIdLimitExceed",
  code: 401,
};
