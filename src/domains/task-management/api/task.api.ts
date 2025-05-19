import { commonApi } from '@/api/common.api'
import {
  TaskEndpointDefinitions,
  taskEndpoints,
  injectTaskTags,
} from '@api_package'

injectTaskTags(commonApi)

const injectedTaskApi = commonApi.injectEndpoints<TaskEndpointDefinitions>({
  endpoints: taskEndpoints,
})

export const useTaskListQuery = injectedTaskApi.endpoints.taskList.useQuery
export const useLazyTaskListQuery =
  injectedTaskApi.endpoints.taskList.useLazyQuery
export const useTaskDetailQuery = injectedTaskApi.endpoints.taskDetail.useQuery
export const useLazyTaskDetailQuery =
  injectedTaskApi.endpoints.taskDetail.useLazyQuery
export const useTaskCreateMutation =
  injectedTaskApi.endpoints.taskCreate.useMutation
export const useTaskCreateForProjectMutation =
  injectedTaskApi.endpoints.taskCreateForProject.useMutation
export const useTaskUpdateMutation =
  injectedTaskApi.endpoints.taskUpdate.useMutation
export const useTaskDeleteMutation =
  injectedTaskApi.endpoints.taskDelete.useMutation
