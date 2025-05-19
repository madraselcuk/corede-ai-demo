import {
  IGraphqlVariables,
  ILogoutInput,
  ILogoutResult,
  IRequestResetPasswordInput,
  IRequestResetPasswordResult,
  IConfirmRegistrationInput,
  IConfirmRegistrationResult,
  IResetPasswordAfterRequestInput,
  IResetPasswordAfterRequestResult,
  IConfirmRegistrationByUserInput,
  IConfirmRegistrationByUserResult,
  IResendRegistrationConfirmationInput,
  IResendRegistrationConfirmationResult,
  IResetPasswordInput,
  IResetPasswordResult,
} from '@common_package'
import {
  ILoginInput,
  ILoginResult,
  IRegisterInput,
  IRegisterResult,
  IConfirmTwoFactorLoginInput,
  IConfirmTwoFactorLoginResult,
} from '@corede_package'
import { BaseQueryFn, MutationDefinition } from '@reduxjs/toolkit/query'

type loginType = MutationDefinition<
  IGraphqlVariables<ILoginInput>,
  BaseQueryFn,
  never,
  ILoginResult,
  'commonApi'
>

type logoutType = MutationDefinition<
  IGraphqlVariables<ILogoutInput>,
  BaseQueryFn,
  never,
  ILogoutResult,
  'commonApi'
>

type registerType = MutationDefinition<
  IGraphqlVariables<IRegisterInput>,
  BaseQueryFn,
  never,
  IRegisterResult,
  'commonApi'
>

type requestResetPasswordType = MutationDefinition<
  IGraphqlVariables<IRequestResetPasswordInput>,
  BaseQueryFn,
  never,
  IRequestResetPasswordResult,
  'commonApi'
>

type confirmRegistrationType = MutationDefinition<
  IGraphqlVariables<IConfirmRegistrationInput>,
  BaseQueryFn,
  never,
  IConfirmRegistrationResult,
  'commonApi'
>

type resetPasswordAfterRequestType = MutationDefinition<
  IGraphqlVariables<IResetPasswordAfterRequestInput>,
  BaseQueryFn,
  never,
  IResetPasswordAfterRequestResult,
  'commonApi'
>

// TODO: Remove these types if not used
type registrationByUserType = MutationDefinition<
  IGraphqlVariables<IConfirmRegistrationByUserInput>,
  BaseQueryFn,
  never,
  IConfirmRegistrationByUserResult,
  'commonApi'
>

type resetPasswordType = MutationDefinition<
  IGraphqlVariables<IResetPasswordInput>,
  BaseQueryFn,
  never,
  IResetPasswordResult,
  'commonApi'
>

type resendRegistrationConfirmationType = MutationDefinition<
  IGraphqlVariables<IResendRegistrationConfirmationInput>,
  BaseQueryFn,
  never,
  IResendRegistrationConfirmationResult,
  'commonApi'
>

type confirmTwoFactorLoginType = MutationDefinition<
  IGraphqlVariables<IConfirmTwoFactorLoginInput>,
  BaseQueryFn,
  never,
  IConfirmTwoFactorLoginResult,
  'commonApi'
>

export type AuthEndpointDefinitions = {
  login: loginType
  logout: logoutType
  register: registerType
  requestResetPassword: requestResetPasswordType
  confirmRegistration: confirmRegistrationType
  resetPasswordAfterRequest: resetPasswordAfterRequestType
  registrationByUser: registrationByUserType
  resetPassword: resetPasswordType
  resendRegistrationConfirmation: resendRegistrationConfirmationType
  confirmTwoFactorLogin: confirmTwoFactorLoginType
}
