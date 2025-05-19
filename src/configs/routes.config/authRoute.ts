import type { Routes } from '@/@types/routes'

const authRoute: Routes = {
  '/sign-in': {
    key: 'signIn',
    authority: [],
  },
  '/sign-in/tfa': {
    key: 'signInTFA',
    authority: [],
  },
  '/sign-up': {
    key: 'signUp',
    authority: [],
  },
  '/sign-up/success': {
    key: 'signUpSuccess',
    authority: [],
  },
  '/sign-up/verify': {
    key: 'signUpVerify',
    authority: [],
  },
  '/sign-up/verify/success': {
    key: 'signUpVerifySuccess',
    authority: [],
  },
  '/resend-verify': {
    key: 'resendVerify',
    authority: [],
  },
  '/resend-verify/success': {
    key: 'resendVerifySuccess',
    authority: [],
  },
  '/resend-verify/required': {
    key: 'resendVerifyRequired',
    authority: [],
  },
  '/reset-password/request': {
    key: 'resetPasswordRequest',
    authority: [],
  },
  '/reset-password/request/success': {
    key: 'resetPasswordRequestSuccess',
    authority: [],
  },
  '/reset-password/complete': {
    key: 'resetPasswordComplete',
    authority: [],
  },
  '/reset-password/complete/success': {
    key: 'resetPasswordCompleteSuccess',
    authority: [],
  },
}

export default authRoute
