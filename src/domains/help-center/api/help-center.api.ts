import { commonApi } from '@/api/common.api'
import {
  HelpCenterEndpointDefinitions,
  helpCenterEndpoints,
  injectHelpCenterTags,
} from '@api_package'

injectHelpCenterTags(commonApi)

const injectedHelpCenterApi =
  commonApi.injectEndpoints<HelpCenterEndpointDefinitions>({
    endpoints: helpCenterEndpoints,
  })

export const useHelpCenterListQuery =
  injectedHelpCenterApi.endpoints.helpCenterList.useQuery
export const useLazyHelpCenterListQuery =
  injectedHelpCenterApi.endpoints.helpCenterList.useLazyQuery
export const useHelpCenterDetailQuery =
  injectedHelpCenterApi.endpoints.helpCenterDetail.useQuery
export const useLazyHelpCenterDetailQuery =
  injectedHelpCenterApi.endpoints.helpCenterDetail.useLazyQuery
export const useHelpCenterCreateMutation =
  injectedHelpCenterApi.endpoints.helpCenterCreate.useMutation
export const useHelpCenterUpdateMutation =
  injectedHelpCenterApi.endpoints.helpCenterUpdate.useMutation
export const useHelpCenterDeleteMutation =
  injectedHelpCenterApi.endpoints.helpCenterDelete.useMutation
