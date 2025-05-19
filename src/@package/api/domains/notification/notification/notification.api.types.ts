import {
  INotificationListInput,
  INotificationListResult,
  INotificationDetailInput,
  INotificationDetailResult,
  INotificationCreateInput,
  INotificationCreateResult,
  INotificationUpdateInput,
  INotificationUpdateResult,
  INotificationUpdateFilterInput,
  INotificationDeleteInput,
  INotificationDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type notificationListType = QueryDefinition<
  IGraphqlVariables<INotificationListInput>,
  BaseQueryFn,
  never,
  INotificationListResult,
  'commonApi'
>

type notificationDetailType = QueryDefinition<
  IGraphqlVariables<INotificationDetailInput>,
  BaseQueryFn,
  never,
  INotificationDetailResult,
  'commonApi'
>

type notificationCreateType = MutationDefinition<
  IGraphqlVariables<INotificationCreateInput>,
  BaseQueryFn,
  never,
  INotificationCreateResult,
  'commonApi'
>

type notificationUpdateType = MutationDefinition<
  IGraphqlVariables<INotificationUpdateInput, INotificationUpdateFilterInput>,
  BaseQueryFn,
  never,
  INotificationUpdateResult,
  'commonApi'
>

type notificationDeleteType = MutationDefinition<
  IGraphqlVariables<INotificationDeleteInput>,
  BaseQueryFn,
  never,
  INotificationDeleteResult,
  'commonApi'
>

export type NotificationEndpointDefinitions = {
  notificationList: notificationListType
  notificationDetail: notificationDetailType
  notificationCreate: notificationCreateType
  notificationUpdate: notificationUpdateType
  notificationDelete: notificationDeleteType
}
