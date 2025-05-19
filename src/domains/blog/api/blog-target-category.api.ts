import { commonApi } from '@/api/common.api'
import {
  BlogTargetCategoryEndpointDefinitions,
  blogTargetCategoryEndpoints,
  injectBlogTargetCategoryTags,
} from '@api_package'

injectBlogTargetCategoryTags(commonApi)

const injectedBlogTargetCategoryApi =
  commonApi.injectEndpoints<BlogTargetCategoryEndpointDefinitions>({
    endpoints: blogTargetCategoryEndpoints,
  })

export const useBlogTargetCategoryListQuery =
  injectedBlogTargetCategoryApi.endpoints.blogTargetCategoryList.useQuery
export const useLazyBlogTargetCategoryListQuery =
  injectedBlogTargetCategoryApi.endpoints.blogTargetCategoryList.useLazyQuery
export const useBlogTargetCategoryDetailQuery =
  injectedBlogTargetCategoryApi.endpoints.blogTargetCategoryDetail.useQuery
export const useLazyBlogTargetCategoryDetailQuery =
  injectedBlogTargetCategoryApi.endpoints.blogTargetCategoryDetail.useLazyQuery
export const useBlogTargetCategoryCreateMutation =
  injectedBlogTargetCategoryApi.endpoints.blogTargetCategoryCreate.useMutation
export const useBlogTargetCategoryUpdateMutation =
  injectedBlogTargetCategoryApi.endpoints.blogTargetCategoryUpdate.useMutation
export const useBlogTargetCategoryDeleteMutation =
  injectedBlogTargetCategoryApi.endpoints.blogTargetCategoryDelete.useMutation
