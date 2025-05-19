import { commonApi } from '@/api/common.api'
import {
  HelpCenterCategoryEndpointDefinitions,
  helpCenterCategoryEndpoints,
  injectHelpCenterCategoryTags,
} from '@api_package'

injectHelpCenterCategoryTags(commonApi)

const injectedHelpCenterCategoryApi =
  commonApi.injectEndpoints<HelpCenterCategoryEndpointDefinitions>({
    endpoints: helpCenterCategoryEndpoints,
  })

export const useHelpCenterCategoryListQuery =
  injectedHelpCenterCategoryApi.endpoints.helpCenterCategoryList.useQuery
export const useLazyHelpCenterCategoryListQuery =
  injectedHelpCenterCategoryApi.endpoints.helpCenterCategoryList.useLazyQuery
export const useHelpCenterCategoryDetailQuery =
  injectedHelpCenterCategoryApi.endpoints.helpCenterCategoryDetail.useQuery
export const useLazyHelpCenterCategoryDetailQuery =
  injectedHelpCenterCategoryApi.endpoints.helpCenterCategoryDetail.useLazyQuery
export const useHelpCenterCategoryCreateMutation =
  injectedHelpCenterCategoryApi.endpoints.helpCenterCategoryCreate.useMutation
export const useHelpCenterCategoryUpdateMutation =
  injectedHelpCenterCategoryApi.endpoints.helpCenterCategoryUpdate.useMutation
export const useHelpCenterCategoryDeleteMutation =
  injectedHelpCenterCategoryApi.endpoints.helpCenterCategoryDelete.useMutation
