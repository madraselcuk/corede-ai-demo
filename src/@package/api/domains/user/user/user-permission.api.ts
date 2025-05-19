import { enumValues, IGraphqlVariables } from '@common_package'
import {
  IUserPermissionDetailResult,
  IUserPermissionDetailInput,
  IUserPermissionDetailRequest,
  IUserPermissionDetailResponse,
  userPermissionDetailQuery,
  IUserPermissionDetailOwnResult,
  IUserPermissionDetailOwnInput,
  IUserPermissionDetailOwnRequest,
  IUserPermissionDetailOwnResponse,
  userPermissionDetailOwnQuery,
  IUserRoleUpdateResult,
  IUserRoleUpdateInput,
  IUserRoleUpdateFilterInput,
  IUserRoleUpdateRequest,
  IUserRoleUpdateResponse,
  userRoleUpdateQuery,
  IUserPermissionUpdateResult,
  IUserPermissionUpdateInput,
  IUserPermissionUpdateFilterInput,
  IUserPermissionUpdateRequest,
  IUserPermissionUpdateResponse,
  userPermissionUpdateQuery,
  IPermissionListItemResult,
  IUserPermissionListOwnRequest,
  IUserPermissionListOwnResponse,
  userPermissionListOwnQuery,
} from '@corede_package'
import { injectTags, EndpointQueryBuilder, IApi } from '@api_package'
import { UserPermissionEndpointDefinitions } from './user-permission.api.types'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { EndpointBuilder } from '@reduxjs/toolkit/query'
import { UserPermissionTags } from './user-permission-tags.enum'

const userPermissionApiReducerPath = 'userPermissionApi'

export const injectUserPermissionTags = (api: IApi) =>
  injectTags({
    api,
    name: userPermissionApiReducerPath,
    tagTypes: enumValues(UserPermissionTags),
    options: { registerTagTypes: true },
  })

export const userPermissionEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => UserPermissionEndpointDefinitions = (builder) => ({
  userPermissionListOwn: builder.query<
    IPermissionListItemResult[],
    IGraphqlVariables<undefined>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserPermissionListOwnRequest,
      IUserPermissionListOwnResponse,
      IPermissionListItemResult[],
      undefined
    >({
      query: userPermissionListOwnQuery,
      providesTags: ['user'],
    }),
  ),

  userPermissionDetail: builder.query<
    IUserPermissionDetailResult,
    IGraphqlVariables<IUserPermissionDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserPermissionDetailRequest,
      IUserPermissionDetailResponse,
      IUserPermissionDetailResult,
      IUserPermissionDetailInput
    >({
      query: userPermissionDetailQuery,
      providesTags: [],
    }),
  ),

  userPermissionDetailOwn: builder.query<
    IUserPermissionDetailOwnResult,
    IGraphqlVariables<IUserPermissionDetailOwnInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserPermissionDetailOwnRequest,
      IUserPermissionDetailOwnResponse,
      IUserPermissionDetailOwnResult,
      IUserPermissionDetailOwnInput
    >({
      query: userPermissionDetailOwnQuery,
      providesTags: [],
    }),
  ),

  // mutations

  userPermissionUpdate: builder.mutation<
    IUserPermissionUpdateResult,
    IGraphqlVariables<
      IUserPermissionUpdateInput,
      IUserPermissionUpdateFilterInput
    >
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserPermissionUpdateRequest,
      IUserPermissionUpdateResponse,
      IUserPermissionUpdateResult,
      IUserPermissionUpdateInput,
      IUserPermissionUpdateFilterInput
    >({
      query: userPermissionUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  userRoleUpdate: builder.mutation<
    IUserRoleUpdateResult,
    IGraphqlVariables<IUserRoleUpdateInput, IUserRoleUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserRoleUpdateRequest,
      IUserRoleUpdateResponse,
      IUserRoleUpdateResult,
      IUserRoleUpdateInput,
      IUserRoleUpdateFilterInput
    >({
      query: userRoleUpdateQuery,
      invalidatesTags: [],
    }),
  ),
})
