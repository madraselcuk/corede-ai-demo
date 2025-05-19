import { enumValues, IGraphqlVariables } from '@common_package'
import {
  IUserListResult,
  IUserListInput,
  IUserListRequest,
  IUserListResponse,
  userListQuery,
  IUserListByRelatedResult,
  IUserListByRelatedInput,
  IUserListByRelatedRequest,
  IUserListByRelatedResponse,
  userListByRelatedQuery,
  IUserCreateResult,
  IUserCreateInput,
  IUserCreateRequest,
  IUserCreateResponse,
  userCreateQuery,
  IUserUpdateResult,
  IUserUpdateInput,
  IUserUpdateFilterInput,
  IUserUpdateRequest,
  IUserUpdateResponse,
  userUpdateQuery,
  IUserDeleteResult,
  IUserDeleteInput,
  IUserDeleteRequest,
  IUserDeleteResponse,
  userDeleteQuery,
  IUserDetailInput,
  IUserDetailOwnInput,
  IUserDetailOwnRequest,
  IUserDetailOwnResponse,
  IUserDetailOwnResult,
  IUserDetailRequest,
  IUserDetailResponse,
  IUserDetailResult,
  userDetailOwnQuery,
  userDetailQuery,
  IUserUpdateOwnInput,
  IUserUpdateOwnRequest,
  IUserUpdateOwnResponse,
  IUserUpdateOwnResult,
  userUpdateOwnQuery,
} from '@corede_package'
import { IApi, injectTags, EndpointQueryBuilder } from '@api_package'
import { EndpointBuilder, BaseQueryFn } from '@reduxjs/toolkit/query'
import { UserTags } from './user-tags.enum'
import { UserEndpointDefinitions } from './user.api.types'

const userApiReducerPath = 'userApi'

export const injectUserTags = (api: IApi) =>
  injectTags({
    api,
    name: userApiReducerPath,
    tagTypes: enumValues(UserTags),
    options: { registerTagTypes: true },
  })

export const userEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => UserEndpointDefinitions = (builder) => ({
  userList: builder.query<IUserListResult, IGraphqlVariables<IUserListInput>>(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserListRequest,
      IUserListResponse,
      IUserListResult,
      IUserListInput
    >({
      query: userListQuery,
      providesTags: [],
    }),
  ),

  userListByRelated: builder.query<
    IUserListByRelatedResult,
    IGraphqlVariables<IUserListByRelatedInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserListByRelatedRequest,
      IUserListByRelatedResponse,
      IUserListByRelatedResult,
      IUserListByRelatedInput
    >({
      query: userListByRelatedQuery,
      providesTags: [],
    }),
  ),
  userDetailOwn: builder.query<
    IUserDetailOwnResult,
    IGraphqlVariables<IUserDetailOwnInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserDetailOwnRequest,
      IUserDetailOwnResponse,
      IUserDetailOwnResult,
      IUserDetailOwnInput
    >({
      query: userDetailOwnQuery,
      providesTags: [],
    }),
  ),

  userDetail: builder.query<
    IUserDetailResult,
    IGraphqlVariables<IUserDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserDetailRequest,
      IUserDetailResponse,
      IUserDetailResult,
      IUserDetailInput
    >({
      query: userDetailQuery,
      providesTags: [],
    }),
  ),

  // mutations

  userCreate: builder.mutation<
    IUserCreateResult,
    IGraphqlVariables<IUserCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserCreateRequest,
      IUserCreateResponse,
      IUserCreateResult,
      IUserCreateInput
    >({
      query: userCreateQuery,
      invalidatesTags: [],
    }),
  ),

  userUpdate: builder.mutation<
    IUserUpdateResult,
    IGraphqlVariables<IUserUpdateInput, IUserUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserUpdateRequest,
      IUserUpdateResponse,
      IUserUpdateResult,
      IUserUpdateInput,
      IUserUpdateFilterInput
    >({
      query: userUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  userUpdateOwn: builder.mutation<
    IUserUpdateOwnResult,
    IGraphqlVariables<IUserUpdateOwnInput, undefined>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserUpdateOwnRequest,
      IUserUpdateOwnResponse,
      IUserUpdateOwnResult,
      IUserUpdateOwnInput
    >({
      query: userUpdateOwnQuery,
      invalidatesTags: [],
    }),
  ),

  userDelete: builder.mutation<
    IUserDeleteResult,
    IGraphqlVariables<IUserDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserDeleteRequest,
      IUserDeleteResponse,
      IUserDeleteResult,
      IUserDeleteInput
    >({
      query: userDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
