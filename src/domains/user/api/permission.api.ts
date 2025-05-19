import { commonApi } from '@/api/common.api'
import {
  injectPermissionTags,
  PermissionEndpointDefinitions,
  permissionEndpoints,
} from '@api_package'

injectPermissionTags(commonApi)

const injectedPermissionApi =
  commonApi.injectEndpoints<PermissionEndpointDefinitions>({
    endpoints: permissionEndpoints,
  })

export const usePermissionListQuery =
  injectedPermissionApi.endpoints.permissionList.useQuery
export const useLazyPermissionListQuery =
  injectedPermissionApi.endpoints.permissionList.useLazyQuery
export const usePermissionDetailQuery =
  injectedPermissionApi.endpoints.permissionDetail.useQuery
export const useLazyPermissionDetailQuery =
  injectedPermissionApi.endpoints.permissionDetail.useLazyQuery
export const usePermissionCreateMutation =
  injectedPermissionApi.endpoints.permissionCreate.useMutation
export const usePermissionUpdateMutation =
  injectedPermissionApi.endpoints.permissionUpdate.useMutation
export const usePermissionDeleteMutation =
  injectedPermissionApi.endpoints.permissionDelete.useMutation
