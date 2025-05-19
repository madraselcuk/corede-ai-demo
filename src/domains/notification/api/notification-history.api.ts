import { commonApi } from '@/api/common.api'
import {
  NotificationHistoryEndpointDefinitions,
  notificationHistoryEndpoints,
  injectNotificationHistoryTags,
} from '@api_package'

injectNotificationHistoryTags(commonApi)

const injectedNotificationHistoryApi =
  commonApi.injectEndpoints<NotificationHistoryEndpointDefinitions>({
    endpoints: notificationHistoryEndpoints,
  })

export const useNotificationHistoryListQuery =
  injectedNotificationHistoryApi.endpoints.notificationHistoryList.useQuery
export const useLazyNotificationHistoryListQuery =
  injectedNotificationHistoryApi.endpoints.notificationHistoryList.useLazyQuery
export const useNotificationHistoryDetailQuery =
  injectedNotificationHistoryApi.endpoints.notificationHistoryDetail.useQuery
export const useLazyNotificationHistoryDetailQuery =
  injectedNotificationHistoryApi.endpoints.notificationHistoryDetail
    .useLazyQuery
