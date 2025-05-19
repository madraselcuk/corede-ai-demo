import { enumValues, IGraphqlVariables } from '@common_package'
import {
  INotificationListResult,
  INotificationListInput,
  INotificationListRequest,
  INotificationListResponse,
  notificationListQuery,
  INotificationCreateResult,
  INotificationCreateInput,
  INotificationCreateRequest,
  INotificationCreateResponse,
  notificationCreateQuery,
  INotificationUpdateResult,
  INotificationUpdateInput,
  INotificationUpdateFilterInput,
  INotificationUpdateRequest,
  INotificationUpdateResponse,
  notificationUpdateQuery,
  INotificationDeleteResult,
  INotificationDeleteInput,
  INotificationDeleteRequest,
  INotificationDeleteResponse,
  notificationDeleteQuery,
  INotificationDetailInput,
  INotificationDetailRequest,
  INotificationDetailResponse,
  INotificationDetailResult,
  notificationDetailQuery,
} from '@corede_package'
import { EndpointQueryBuilder, IApi, injectTags } from '@api_package'
import { EndpointBuilder, BaseQueryFn } from '@reduxjs/toolkit/query'
import { NotificationTags } from './notification-tags.enum'
import { NotificationEndpointDefinitions } from './notification.api.types'

const notificationApiReducerPath = 'notificationApi'

export const injectNotificationTags = (api: IApi) =>
  injectTags({
    api,
    name: notificationApiReducerPath,
    tagTypes: enumValues(NotificationTags),
    options: { registerTagTypes: true },
  })

export const notificationEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => NotificationEndpointDefinitions = (builder) => ({
  notificationList: builder.query<
    INotificationListResult,
    IGraphqlVariables<INotificationListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      INotificationListRequest,
      INotificationListResponse,
      INotificationListResult,
      INotificationListInput
    >({
      query: notificationListQuery,
      providesTags: [],
    }),
  ),
  notificationDetail: builder.query<
    INotificationDetailResult,
    IGraphqlVariables<INotificationDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      INotificationDetailRequest,
      INotificationDetailResponse,
      INotificationDetailResult,
      INotificationDetailInput
    >({
      query: notificationDetailQuery,
      providesTags: [],
    }),
  ),

  // mutations

  notificationCreate: builder.mutation<
    INotificationCreateResult,
    IGraphqlVariables<INotificationCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      INotificationCreateRequest,
      INotificationCreateResponse,
      INotificationCreateResult,
      INotificationCreateInput
    >({
      query: notificationCreateQuery,
      invalidatesTags: [],
    }),
  ),

  notificationUpdate: builder.mutation<
    INotificationUpdateResult,
    IGraphqlVariables<INotificationUpdateInput, INotificationUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      INotificationUpdateRequest,
      INotificationUpdateResponse,
      INotificationUpdateResult,
      INotificationUpdateInput,
      INotificationUpdateFilterInput
    >({
      query: notificationUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  notificationDelete: builder.mutation<
    INotificationDeleteResult,
    IGraphqlVariables<INotificationDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      INotificationDeleteRequest,
      INotificationDeleteResponse,
      INotificationDeleteResult,
      INotificationDeleteInput
    >({
      query: notificationDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
