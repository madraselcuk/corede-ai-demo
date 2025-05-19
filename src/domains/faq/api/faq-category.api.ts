import { commonApi } from '@/api/common.api'
import {
  FaqCategoryEndpointDefinitions,
  faqCategoryEndpoints,
  injectFaqCategoryTags,
} from '@api_package'

injectFaqCategoryTags(commonApi)

const injectedFaqCategoryApi =
  commonApi.injectEndpoints<FaqCategoryEndpointDefinitions>({
    endpoints: faqCategoryEndpoints,
  })

export const useFaqCategoryListQuery =
  injectedFaqCategoryApi.endpoints.faqCategoryList.useQuery
export const useLazyFaqCategoryListQuery =
  injectedFaqCategoryApi.endpoints.faqCategoryList.useLazyQuery
export const useFaqCategoryListPublicQuery =
  injectedFaqCategoryApi.endpoints.faqCategoryListPublic.useQuery
export const useLazyFaqCategoryListPublicQuery =
  injectedFaqCategoryApi.endpoints.faqCategoryListPublic.useLazyQuery
export const useFaqCategoryDetailQuery =
  injectedFaqCategoryApi.endpoints.faqCategoryDetail.useQuery
export const useLazyFaqCategoryDetailQuery =
  injectedFaqCategoryApi.endpoints.faqCategoryDetail.useLazyQuery
export const useFaqCategoryCreateMutation =
  injectedFaqCategoryApi.endpoints.faqCategoryCreate.useMutation
export const useFaqCategoryUpdateMutation =
  injectedFaqCategoryApi.endpoints.faqCategoryUpdate.useMutation
export const useFaqCategoryDeleteMutation =
  injectedFaqCategoryApi.endpoints.faqCategoryDelete.useMutation
