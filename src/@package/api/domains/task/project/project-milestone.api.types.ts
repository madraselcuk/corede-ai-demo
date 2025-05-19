import {
  IProjectMilestoneAddInput,
  IProjectMilestoneAddFilterInput,
  IProjectMilestoneAddResult,
  IProjectMilestoneTaskAddInput,
  IProjectMilestoneTaskAddResult,
  IProjectMilestoneTaskDeleteInput,
  IProjectMilestoneTaskDeleteResult,
  IProjectMilestoneTaskMoveInput,
  IProjectMilestoneTaskMoveResult,
  IProjectMilestoneUpdateInput,
  IProjectMilestoneUpdateResult,
  IProjectMilestoneUpdateFilterInput,
  IProjectMilestoneDeleteInput,
  IProjectMilestoneDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
} from '@reduxjs/toolkit/query'

type projectMilestoneAddType = MutationDefinition<
  IGraphqlVariables<IProjectMilestoneAddInput, IProjectMilestoneAddFilterInput>,
  BaseQueryFn,
  never,
  IProjectMilestoneAddResult,
  'commonApi'
>

type projectMilestoneUpdateType = MutationDefinition<
  IGraphqlVariables<
    IProjectMilestoneUpdateInput,
    IProjectMilestoneUpdateFilterInput
  >,
  BaseQueryFn,
  never,
  IProjectMilestoneUpdateResult,
  'commonApi'
>

type projectMilestoneDeleteType = MutationDefinition<
  IGraphqlVariables<IProjectMilestoneDeleteInput>,
  BaseQueryFn,
  never,
  IProjectMilestoneDeleteResult,
  'commonApi'
>

type projectMilestoneTaskAddType = MutationDefinition<
  IGraphqlVariables<IProjectMilestoneTaskAddInput>,
  BaseQueryFn,
  never,
  IProjectMilestoneTaskAddResult,
  'commonApi'
>

type projectMilestoneTaskDeleteType = MutationDefinition<
  IGraphqlVariables<IProjectMilestoneTaskDeleteInput>,
  BaseQueryFn,
  never,
  IProjectMilestoneTaskDeleteResult,
  'commonApi'
>

type projectMilestoneTaskMoveType = MutationDefinition<
  IGraphqlVariables<IProjectMilestoneTaskMoveInput>,
  BaseQueryFn,
  never,
  IProjectMilestoneTaskMoveResult,
  'commonApi'
>

export type ProjectMilestoneEndpointDefinitions = {
  projectMilestoneAdd: projectMilestoneAddType
  projectMilestoneUpdate: projectMilestoneUpdateType
  projectMilestoneDelete: projectMilestoneDeleteType
  projectMilestoneTaskAdd: projectMilestoneTaskAddType
  projectMilestoneTaskDelete: projectMilestoneTaskDeleteType
  projectMilestoneTaskMove: projectMilestoneTaskMoveType
}
