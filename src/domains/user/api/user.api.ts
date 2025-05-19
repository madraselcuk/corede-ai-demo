import { commonApi } from '@/api/common.api'
import {
  UserEndpointDefinitions,
  userPermissionEndpoints,
  injectUserTags,
  userEndpoints,
  UserPermissionEndpointDefinitions,
  injectUserPermissionTags,
  injectUserOrganizationTags,
  userOrganizationEndpoints,
  UserOrganizationEndpointDefinitions,
  userDmsEndpoints,
  UserDmsEndpointDefinitions,
} from '@api_package'

// USER

injectUserTags(commonApi)

const injectedUserApi = commonApi.injectEndpoints<UserEndpointDefinitions>({
  endpoints: userEndpoints,
})

export const useUserListQuery = injectedUserApi.endpoints.userList.useQuery
export const useLazyUserListQuery =
  injectedUserApi.endpoints.userList.useLazyQuery
export const useUserDetailQuery = injectedUserApi.endpoints.userDetail.useQuery
export const useLazyUserDetailQuery =
  injectedUserApi.endpoints.userDetail.useLazyQuery
export const useUserCreateMutation =
  injectedUserApi.endpoints.userCreate.useMutation
export const useUserUpdateMutation =
  injectedUserApi.endpoints.userUpdate.useMutation
export const useUserDeleteMutation =
  injectedUserApi.endpoints.userDelete.useMutation

// USER PERMISSION

injectUserPermissionTags(commonApi)

const injectedUserPermissionApi =
  commonApi.injectEndpoints<UserPermissionEndpointDefinitions>({
    endpoints: userPermissionEndpoints,
  })

export const useUserPermissionListOwnQuery =
  injectedUserPermissionApi.endpoints.userPermissionListOwn.useQuery
export const useUserPermissionDetailQuery =
  injectedUserPermissionApi.endpoints.userPermissionDetail.useQuery
export const useUserPermissionDetailOwnQuery =
  injectedUserPermissionApi.endpoints.userPermissionDetailOwn.useQuery
export const useUserPermissionUpdateMutation =
  injectedUserPermissionApi.endpoints.userPermissionUpdate.useMutation
export const useUserRoleUpdateMutation =
  injectedUserPermissionApi.endpoints.userRoleUpdate.useMutation

// USER ORGANIZATION

injectUserOrganizationTags(commonApi)

const injectedUserOrganizationApi =
  commonApi.injectEndpoints<UserOrganizationEndpointDefinitions>({
    endpoints: userOrganizationEndpoints,
  })

export const useUserOrganizationCreateMutation =
  injectedUserOrganizationApi.endpoints.organizationCreateOwn.useMutation

// USER DMS

const injectedUserDmsApi =
  commonApi.injectEndpoints<UserDmsEndpointDefinitions>({
    endpoints: userDmsEndpoints,
  })

export const useUserProfileImageCreateMutation =
  injectedUserDmsApi.endpoints.userProfileImageCreate.useMutation
export const useUserProfileImageAssignMutation =
  injectedUserDmsApi.endpoints.userProfileImageAssign.useMutation
