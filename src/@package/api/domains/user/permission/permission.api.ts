import { enumValues, IGraphqlVariables } from '@common_package'
import {
  IPermissionListResult,
  IPermissionListInput,
  IPermissionListRequest,
  IPermissionListResponse,
  permissionListQuery,
  IPermissionCreateResult,
  IPermissionCreateInput,
  IPermissionCreateRequest,
  IPermissionCreateResponse,
  permissionCreateQuery,
  IPermissionUpdateResult,
  IPermissionUpdateInput,
  IPermissionUpdateFilterInput,
  IPermissionUpdateRequest,
  IPermissionUpdateResponse,
  permissionUpdateQuery,
  IPermissionDeleteResult,
  IPermissionDeleteInput,
  IPermissionDeleteRequest,
  IPermissionDeleteResponse,
  permissionDeleteQuery,
  IPermissionDetailInput,
  IPermissionDetailRequest,
  IPermissionDetailResponse,
  IPermissionDetailResult,
  permissionDetailQuery,
} from '@corede_package'
import { IApi, injectTags, EndpointQueryBuilder } from '@api_package'
import { EndpointBuilder, BaseQueryFn } from '@reduxjs/toolkit/query'
import { PermissionEndpointDefinitions } from './permission.api.types'
import { PermissionTags } from './permission-tags.enum'

const permissionApiReducerPath = 'permissionApi'

export const injectPermissionTags = (api: IApi) =>
  injectTags({
    api,
    name: permissionApiReducerPath,
    tagTypes: enumValues(PermissionTags),
    options: { registerTagTypes: true },
  })

export const permissionEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => PermissionEndpointDefinitions = (builder) => ({
  permissionList: builder.query<
    IPermissionListResult,
    IGraphqlVariables<IPermissionListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IPermissionListRequest,
      IPermissionListResponse,
      IPermissionListResult,
      IPermissionListInput
    >({
      query: permissionListQuery,
      providesTags: [],
    }),
  ),

  permissionDetail: builder.query<
    IPermissionDetailResult,
    IGraphqlVariables<IPermissionDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IPermissionDetailRequest,
      IPermissionDetailResponse,
      IPermissionDetailResult,
      IPermissionDetailInput
    >({
      query: permissionDetailQuery,
      providesTags: [],
    }),
  ),

  // mutations

  permissionCreate: builder.mutation<
    IPermissionCreateResult,
    IGraphqlVariables<IPermissionCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IPermissionCreateRequest,
      IPermissionCreateResponse,
      IPermissionCreateResult,
      IPermissionCreateInput
    >({
      query: permissionCreateQuery,
      invalidatesTags: [],
    }),
  ),

  permissionUpdate: builder.mutation<
    IPermissionUpdateResult,
    IGraphqlVariables<IPermissionUpdateInput, IPermissionUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IPermissionUpdateRequest,
      IPermissionUpdateResponse,
      IPermissionUpdateResult,
      IPermissionUpdateInput,
      IPermissionUpdateFilterInput
    >({
      query: permissionUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  permissionDelete: builder.mutation<
    IPermissionDeleteResult,
    IGraphqlVariables<IPermissionDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IPermissionDeleteRequest,
      IPermissionDeleteResponse,
      IPermissionDeleteResult,
      IPermissionDeleteInput
    >({
      query: permissionDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
