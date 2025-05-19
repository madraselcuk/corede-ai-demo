import { commonApi } from '@/api/common.api'
import {
  NotificationEndpointDefinitions,
  notificationEndpoints,
  injectNotificationTags,
} from '@api_package'

injectNotificationTags(commonApi)

const injectedNotificationApi =
  commonApi.injectEndpoints<NotificationEndpointDefinitions>({
    endpoints: notificationEndpoints,
  })

export const useNotificationListQuery =
  injectedNotificationApi.endpoints.notificationList.useQuery
export const useLazyNotificationListQuery =
  injectedNotificationApi.endpoints.notificationList.useLazyQuery
export const useNotificationDetailQuery =
  injectedNotificationApi.endpoints.notificationDetail.useQuery
export const useLazyNotificationDetailQuery =
  injectedNotificationApi.endpoints.notificationDetail.useLazyQuery
export const useNotificationCreateMutation =
  injectedNotificationApi.endpoints.notificationCreate.useMutation
export const useNotificationUpdateMutation =
  injectedNotificationApi.endpoints.notificationUpdate.useMutation
export const useNotificationDeleteMutation =
  injectedNotificationApi.endpoints.notificationDelete.useMutation
