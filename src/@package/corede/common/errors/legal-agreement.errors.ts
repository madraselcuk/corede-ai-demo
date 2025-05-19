import { IBaseError } from "@common_package";

export const invalidLegalNDA: IBaseError = {
  code: 400,
  message: {
    en: "LegalNDA should be null",
    tr: "legalNDA null olmadı",
  },
  name: "invalidLegalNDA",
};

export const invalidLegalTermAndCond: IBaseError = {
  code: 400,
  message: {
    en: "LegalTermAndCond should be null",
    tr: "LegalTermAndCond null olmalı",
  },
  name: "invalidLegalTermAndCond",
};

export const legalNDAIsRequired: IBaseError = {
  code: 400,
  message: {
    en: "LegalNDA is required",
    tr: "LegalNDA zorunlu",
  },
  name: "legalNDAIsRequired",
};

export const legalTermAndCondIsRequired: IBaseError = {
  code: 400,
  message: {
    en: "LegalTermAndCond is required",
    tr: "LegalTermAndCond zorunlu",
  },
  name: "LegalTermAndCondIsRequired",
};
