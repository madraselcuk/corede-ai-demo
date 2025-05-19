import { commonApi } from '@/api/common.api'
import {
  BlogCategoryEndpointDefinitions,
  blogCategoryEndpoints,
  injectBlogCategoryTags,
} from '@api_package'

injectBlogCategoryTags(commonApi)

const injectedBlogCategoryApi =
  commonApi.injectEndpoints<BlogCategoryEndpointDefinitions>({
    endpoints: blogCategoryEndpoints,
  })

export const useBlogCategoryListQuery =
  injectedBlogCategoryApi.endpoints.blogCategoryList.useQuery
export const useLazyBlogCategoryListQuery =
  injectedBlogCategoryApi.endpoints.blogCategoryList.useLazyQuery
export const useBlogCategoryListPublicQuery =
  injectedBlogCategoryApi.endpoints.blogCategoryListPublic.useQuery
export const useLazyBlogCategoryListPublicQuery =
  injectedBlogCategoryApi.endpoints.blogCategoryListPublic.useLazyQuery
export const useBlogCategoryDetailQuery =
  injectedBlogCategoryApi.endpoints.blogCategoryDetail.useQuery
export const useLazyBlogCategoryDetailQuery =
  injectedBlogCategoryApi.endpoints.blogCategoryDetail.useLazyQuery
export const useBlogCategoryCreateMutation =
  injectedBlogCategoryApi.endpoints.blogCategoryCreate.useMutation
export const useBlogCategoryUpdateMutation =
  injectedBlogCategoryApi.endpoints.blogCategoryUpdate.useMutation
export const useBlogCategoryDeleteMutation =
  injectedBlogCategoryApi.endpoints.blogCategoryDelete.useMutation
