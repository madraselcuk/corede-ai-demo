import {
  IOrganizationCreateOwnInput,
  IOrganizationCreateOwnRequest,
  IOrganizationCreateOwnResponse,
  IOrganizationCreateOwnResult,
  organizationCreateOwnQuery,
} from '@corede_package'
import { UserOrganizationTags } from './user-organization-tags.enum'
import { IApi, injectTags, EndpointQueryBuilder } from '@api_package'
import { enumValues } from '@common_package'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { UserOrganizationEndpointDefinitions } from './user-organization.api.types'

const userOrganizationApiReducerPath = 'userOrganizationApi'

export const injectUserOrganizationTags = (api: IApi) =>
  injectTags({
    api,
    name: userOrganizationApiReducerPath,
    tagTypes: enumValues(UserOrganizationTags),
    options: { registerTagTypes: true },
  })

export const userOrganizationEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => UserOrganizationEndpointDefinitions = (builder) => ({
  // mutations
  organizationCreateOwn: builder.mutation(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IOrganizationCreateOwnRequest,
      IOrganizationCreateOwnResponse,
      IOrganizationCreateOwnResult,
      IOrganizationCreateOwnInput
    >({
      query: organizationCreateOwnQuery,
      invalidatesTags: [],
    }),
  ),
})
