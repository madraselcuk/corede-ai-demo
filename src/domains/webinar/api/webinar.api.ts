import { commonApi } from '@/api/common.api'
import {
  WebinarEndpointDefinitions,
  webinarEndpoints,
  injectWebinarTags,
} from '@api_package'

injectWebinarTags(commonApi)

const injectedWebinarApi =
  commonApi.injectEndpoints<WebinarEndpointDefinitions>({
    endpoints: webinarEndpoints,
  })

export const useWebinarListQuery =
  injectedWebinarApi.endpoints.webinarList.useQuery
export const useLazyWebinarListQuery =
  injectedWebinarApi.endpoints.webinarList.useLazyQuery
export const useWebinarDetailQuery =
  injectedWebinarApi.endpoints.webinarDetail.useQuery
export const useLazyWebinarDetailQuery =
  injectedWebinarApi.endpoints.webinarDetail.useLazyQuery
export const useWebinarCreateMutation =
  injectedWebinarApi.endpoints.webinarCreate.useMutation
export const useWebinarUpdateMutation =
  injectedWebinarApi.endpoints.webinarUpdate.useMutation
export const useWebinarDeleteMutation =
  injectedWebinarApi.endpoints.webinarDelete.useMutation
export const useWebinarJoinPublicMutation =
  injectedWebinarApi.endpoints.webinarJoinPublic.useMutation
