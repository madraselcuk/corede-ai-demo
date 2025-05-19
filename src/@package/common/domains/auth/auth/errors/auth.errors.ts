import { IBaseError } from "../../../../interfaces";

export const emailInUserError: IBaseError = {
  code: 1001,
  name: "emailInUserError",
  message: {
    en: "The email address is already in use.",
    tr: "Bu e-posta adresi zaten kullanımda.",
  },
};
export const twoFactorAuthCodeIsSentError: IBaseError = {
  code: 1002,
  name: "twoFactorAuthCodeIsSentError",
  message: {
    en: "A two-factor authentication code has already been sent.",
    tr: "İki faktörlü doğrulama kodu zaten gönderildi.",
  },
};
export const passwordLengthInvalidError: IBaseError = {
  code: 1003,
  name: "passwordLengthInvalidError",
  message: {
    en: "The password length is invalid. Please ensure it meets the required length.",
    tr: "Şifre uzunluğu geçersiz. Lütfen gerekli uzunluğu karşıladığından emin olun.",
  },
};
export const passwordFormatInvalidError: IBaseError = {
  code: 1004,
  name: "passwordFormatInvalidError",
  message: {
    en: "The password format is invalid. Please include a mix of characters.",
    tr: "Şifre formatı geçersiz. Lütfen karakter karışımı içeren bir şifre belirleyin.",
  },
};
export const usernameInUseError: IBaseError = {
  code: 1005,
  name: "usernameInUseError",
  message: {
    en: "The username is already in use. Please choose another.",
    tr: "Kullanıcı adı zaten kullanımda. Lütfen başka bir kullanıcı adı seçin.",
  },
};
export const roleChangeError: IBaseError = {
  code: 1006,
  name: "roleChangeError",
  message: {
    en: "An error occurred while changing the user role.",
    tr: "Kullanıcı rolü değiştirilirken bir hata oluştu.",
  },
};
export const emailIsNotRegisteredError: IBaseError = {
  code: 1007,
  name: "emailIsNotRegisteredError",
  message: {
    en: "This email address is not registered.",
    tr: "Bu e-posta adresi kayıtlı değil.",
  },
};
export const wrongPasswordError: IBaseError = {
  code: 1008,
  name: "wrongPasswordError",
  message: {
    en: "The password you entered is incorrect.",
    tr: "Girdiğiniz şifre yanlış.",
  },
};
export const codeVerificationFailedError: IBaseError = {
  code: 1009,
  name: "codeVerificationFailedError",
  message: {
    en: "Verification of the code failed. Please try again.",
    tr: "Kod doğrulaması başarısız oldu. Lütfen tekrar deneyin.",
  },
};
export const usernameIsUsedError: IBaseError = {
  code: 1010,
  name: "usernameIsUsedError",
  message: {
    en: "This username is already in use.",
    tr: "Bu kullanıcı adı zaten kullanımda.",
  },
};
export const userRegistrationFailedError: IBaseError = {
  code: 1011,
  name: "userRegistrationFailedError",
  message: {
    en: "User registration failed. Please try again later.",
    tr: "Kullanıcı kaydı başarısız oldu. Lütfen daha sonra tekrar deneyin.",
  },
};
export const googleUserRegistrationFailedError: IBaseError = {
  code: 1012,
  name: "googleUserRegistrationFailedError",
  message: {
    en: "Google user registration failed. Please try again.",
    tr: "Google kullanıcı kaydı başarısız oldu. Lütfen tekrar deneyin.",
  },
};
export const facebookUserRegistrationFailedError: IBaseError = {
  code: 1013,
  name: "facebookUserRegistrationFailedError",
  message: {
    en: "Facebook user registration failed. Please try again.",
    tr: "Facebook kullanıcı kaydı başarısız oldu. Lütfen tekrar deneyin.",
  },
};
export const linkedInUserRegistrationFailedError: IBaseError = {
  code: 1014,
  name: "linkedInUserRegistrationFailedError",
  message: {
    en: "LinkedIn user registration failed. Please try again.",
    tr: "LinkedIn kullanıcı kaydı başarısız oldu. Lütfen tekrar deneyin.",
  },
};
export const loginFailedError: IBaseError = {
  code: 1015,
  name: "loginFailedError",
  message: {
    en: "Login failed. Please check your credentials.",
    tr: "Giriş başarısız oldu. Lütfen kimlik bilgilerinizi kontrol edin.",
  },
};
export const alreadyRegisteredError: IBaseError = {
  code: 1016,
  name: "alreadyRegisteredError",
  message: {
    en: "This account is already registered.",
    tr: "Bu hesap zaten kayıtlı.",
  },
};
export const loginFailedPasswordResetRequiredError: IBaseError = {
  code: 1017,
  name: "loginFailedPasswordResetRequiredError",
  message: {
    en: "Login failed. Password reset is required.",
    tr: "Giriş başarısız oldu. Şifre sıfırlama gereklidir.",
  },
};
export const registrationConfirmationIsRequiredError: IBaseError = {
  code: 1018,
  name: "registrationConfirmationIsRequiredError",
  message: {
    en: "Registration confirmation is required.",
    tr: "Kayıt onayı gereklidir.",
  },
};
export const userIsNotRegisteredError: IBaseError = {
  code: 1019,
  name: "userIsNotRegisteredError",
  message: {
    en: "The user is not registered.",
    tr: "Kullanıcı kayıtlı değil.",
  },
};
export const registrationAlreadyConfirmedError: IBaseError = {
  code: 1020,
  name: "registrationAlreadyConfirmedError",
  message: {
    en: "Registration has already been confirmed.",
    tr: "Kayıt zaten onaylanmış.",
  },
};
export const passwordMustBeDifferentFromPreviousError: IBaseError = {
  code: 102,
  name: "passwordMustBeDifferentFromPreviousError",
  message: {
    en: "The new password must be different from the previous one.",
    tr: "Yeni şifre, önceki şifreden farklı olmalıdır.",
  },
};
export const resetPasswordSaveError: IBaseError = {
  code: 102,
  name: "resetPasswordSaveError",
  message: {
    en: "An error occurred while saving the new password.",
    tr: "Yeni şifre kaydedilirken bir hata oluştu.",
  },
};
export const pendingRequestExistsError: IBaseError = {
  code: 102,
  name: "pendingRequestExistsError",
  message: {
    en: "There is already a pending request.",
    tr: "Zaten bekleyen bir istek mevcut.",
  },
};
export const noPendingRequestError: IBaseError = {
  code: 102,
  name: "noPendingRequestError",
  message: {
    en: "No pending requests found.",
    tr: "Bekleyen istek bulunamadı.",
  },
};
export const registerSuccessError: IBaseError = {
  code: 102,
  name: "registerSuccessError",
  message: {
    en: "User registration was successful.",
    tr: "Kullanıcı kaydı başarılı.",
  },
};
export const invalidPasswordError: IBaseError = {
  code: 102,
  name: "invalidPasswordError",
  message: {
    en: "The provided password is invalid.",
    tr: "Sağlanan şifre geçersiz.",
  },
};
export const invalidRefreshTokenError: IBaseError = {
  code: 102,
  name: "invalidRefreshToken",
  message: {
    en: "The refresh token is invalid.",
    tr: "Yenileme jetonu geçersiz.",
  },
};

export const invalidRegistrationCodeFormatError: IBaseError = {
  code: 102,
  name: "invalidRegistrationCodeFormat",
  message: {
    en: "The registration code format is invalid.",
    tr: "Kayıt kodu formatı geçersiz.",
  },
};

export const registrationConfirmationInfoNotFoundError: IBaseError = {
  code: 102,
  name: "registrationConfirmationInfoNotFound",
  message: {
    en: "Registration confirmation information not found.",
    tr: "Kayıt onay bilgisi bulunamadı.",
  },
};

export const invalidTwoFactorAuthCodeError: IBaseError = {
  code: 102,
  name: "invalidTwoFactorAuthCode",
  message: {
    en: "The two-factor authentication code is invalid.",
    tr: "İki faktörlü doğrulama kodu geçersiz.",
  },
};

export const twoFactorAuthCodeHasExpiredError: IBaseError = {
  code: 102,
  name: "twoFactorAuthCodeHasExpiredError",
  message: {
    en: "The two-factor authentication code has expired.",
    tr: "İki faktörlü doğrulama kodunun süresi doldu.",
  },
};

export const canNotProvidePasswordError: IBaseError = {
  code: 102,
  name: "canNotProvidePasswordError",
  message: {
    en: "Can not provide password. Registered user will assign his/her own password",
    tr: "Şifre belirlenemez. Kaydedilen kullanıcı kendisi şifresini belirleyecektir.",
  },
};

export const passwordIsRequiredError: IBaseError = {
  code: 102,
  name: "passwordIsRequiredError",
  message: {
    en: "A password is required.",
    tr: "Şifre gereklidir.",
  },
};

export const registererUserNotFoundError: IBaseError = {
  code: 102,
  name: "registererUserNotFoundError",
  message: {
    en: "The registering user was not found.",
    tr: "Kayıt yapan kullanıcı bulunamadı.",
  },
};

export const refreshTokenNotFoundError: IBaseError = {
  code: 102,
  name: "refreshTokenNotFoundError",
  message: {
    en: "Refresh token not found.",
    tr: "Yenileme jetonu bulunamadı.",
  },
};

export const tokenExpiredError: IBaseError = {
  code: 102,
  name: "tokenExpiredError",
  message: {
    en: "The token has expired.",
    tr: "Jetonun süresi doldu.",
  },
};

export const userDoNotHaveRegistererUserError: IBaseError = {
  code: 102,
  name: "userDoNotHaveRegistererUserError",
  message: {
    en: "The user does not have a registering user.",
    tr: "Kullanıcının bir kayıt yapanı yok.",
  },
};

export const userInvalidRegistererUserError: IBaseError = {
  code: 102,
  name: "userInvalidRegistererUserError",
  message: {
    en: "The registering user is invalid.",
    tr: "Kayıt yapan kullanıcı geçersiz.",
  },
};

export const passwordInputNotFoundError: IBaseError = {
  code: 102,
  name: "passwordInputNotFoundError",
  message: {
    en: "Password input was not found.",
    tr: "Şifre girişi bulunamadı.",
  },
};

export const parametersInvalidError: IBaseError = {
  code: 102,
  name: "parametersInvalidError",
  message: {
    en: "The provided parameters are invalid.",
    tr: "Sağlanan parametreler geçersiz.",
  },
};

export const parametersNotFoundError: IBaseError = {
  code: 102,
  name: "parametersNotFoundError",
  message: {
    en: "Required parameters were not found.",
    tr: "Gerekli parametreler bulunamadı.",
  },
};

export const authTokenNotFoundError: IBaseError = {
  code: 102,
  name: "authTokenNotFoundError",
  message: {
    en: "Authorization token not found.",
    tr: "Yetkilendirme jetonu bulunamadı.",
  },
};

export const invalidAuthTokenError: IBaseError = {
  code: 102,
  name: "invalidAuthTokenError",
  message: {
    en: "The authorization token is invalid.",
    tr: "Yetkilendirme jetonu geçersiz.",
  },
};

export const unauthorizedError: IBaseError = {
  code: 102,
  name: "unauthorizedError",
  message: {
    en: "You are not authorized to perform this action.",
    tr: "Bu işlemi gerçekleştirmek için yetkiniz yok.",
  },
};