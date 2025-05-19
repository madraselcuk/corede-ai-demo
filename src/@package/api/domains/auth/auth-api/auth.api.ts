import {
  IGraphqlVariables,
  ILogoutInput,
  ILogoutResult,
  ILogoutRequest,
  ILogoutResponse,
  logoutQuery,
  IRequestResetPasswordInput,
  IRequestResetPasswordResult,
  IRequestResetPasswordRequest,
  IRequestResetPasswordResponse,
  requestResetPasswordQuery,
  IConfirmRegistrationInput,
  IConfirmRegistrationResult,
  IConfirmRegistrationRequest,
  IConfirmRegistrationResponse,
  confirmRegistrationQuery,
  IResetPasswordAfterRequestInput,
  IResetPasswordAfterRequestResult,
  IResetPasswordAfterRequestResponse,
  IResetPasswordAfterRequestRequest,
  resetPasswordAfterRequestQuery,
  IConfirmRegistrationByUserInput,
  IConfirmRegistrationByUserResult,
  IConfirmRegistrationByUserRequest,
  IConfirmRegistrationByUserResponse,
  confirmRegistrationByUserQuery,
  IResendRegistrationConfirmationInput,
  IResendRegistrationConfirmationRequest,
  IResendRegistrationConfirmationResult,
  IResentRegistrationConfirmationResponse,
  resendRegistrationConfirmationQuery,
  IResetPasswordInput,
  IResetPasswordRequest,
  IResetPasswordResponse,
  IResetPasswordResult,
  resetPasswordQuery,
  enumValues,
} from '@common_package'
import {
  ILoginInput,
  ILoginResponse,
  ILoginResult,
  ILoginRequest,
  loginQuery,
  IRegisterInput,
  IRegisterResult,
  IRegisterResponse,
  IRegisterRequest,
  registerQuery,
  IConfirmTwoFactorLoginInput,
  IConfirmTwoFactorLoginRequest,
  IConfirmTwoFactorLoginResult,
  IConfirmTwoFactorLoginResponse,
  confirmTwoFactorLoginQuery,
} from '@corede_package'
import { AuthTags } from './auth-tags.enum'
import { IApi, injectTags } from '../../../redux'
import { EndpointQueryBuilder } from '../../../graphql'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { AuthEndpointDefinitions } from './auth.api.types'

const authApiReducerPath = 'authApi'

export const injectAuthTags = (api: IApi) =>
  injectTags({
    api,
    name: authApiReducerPath,
    tagTypes: enumValues(AuthTags),
    options: { registerTagTypes: true },
  })

export const authEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => AuthEndpointDefinitions = (builder) => ({
  // queries
  login: builder.mutation<ILoginResult, IGraphqlVariables<ILoginInput>>({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      ILoginRequest,
      ILoginResponse,
      ILoginResult,
      ILoginInput
    >({
      query: loginQuery,
    }),
    // After login, we have a valid auth state
    // and should invalidate cache related to auth state
  }),

  register: builder.mutation<
    IRegisterResult,
    IGraphqlVariables<IRegisterInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IRegisterRequest,
      IRegisterResponse,
      IRegisterResult,
      IRegisterInput
    >({
      query: registerQuery,
    }),
    // After registration, we should invalidate any
    // cached registration state
  }),

  logout: builder.mutation<ILogoutResult, IGraphqlVariables<ILogoutInput>>({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      ILogoutRequest,
      ILogoutResponse,
      ILogoutResult,
      ILogoutInput
    >({
      query: logoutQuery,
    }),
    // After logout, we should invalidate all user-related cache
  }),

  requestResetPassword: builder.mutation<
    IRequestResetPasswordResult,
    IGraphqlVariables<IRequestResetPasswordInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IRequestResetPasswordRequest,
      IRequestResetPasswordResponse,
      IRequestResetPasswordResult,
      IRequestResetPasswordInput
    >({
      query: requestResetPasswordQuery,
    }),
    // No cache invalidation needed for password reset request
  }),

  confirmRegistration: builder.mutation<
    IConfirmRegistrationResult,
    IGraphqlVariables<IConfirmRegistrationInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IConfirmRegistrationRequest,
      IConfirmRegistrationResponse,
      IConfirmRegistrationResult,
      IConfirmRegistrationInput
    >({
      query: confirmRegistrationQuery,
    }),
    // Confirmation changes registration and auth state
  }),

  resetPasswordAfterRequest: builder.mutation<
    IResetPasswordAfterRequestResult,
    IGraphqlVariables<IResetPasswordAfterRequestInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IResetPasswordAfterRequestRequest,
      IResetPasswordAfterRequestResponse,
      IResetPasswordAfterRequestResult,
      IResetPasswordAfterRequestInput
    >({
      query: resetPasswordAfterRequestQuery,
    }),
    // Password reset affects auth state
  }),

  registrationByUser: builder.mutation<
    IConfirmRegistrationByUserResult,
    IGraphqlVariables<IConfirmRegistrationByUserInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IConfirmRegistrationByUserRequest,
      IConfirmRegistrationByUserResponse,
      IConfirmRegistrationByUserResult,
      IConfirmRegistrationByUserInput
    >({
      query: confirmRegistrationByUserQuery,
    }),
    // Registration affects user and registration state
  }),

  resetPassword: builder.mutation<
    IResetPasswordResult,
    IGraphqlVariables<IResetPasswordInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IResetPasswordRequest,
      IResetPasswordResponse,
      IResetPasswordResult,
      IResetPasswordInput
    >({
      query: resetPasswordQuery,
    }),
    // Password reset affects auth state
  }),

  resendRegistrationConfirmation: builder.mutation<
    IResendRegistrationConfirmationResult,
    IGraphqlVariables<IResendRegistrationConfirmationInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IResendRegistrationConfirmationRequest,
      IResentRegistrationConfirmationResponse,
      IResendRegistrationConfirmationResult,
      IResendRegistrationConfirmationInput
    >({
      query: resendRegistrationConfirmationQuery,
    }),
    // Resending affects registration state
  }),

  confirmTwoFactorLogin: builder.mutation<
    IConfirmTwoFactorLoginResult,
    IGraphqlVariables<IConfirmTwoFactorLoginInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IConfirmTwoFactorLoginRequest,
      IConfirmTwoFactorLoginResponse,
      IConfirmTwoFactorLoginResult,
      IConfirmTwoFactorLoginInput
    >({
      query: confirmTwoFactorLoginQuery,
    }),
    // 2FA confirmation affects auth state
  }),
})
