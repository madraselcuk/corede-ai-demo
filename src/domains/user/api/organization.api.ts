import { commonApi } from '@/api/common.api'
import {
  OrganizationEndpointDefinitions,
  organizationEndpoints,
  injectOrganizationTags,
} from '@api_package'

injectOrganizationTags(commonApi)

const injectedOrganizationApi = commonApi.injectEndpoints<OrganizationEndpointDefinitions>({
  endpoints: organizationEndpoints,
})

export const useOrganizationListQuery =
  injectedOrganizationApi.endpoints.organizationList.useQuery
export const useLazyOrganizationListQuery =
  injectedOrganizationApi.endpoints.organizationList.useLazyQuery
export const useOrganizationDetailQuery =
  injectedOrganizationApi.endpoints.organizationDetail.useQuery
export const useLazyOrganizationDetailQuery =
  injectedOrganizationApi.endpoints.organizationDetail.useLazyQuery
export const useOrganizationCreateMutation =
  injectedOrganizationApi.endpoints.organizationCreate.useMutation
export const useOrganizationUpdateMutation =
  injectedOrganizationApi.endpoints.organizationUpdate.useMutation
export const useOrganizationDeleteMutation =
  injectedOrganizationApi.endpoints.organizationDelete.useMutation

