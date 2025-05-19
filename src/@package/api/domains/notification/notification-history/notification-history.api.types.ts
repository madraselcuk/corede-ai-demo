import {
  INotificationHistoryListInput,
  INotificationHistoryListResult,
  INotificationHistoryDetailInput,
  INotificationHistoryDetailResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import { BaseQueryFn, QueryDefinition } from '@reduxjs/toolkit/query'

type notificationHistoryListType = QueryDefinition<
  IGraphqlVariables<INotificationHistoryListInput>,
  BaseQueryFn,
  never,
  INotificationHistoryListResult,
  'commonApi'
>

type notificationHistoryDetailType = QueryDefinition<
  IGraphqlVariables<INotificationHistoryDetailInput>,
  BaseQueryFn,
  never,
  INotificationHistoryDetailResult,
  'commonApi'
>

export type NotificationHistoryEndpointDefinitions = {
  notificationHistoryList: notificationHistoryListType
  notificationHistoryDetail: notificationHistoryDetailType
}
