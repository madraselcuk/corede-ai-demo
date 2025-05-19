import { enumValues, IGraphqlVariables } from '@common_package'
import {
  INotificationHistoryListResult,
  INotificationHistoryListInput,
  INotificationHistoryListRequest,
  INotificationHistoryListResponse,
  notificationHistoryListQuery,
  INotificationHistoryDetailInput,
  INotificationHistoryDetailRequest,
  INotificationHistoryDetailResponse,
  INotificationHistoryDetailResult,
  notificationHistoryDetailQuery,
} from '@corede_package'
import { IApi, injectTags, EndpointQueryBuilder } from '@api_package'
import { NotificationHistoryTags } from './notification-history-tags.enum'
import { EndpointBuilder, BaseQueryFn } from '@reduxjs/toolkit/query'
import { NotificationHistoryEndpointDefinitions } from './notification-history.api.types'

const notificationHistoryApiReducerPath = 'notificationApi'

export const injectNotificationHistoryTags = (api: IApi) =>
  injectTags({
    api,
    name: notificationHistoryApiReducerPath,
    tagTypes: enumValues(NotificationHistoryTags),
    options: { registerTagTypes: true },
  })

export const notificationHistoryEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => NotificationHistoryEndpointDefinitions = (builder) => ({
  notificationHistoryList: builder.query<
    INotificationHistoryListResult,
    IGraphqlVariables<INotificationHistoryListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      INotificationHistoryListRequest,
      INotificationHistoryListResponse,
      INotificationHistoryListResult,
      INotificationHistoryListInput
    >({
      query: notificationHistoryListQuery(),
      providesTags: [],
    }),
  ),

  notificationHistoryDetail: builder.query<
    INotificationHistoryDetailResult,
    IGraphqlVariables<INotificationHistoryDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      INotificationHistoryDetailRequest,
      INotificationHistoryDetailResponse,
      INotificationHistoryDetailResult,
      INotificationHistoryDetailInput
    >({
      query: notificationHistoryDetailQuery(),
      providesTags: [],
    }),
  ),
})
