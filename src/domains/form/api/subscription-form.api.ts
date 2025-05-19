import { commonApi } from '@/api/common.api'
import {
  SubscriptionFormEndpointDefinitions,
  subscriptionFormEndpoints,
  injectSubscriptionFormTags,
} from '@api_package'

injectSubscriptionFormTags(commonApi)

const injectedSubscriptionFormApi =
  commonApi.injectEndpoints<SubscriptionFormEndpointDefinitions>({
    endpoints: subscriptionFormEndpoints,
  })

export const useSubscriptionFormListQuery =
  injectedSubscriptionFormApi.endpoints.subscriptionFormList.useQuery
export const useLazySubscriptionFormListQuery =
  injectedSubscriptionFormApi.endpoints.subscriptionFormList.useLazyQuery
export const useSubscriptionFormDetailQuery =
  injectedSubscriptionFormApi.endpoints.subscriptionFormDetail.useQuery
export const useLazySubscriptionFormDetailQuery =
  injectedSubscriptionFormApi.endpoints.subscriptionFormDetail.useLazyQuery
export const useSubscriptionFormCreateMutation =
  injectedSubscriptionFormApi.endpoints.subscriptionFormCreate.useMutation
export const useSubscriptionFormCreatePublicMutation =
  injectedSubscriptionFormApi.endpoints.subscriptionFormCreatePublic.useMutation
export const useSubscriptionFormCreateUserMutation =
  injectedSubscriptionFormApi.endpoints.subscriptionFormCreateUser.useMutation
export const useSubscriptionFormUpdateMutation =
  injectedSubscriptionFormApi.endpoints.subscriptionFormUpdate.useMutation
export const useSubscriptionFormDeleteMutation =
  injectedSubscriptionFormApi.endpoints.subscriptionFormDelete.useMutation
