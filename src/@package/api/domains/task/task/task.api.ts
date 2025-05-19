import {
  ITaskListInput,
  ITaskListRequest,
  ITaskListResponse,
  ITaskListResult,
  taskListQuery,
  ITaskDetailInput,
  ITaskDetailRequest,
  ITaskDetailResponse,
  ITaskDetailResult,
  ITaskCreateInput,
  ITaskCreateRequest,
  ITaskCreateResponse,
  ITaskCreateResult,
  taskCreateQuery,
  ITaskCreateForProjectInput,
  ITaskCreateForProjectRequest,
  ITaskCreateForProjectResponse,
  ITaskCreateForProjectResult,
  taskCreateForProjectQuery,
  ITaskUpdateInput,
  ITaskUpdateRequest,
  ITaskUpdateResponse,
  ITaskUpdateResult,
  taskUpdateQuery,
  ITaskUpdateFilterInput,
  taskDeleteQuery,
  ITaskDeleteInput,
  ITaskDeleteRequest,
  ITaskDeleteResponse,
  ITaskDeleteResult,
  taskDetailQuery,
} from '@corede_package'
import { enumValues, IGraphqlVariables } from '@common_package'
import { IApi, injectTags, EndpointQueryBuilder } from '@api_package'
import { EndpointBuilder, BaseQueryFn } from '@reduxjs/toolkit/query'
import { TaskTags } from './task-tags.enum'
import { TaskEndpointDefinitions } from './task.api.types'

const taskApiReducerPath = 'taskApi'

export const injectTaskTags = (api: IApi) =>
  injectTags({
    api,
    name: taskApiReducerPath,
    tagTypes: enumValues(TaskTags),
    options: { registerTagTypes: true },
  })

export const taskEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => TaskEndpointDefinitions = (builder) => ({
  // queries
  taskList: builder.query<ITaskListResult, IGraphqlVariables<ITaskListInput>>(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ITaskListRequest,
      ITaskListResponse,
      ITaskListResult,
      ITaskListInput
    >({
      query: taskListQuery(),
      providesTags: [],
    }),
  ),

  taskDetail: builder.query<
    ITaskDetailResult,
    IGraphqlVariables<ITaskDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ITaskDetailRequest,
      ITaskDetailResponse,
      ITaskDetailResult,
      ITaskDetailInput
    >({
      query: taskDetailQuery(),
      providesTags: [],
    }),
  ),

  // mutation
  taskCreate: builder.mutation<
    ITaskCreateResult,
    IGraphqlVariables<ITaskCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ITaskCreateRequest,
      ITaskCreateResponse,
      ITaskCreateResult,
      ITaskCreateInput
    >({
      query: taskCreateQuery,
      invalidatesTags: [],
    }),
  ),

  taskCreateForProject: builder.mutation<
    ITaskCreateForProjectResult,
    IGraphqlVariables<ITaskCreateForProjectInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ITaskCreateForProjectRequest,
      ITaskCreateForProjectResponse,
      ITaskCreateForProjectResult,
      ITaskCreateForProjectInput
    >({
      query: taskCreateForProjectQuery,
      invalidatesTags: [],
    }),
  ),

  taskUpdate: builder.mutation<
    ITaskUpdateResult,
    IGraphqlVariables<ITaskUpdateInput, ITaskUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ITaskUpdateRequest,
      ITaskUpdateResponse,
      ITaskUpdateResult,
      ITaskUpdateInput,
      ITaskUpdateFilterInput
    >({
      query: taskUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  taskDelete: builder.mutation<
    ITaskDeleteResult,
    IGraphqlVariables<ITaskDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ITaskDeleteRequest,
      ITaskDeleteResponse,
      ITaskDeleteResult,
      ITaskDeleteInput
    >({
      query: taskDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
