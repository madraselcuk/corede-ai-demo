import {
  IProjectMilestoneAddInput,
  IProjectMilestoneAddRequest,
  IProjectMilestoneAddResponse,
  IProjectMilestoneAddResult,
  projectMilestoneAddQuery,
  IProjectMilestoneUpdateInput,
  IProjectMilestoneUpdateRequest,
  IProjectMilestoneUpdateResponse,
  IProjectMilestoneUpdateResult,
  projectMilestoneUpdateQuery,
  IProjectMilestoneUpdateFilterInput,
  projectMilestoneDeleteQuery,
  IProjectMilestoneDeleteInput,
  IProjectMilestoneDeleteRequest,
  IProjectMilestoneDeleteResponse,
  IProjectMilestoneDeleteResult,
  IProjectMilestoneAddFilterInput,
  IProjectMilestoneTaskAddResult,
  IProjectMilestoneTaskAddInput,
  IProjectMilestoneTaskAddRequest,
  IProjectMilestoneTaskAddResponse,
  IProjectMilestoneTaskDeleteResult,
  IProjectMilestoneTaskDeleteInput,
  IProjectMilestoneTaskDeleteRequest,
  IProjectMilestoneTaskDeleteResponse,
  IProjectMilestoneTaskMoveRequest,
  IProjectMilestoneTaskMoveResult,
  IProjectMilestoneTaskMoveInput,
  IProjectMilestoneTaskMoveResponse,
  projectMilestoneTaskAddQuery,
} from '@corede_package'
import { enumValues, IGraphqlVariables } from '@common_package'
import { EndpointQueryBuilder, IApi, injectTags } from '@api_package'
import { ProjectMilestoneTags } from './project-milestone-tags.enum'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { ProjectMilestoneEndpointDefinitions } from './project-milestone.api.types'

const projectMilestoneApiReducerPath = 'projectMilestoneApi'

export const injectProjectMilestoneTags = (api: IApi) =>
  injectTags({
    api,
    name: projectMilestoneApiReducerPath,
    tagTypes: enumValues(ProjectMilestoneTags),
    options: { registerTagTypes: true },
  })

export const projectMilestoneEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => ProjectMilestoneEndpointDefinitions = (builder) => ({
  projectMilestoneAdd: builder.mutation<
    IProjectMilestoneAddResult,
    IGraphqlVariables<
      IProjectMilestoneAddInput,
      IProjectMilestoneAddFilterInput
    >
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectMilestoneAddRequest,
      IProjectMilestoneAddResponse,
      IProjectMilestoneAddResult,
      IProjectMilestoneAddInput,
      IProjectMilestoneAddFilterInput
    >({
      query: projectMilestoneAddQuery,
      invalidatesTags: [],
    }),
  ),

  projectMilestoneUpdate: builder.mutation<
    IProjectMilestoneUpdateResult,
    IGraphqlVariables<
      IProjectMilestoneUpdateInput,
      IProjectMilestoneUpdateFilterInput
    >
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectMilestoneUpdateRequest,
      IProjectMilestoneUpdateResponse,
      IProjectMilestoneUpdateResult,
      IProjectMilestoneUpdateInput,
      IProjectMilestoneUpdateFilterInput
    >({
      query: projectMilestoneUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  projectMilestoneDelete: builder.mutation<
    IProjectMilestoneDeleteResult,
    IGraphqlVariables<IProjectMilestoneDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectMilestoneDeleteRequest,
      IProjectMilestoneDeleteResponse,
      IProjectMilestoneDeleteResult,
      IProjectMilestoneDeleteInput
    >({
      query: projectMilestoneDeleteQuery,
      invalidatesTags: [],
    }),
  ),
  projectMilestoneTaskAdd: builder.mutation<
    IProjectMilestoneTaskAddResult,
    IGraphqlVariables<IProjectMilestoneTaskAddInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectMilestoneTaskAddRequest,
      IProjectMilestoneTaskAddResponse,
      IProjectMilestoneTaskAddResult,
      IProjectMilestoneTaskAddInput
    >({
      query: projectMilestoneTaskAddQuery,
      invalidatesTags: [],
    }),
  ),
  projectMilestoneTaskDelete: builder.mutation<
    IProjectMilestoneTaskDeleteResult,
    IGraphqlVariables<IProjectMilestoneTaskDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectMilestoneTaskDeleteRequest,
      IProjectMilestoneTaskDeleteResponse,
      IProjectMilestoneTaskDeleteResult,
      IProjectMilestoneTaskDeleteInput
    >({
      query: projectMilestoneUpdateQuery,
      invalidatesTags: [],
    }),
  ),
  projectMilestoneTaskMove: builder.mutation<
    IProjectMilestoneTaskMoveResult,
    IGraphqlVariables<IProjectMilestoneTaskMoveInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IProjectMilestoneTaskMoveRequest,
      IProjectMilestoneTaskMoveResponse,
      IProjectMilestoneTaskMoveResult,
      IProjectMilestoneTaskMoveInput
    >({
      query: projectMilestoneUpdateQuery,
      invalidatesTags: [],
    }),
  ),
})
