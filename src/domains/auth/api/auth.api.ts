import { commonApi } from '@/api/common.api'
import {
  AuthEndpointDefinitions,
  authEndpoints,
  injectAuthTags,
} from '@api_package'

injectAuthTags(commonApi)

// Inject endpoints
const injectedApi = commonApi.injectEndpoints<AuthEndpointDefinitions>({
  endpoints: authEndpoints,
})

export const useLoginMutation = injectedApi.endpoints.login.useMutation
export const useLogoutMutation = injectedApi.endpoints.logout.useMutation
export const useRegisterMutation = injectedApi.endpoints.register.useMutation
export const useRequestResetPasswordMutation =
  injectedApi.endpoints.requestResetPassword.useMutation
export const useConfirmRegistrationMutation =
  injectedApi.endpoints.confirmRegistration.useMutation
export const useResetPasswordAfterRequestMutation =
  injectedApi.endpoints.resetPasswordAfterRequest.useMutation
export const useRegistrationByUserMutation =
  injectedApi.endpoints.registrationByUser.useMutation
export const useResetPasswordMutation =
  injectedApi.endpoints.resetPassword.useMutation
export const useResendRegistrationConfirmationMutation =
  injectedApi.endpoints.resendRegistrationConfirmation.useMutation
export const useConfirmTwoFactorLoginMutation =
  injectedApi.endpoints.confirmTwoFactorLogin.useMutation
