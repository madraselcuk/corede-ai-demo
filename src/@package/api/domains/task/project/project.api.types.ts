import {
  IProjectListInput,
  IProjectListResult,
  IProjectDetailInput,
  IProjectDetailResult,
  IProjectCreateInput,
  IProjectCreateResult,
  IProjectUpdateInput,
  IProjectUpdateResult,
  IProjectUpdateFilterInput,
  IProjectDeleteInput,
  IProjectDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type projectListType = QueryDefinition<
  IGraphqlVariables<IProjectListInput>,
  BaseQueryFn,
  never,
  IProjectListResult,
  'commonApi'
>

type projectDetailType = QueryDefinition<
  IGraphqlVariables<IProjectDetailInput>,
  BaseQueryFn,
  never,
  IProjectDetailResult,
  'commonApi'
>

type projectCreateType = MutationDefinition<
  IGraphqlVariables<IProjectCreateInput>,
  BaseQueryFn,
  never,
  IProjectCreateResult,
  'commonApi'
>

type projectUpdateType = MutationDefinition<
  IGraphqlVariables<IProjectUpdateInput, IProjectUpdateFilterInput>,
  BaseQueryFn,
  never,
  IProjectUpdateResult,
  'commonApi'
>

type projectDeleteType = MutationDefinition<
  IGraphqlVariables<IProjectDeleteInput>,
  BaseQueryFn,
  never,
  IProjectDeleteResult,
  'commonApi'
>

export type ProjectEndpointDefinitions = {
  projectList: projectListType
  projectDetail: projectDetailType
  projectCreate: projectCreateType
  projectUpdate: projectUpdateType
  projectDelete: projectDeleteType
}
