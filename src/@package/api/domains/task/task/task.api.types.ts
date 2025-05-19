import {
  ITaskListInput,
  ITaskListResult,
  ITaskDetailInput,
  ITaskDetailResult,
  ITaskCreateInput,
  ITaskCreateResult,
  ITaskUpdateInput,
  ITaskUpdateResult,
  ITaskUpdateFilterInput,
  ITaskDeleteInput,
  ITaskDeleteResult,
  ITaskCreateForProjectInput,
  ITaskCreateForProjectResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type taskListType = QueryDefinition<
  IGraphqlVariables<ITaskListInput>,
  BaseQueryFn,
  never,
  ITaskListResult,
  'commonApi'
>

type taskDetailType = QueryDefinition<
  IGraphqlVariables<ITaskDetailInput>,
  BaseQueryFn,
  never,
  ITaskDetailResult,
  'commonApi'
>

type taskCreateType = MutationDefinition<
  IGraphqlVariables<ITaskCreateInput>,
  BaseQueryFn,
  never,
  ITaskCreateResult,
  'commonApi'
>

type taskCreateForProjectType = MutationDefinition<
  IGraphqlVariables<ITaskCreateForProjectInput>,
  BaseQueryFn,
  never,
  ITaskCreateForProjectResult,
  'commonApi'
>

type taskUpdateType = MutationDefinition<
  IGraphqlVariables<ITaskUpdateInput, ITaskUpdateFilterInput>,
  BaseQueryFn,
  never,
  ITaskUpdateResult,
  'commonApi'
>

type taskDeleteType = MutationDefinition<
  IGraphqlVariables<ITaskDeleteInput>,
  BaseQueryFn,
  never,
  ITaskDeleteResult,
  'commonApi'
>

export type TaskEndpointDefinitions = {
  taskList: taskListType
  taskDetail: taskDetailType
  taskCreate: taskCreateType
  taskCreateForProject: taskCreateForProjectType
  taskUpdate: taskUpdateType
  taskDelete: taskDeleteType
}
