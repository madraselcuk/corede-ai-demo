export const authPaths = {
  base: '',
  auth: {
    signIn: '/sign-in',
    twoFactorySignIn: '/sign-in/tfa/verify',
    signUp: '/sign-up',
    signUpSuccessful: '/sign-up/success',
    signUpVerify: '/sign-up/verify',
    signUpVerifySuccessful: '/sign-up/verify/success',
    requestResetPassword: '/reset-password/request',
    requestResetPasswordSuccessful: '/reset-password/request/success',
    completeResetPassword: '/reset-password/complete',
    completeResetPasswordSuccessful: '/reset-password/complete/success',
    resendVerify: '/resend-verify',
    resendVerifySuccessful: '/resend-verify/success',
    resendVerifyRequired: '/resend-verify/required',
  },
  oauth: {
    login: {
      success: '/oauth/login/success',
      fail: '/oauth/login/fail',
    },
    register: {
      success: '/oauth/register/success',
      fail: '/oauth/register/fail',
    },
  },
}

export function authFullPath(routePath: string): string {
  return `${authPaths.base}${routePath}`
}
