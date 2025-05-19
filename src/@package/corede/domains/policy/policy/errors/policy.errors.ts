import { IBaseError } from "@common_package";

export const existingPolicyError: IBaseError = {
  code: 2000,
  name: "ExistingPolicy",
  message: {
    en: "Policy already exits",
    tr: "Politika bulunmaktadir",
  },
};
export const policyNotFoundWithVersionCountError: IBaseError = {
  code: 2001,
  name: "PolicyNotFoundWithVersionCount",
  message: {
    en: "Policy with version count should exists to add language for an existing Policy",
    tr: "Varolan bir Politika'ya yeni dil eklemek icin ayni versiyon numarali bir Politika bulunmalidir",
  },
};
export const policyAlreadyAcceptedError: IBaseError = {
  code: 2002,
  name: "PolicyAlreadyAccepted",
  message: {
    en: "Policy is already accepted",
    tr: "Politika kabul edilmistir",
  },
};
export const policyNotFoundError: IBaseError = {
  code: 2003,
  name: "PolicyNotFound",
  message: {
    en: "There is no Policy with given information",
    tr: "Verilen bilgilere sahip bir Politika bulunmamaktadir",
  },
};
