import { commonApi } from '@/api/common.api'
import {
  ContactFormEndpointDefinitions,
  contactFormEndpoints,
  injectContactFormTags,
} from '@api_package'

injectContactFormTags(commonApi)

const injectedContactFormApi =
  commonApi.injectEndpoints<ContactFormEndpointDefinitions>({
    endpoints: contactFormEndpoints,
  })

export const useContactFormListQuery =
  injectedContactFormApi.endpoints.contactFormList.useQuery
export const useLazyContactFormListQuery =
  injectedContactFormApi.endpoints.contactFormList.useLazyQuery
export const useContactFormDetailQuery =
  injectedContactFormApi.endpoints.contactFormDetail.useQuery
export const useLazyContactFormDetailQuery =
  injectedContactFormApi.endpoints.contactFormDetail.useLazyQuery
export const useContactFormCreateMutation =
  injectedContactFormApi.endpoints.contactFormCreate.useMutation
export const useContactFormUpdateMutation =
  injectedContactFormApi.endpoints.contactFormUpdate.useMutation
export const useContactFormDeleteMutation =
  injectedContactFormApi.endpoints.contactFormDelete.useMutation
