import { IBaseError } from "@common_package";

export const googleOAuthProfileHasNoEmail: IBaseError = {
  code: 100,
  name: "GoogleOAuthProfileHasNoEmail",
  message: {
    en: "Google account has no email.",
    tr: "Google hesabinda email bulunmamaktadir.",
  },
};

export const googleOAuthProfileHasNotBeenVerified: IBaseError = {
  code: 100,
  name: "GoogleOAuthProfileHasNotBeenVerified",
  message: {
    en: "Google account has not been verified yet.",
    tr: "Google hesabi henuz onaylanmamistir.",
  },
};

export const googleOAuthProfileHasNoName: IBaseError = {
  code: 100,
  name: "GoogleOAuthProfileHasNoName",
  message: {
    en: "Google account has no name info.",
    tr: "Google hesabinda isim bilgisi bulunmamaktadir",
  },
};

export const linkedinOAuthProfileHasNoEmail: IBaseError = {
  code: 100,
  name: "LinkedinOAuthProfileHasNoEmail",
  message: {
    en: "Linkedin account has no email.",
    tr: "Linkedin hesabinda email bulunmamaktadir.",
  },
};

export const linkedinOAuthProfileHasNoName: IBaseError = {
  code: 100,
  name: "LinkedinOAuthProfileHasNoName",
  message: {
    en: "Linkedin account has no name info.",
    tr: "Linkedin hesabinda isim bilgisi bulunmamaktadir",
  },
};
