import { commonApi } from '@/api/common.api'
import {
  BlogDmsEndpointDefinitions,
  blogDmsEndpoints,
  BlogEndpointDefinitions,
  blogEndpoints,
  injectBlogTags,
} from '@api_package'

// BLOG

injectBlogTags(commonApi)

const injectedBlogApi = commonApi.injectEndpoints<BlogEndpointDefinitions>({
  endpoints: blogEndpoints,
})

export const useBlogListQuery = injectedBlogApi.endpoints.blogList.useQuery
export const useLazyBlogListQuery =
  injectedBlogApi.endpoints.blogList.useLazyQuery
export const useBlogListPublicQuery =
  injectedBlogApi.endpoints.blogListPublic.useQuery
export const useLazyBlogListPublicQuery =
  injectedBlogApi.endpoints.blogListPublic.useLazyQuery
export const useBlogDetailQuery = injectedBlogApi.endpoints.blogDetail.useQuery
export const useLazyBlogDetailQuery =
  injectedBlogApi.endpoints.blogDetail.useLazyQuery
export const useBlogDetailPublicQuery =
  injectedBlogApi.endpoints.blogDetailPublic.useQuery
export const useLazyBlogDetailPublicQuery =
  injectedBlogApi.endpoints.blogDetailPublic.useLazyQuery
export const useBlogCreateMutation =
  injectedBlogApi.endpoints.blogCreate.useMutation
export const useBlogUpdateMutation =
  injectedBlogApi.endpoints.blogUpdate.useMutation
export const useBlogDeleteMutation =
  injectedBlogApi.endpoints.blogDelete.useMutation

// BLOG DMS

const injectedBlogDmsApi =
  commonApi.injectEndpoints<BlogDmsEndpointDefinitions>({
    endpoints: blogDmsEndpoints,
  })

export const useBlogImageCreateMutation =
  injectedBlogDmsApi.endpoints.blogImageCreate.useMutation
export const useBlogImageAssignMutation =
  injectedBlogDmsApi.endpoints.blogImageAssign.useMutation
