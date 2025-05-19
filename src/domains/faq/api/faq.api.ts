import { commonApi } from '@/api/common.api'
import {
  FaqEndpointDefinitions,
  faqEndpoints,
  injectFaqTags,
} from '@api_package'

injectFaqTags(commonApi)

const injectedFaqApi = commonApi.injectEndpoints<FaqEndpointDefinitions>({
  endpoints: faqEndpoints,
})

export const useFaqListQuery = injectedFaqApi.endpoints.faqList.useQuery
export const useLazyFaqListQuery = injectedFaqApi.endpoints.faqList.useLazyQuery
export const useFaqListPublicQuery =
  injectedFaqApi.endpoints.faqListPublic.useQuery
export const useLazyFaqListPublicQuery =
  injectedFaqApi.endpoints.faqListPublic.useLazyQuery
export const useFaqDetailQuery = injectedFaqApi.endpoints.faqDetail.useQuery
export const useLazyFaqDetailQuery =
  injectedFaqApi.endpoints.faqDetail.useLazyQuery
export const useFaqDetailPublicQuery =
  injectedFaqApi.endpoints.faqDetailPublic.useQuery
export const useLazyFaqDetailPublicQuery =
  injectedFaqApi.endpoints.faqDetailPublic.useLazyQuery
export const useFaqCreateMutation =
  injectedFaqApi.endpoints.faqCreate.useMutation
export const useFaqUpdateMutation =
  injectedFaqApi.endpoints.faqUpdate.useMutation
export const useFaqDeleteMutation =
  injectedFaqApi.endpoints.faqDelete.useMutation
