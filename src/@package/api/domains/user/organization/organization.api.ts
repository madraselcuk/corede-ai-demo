import { enumValues, IGraphqlVariables } from '@common_package'
import {
  IOrganizationDetailInput,
  IOrganizationDetailRequest,
  IOrganizationDetailResponse,
  IOrganizationDetailResult,
  IOrganizationListInput,
  IOrganizationListRequest,
  IOrganizationListResponse,
  IOrganizationListResult,
  IOrganizationCreateInput,
  IOrganizationCreateRequest,
  IOrganizationCreateResponse,
  IOrganizationCreateResult,
  IOrganizationDeleteInput,
  IOrganizationDeleteRequest,
  IOrganizationDeleteResponse,
  IOrganizationDeleteResult,
  IOrganizationUpdateFilterInput,
  IOrganizationUpdateInput,
  IOrganizationUpdateRequest,
  IOrganizationUpdateResponse,
  IOrganizationUpdateResult,
  organizationDetailQuery,
  organizationListQuery,
  organizationCreateQuery,
  organizationDeleteQuery,
  organizationUpdateQuery,
} from '@corede_package'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { OrganizationTags } from './organization-tags.enum'
import { IApi, injectTags, EndpointQueryBuilder } from '@api_package'
import { OrganizationEndpointDefinitions } from './organization.api.types'

const organizationApiReducerPath = 'organizationApi'

export const injectOrganizationTags = (api: IApi) =>
  injectTags({
    api,
    name: organizationApiReducerPath,
    tagTypes: enumValues(OrganizationTags),
    options: { registerTagTypes: true },
  })

export const organizationEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => OrganizationEndpointDefinitions = (builder) => ({
  // queries

  organizationList: builder.query<
    IOrganizationListResult,
    IGraphqlVariables<IOrganizationListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IOrganizationListRequest,
      IOrganizationListResponse,
      IOrganizationListResult,
      IOrganizationListInput
    >({
      query: organizationListQuery,
      providesTags: [],
    }),
  ),

  organizationDetail: builder.query<
    IOrganizationDetailResult,
    IGraphqlVariables<IOrganizationDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IOrganizationDetailRequest,
      IOrganizationDetailResponse,
      IOrganizationDetailResult,
      IOrganizationDetailInput
    >({
      query: organizationDetailQuery,
      providesTags: [],
    }),
  ),

  // mutations
  organizationCreate: builder.mutation<
    IOrganizationCreateResult,
    IGraphqlVariables<IOrganizationCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IOrganizationCreateRequest,
      IOrganizationCreateResponse,
      IOrganizationCreateResult,
      IOrganizationCreateInput
    >({
      query: organizationCreateQuery,
      invalidatesTags: [],
    }),
  ),

  organizationUpdate: builder.mutation<
    IOrganizationUpdateResult,
    IGraphqlVariables<IOrganizationUpdateInput, IOrganizationUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IOrganizationUpdateRequest,
      IOrganizationUpdateResponse,
      IOrganizationUpdateResult,
      IOrganizationUpdateInput,
      IOrganizationUpdateFilterInput
    >({
      query: organizationUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  organizationDelete: builder.mutation<
    IOrganizationDeleteResult,
    IGraphqlVariables<IOrganizationDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IOrganizationDeleteRequest,
      IOrganizationDeleteResponse,
      IOrganizationDeleteResult,
      IOrganizationDeleteInput
    >({
      query: organizationDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
