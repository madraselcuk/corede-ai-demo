import { commonApi } from '@/api/common.api'
import {
  RoleEndpointDefinitions,
  injectRoleTags,
  roleEndpoints,
} from '@api_package'

injectRoleTags(commonApi)

const injectedRoleApi = commonApi.injectEndpoints<RoleEndpointDefinitions>({
  endpoints: roleEndpoints,
})

export const useRoleListQuery = injectedRoleApi.endpoints.roleList.useQuery
export const useLazyRoleListQuery =
  injectedRoleApi.endpoints.roleList.useLazyQuery
export const useRoleDetailQuery = injectedRoleApi.endpoints.roleDetail.useQuery
export const useLazyRoleDetailQuery =
  injectedRoleApi.endpoints.roleDetail.useLazyQuery
export const useRoleCreateMutation =
  injectedRoleApi.endpoints.roleCreate.useMutation
export const useRoleUpdateMutation =
  injectedRoleApi.endpoints.roleUpdate.useMutation
export const useRoleDeleteMutation =
  injectedRoleApi.endpoints.roleDelete.useMutation
