import { commonApi } from '@/api/common.api'
import {
  ProjectEndpointDefinitions,
  projectMilestoneEndpoints,
  injectProjectTags,
  projectEndpoints,
  ProjectMilestoneEndpointDefinitions,
  injectProjectMilestoneTags,
} from '@api_package'

// PROJECT

injectProjectTags(commonApi)

const injectedProjectApi =
  commonApi.injectEndpoints<ProjectEndpointDefinitions>({
    endpoints: projectEndpoints,
  })

export const useProjectListQuery =
  injectedProjectApi.endpoints.projectList.useQuery
export const useLazyProjectListQuery =
  injectedProjectApi.endpoints.projectList.useLazyQuery
export const useProjectDetailQuery =
  injectedProjectApi.endpoints.projectDetail.useQuery
export const useLazyProjectDetailQuery =
  injectedProjectApi.endpoints.projectDetail.useLazyQuery
export const useProjectCreateMutation =
  injectedProjectApi.endpoints.projectCreate.useMutation
export const useProjectUpdateMutation =
  injectedProjectApi.endpoints.projectUpdate.useMutation
export const useProjectDeleteMutation =
  injectedProjectApi.endpoints.projectDelete.useMutation

// PROJECT MILESTONE

injectProjectMilestoneTags(commonApi)

const injectedProjectMilestoneApi =
  commonApi.injectEndpoints<ProjectMilestoneEndpointDefinitions>({
    endpoints: projectMilestoneEndpoints,
  })

export const useProjectMilestoneAddMutation =
  injectedProjectMilestoneApi.endpoints.projectMilestoneAdd.useMutation
export const useProjectMilestoneUpdateMutation =
  injectedProjectMilestoneApi.endpoints.projectMilestoneUpdate.useMutation
export const useProjectMilestoneDeleteMutation =
  injectedProjectMilestoneApi.endpoints.projectMilestoneDelete.useMutation
export const useProjectMilestoneTaskAddMutation =
  injectedProjectMilestoneApi.endpoints.projectMilestoneTaskAdd.useMutation
export const useProjectMilestoneTaskDeleteMutation =
  injectedProjectMilestoneApi.endpoints.projectMilestoneTaskDelete.useMutation
export const useProjectMilestoneTaskMoveMutation =
  injectedProjectMilestoneApi.endpoints.projectMilestoneTaskMove.useMutation
