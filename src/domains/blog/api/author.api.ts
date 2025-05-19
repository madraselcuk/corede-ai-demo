import { commonApi } from '@/api/common.api'
import {
  AuthorEndpointDefinitions,
  authorEndpoints,
  injectAuthorTags,
} from '@api_package'

injectAuthorTags(commonApi)

const injectedAuthorApi = commonApi.injectEndpoints<AuthorEndpointDefinitions>({
  endpoints: authorEndpoints,
})

export const useAuthorListQuery =
  injectedAuthorApi.endpoints.authorList.useQuery
export const useLazyAuthorListQuery =
  injectedAuthorApi.endpoints.authorList.useLazyQuery
export const useAuthorDetailQuery =
  injectedAuthorApi.endpoints.authorDetail.useQuery
export const useLazyAuthorDetailQuery =
  injectedAuthorApi.endpoints.authorDetail.useLazyQuery
export const useAuthorCreateMutation =
  injectedAuthorApi.endpoints.authorCreate.useMutation
export const useAuthorUpdateMutation =
  injectedAuthorApi.endpoints.authorUpdate.useMutation
export const useAuthorDeleteMutation =
  injectedAuthorApi.endpoints.authorDelete.useMutation
