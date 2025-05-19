import { enumValues, IGraphqlVariables } from '@common_package'
import {
  IRoleListResult,
  IRoleListInput,
  IRoleListRequest,
  IRoleListResponse,
  roleListQuery,
  IRoleCreateResult,
  IRoleCreateInput,
  IRoleCreateRequest,
  IRoleCreateResponse,
  roleCreateQuery,
  IRoleUpdateResult,
  IRoleUpdateInput,
  IRoleUpdateFilterInput,
  IRoleUpdateRequest,
  IRoleUpdateResponse,
  roleUpdateQuery,
  IRoleDeleteResult,
  IRoleDeleteInput,
  IRoleDeleteRequest,
  IRoleDeleteResponse,
  roleDeleteQuery,
  IRoleDetailInput,
  IRoleDetailRequest,
  IRoleDetailResponse,
  IRoleDetailResult,
  roleDetailQuery,
} from '@corede_package'
import { IApi, injectTags, EndpointQueryBuilder } from '@api_package'
import { EndpointBuilder, BaseQueryFn } from '@reduxjs/toolkit/query'
import { RoleTags } from './role-tags.enum'
import { RoleEndpointDefinitions } from './role.api.types'

const roleApiReducerPath = 'roleApi'

export const injectRoleTags = (api: IApi) =>
  injectTags({
    api,
    name: roleApiReducerPath,
    tagTypes: enumValues(RoleTags),
    options: { registerTagTypes: true },
  })

export const roleEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => RoleEndpointDefinitions = (builder) => ({
  roleDetail: builder.query<
    IRoleDetailResult,
    IGraphqlVariables<IRoleDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IRoleDetailRequest,
      IRoleDetailResponse,
      IRoleDetailResult,
      IRoleDetailInput
    >({
      query: roleDetailQuery,
      providesTags: [],
    }),
  ),
  roleList: builder.query<IRoleListResult, IGraphqlVariables<IRoleListInput>>(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IRoleListRequest,
      IRoleListResponse,
      IRoleListResult,
      IRoleListInput
    >({
      query: roleListQuery,
      providesTags: [],
    }),
  ),

  // mutations

  roleCreate: builder.mutation<
    IRoleCreateResult,
    IGraphqlVariables<IRoleCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IRoleCreateRequest,
      IRoleCreateResponse,
      IRoleCreateResult,
      IRoleCreateInput
    >({
      query: roleCreateQuery,
      invalidatesTags: [],
    }),
  ),

  roleUpdate: builder.mutation<
    IRoleUpdateResult,
    IGraphqlVariables<IRoleUpdateInput, IRoleUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IRoleUpdateRequest,
      IRoleUpdateResponse,
      IRoleUpdateResult,
      IRoleUpdateInput,
      IRoleUpdateFilterInput
    >({
      query: roleUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  roleDelete: builder.mutation<
    IRoleDeleteResult,
    IGraphqlVariables<IRoleDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IRoleDeleteRequest,
      IRoleDeleteResponse,
      IRoleDeleteResult,
      IRoleDeleteInput
    >({
      query: roleDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
