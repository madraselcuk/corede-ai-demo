import {
  IDomainFileCreateOwnInputWithMimeType,
  IDomainFileCreateResult,
  IEntityFileAssignOwnInput,
  IEntityFileAssignResult,
  IGraphqlVariables,
} from '@common_package'
import {
  IUserProfileImageCreateRequest,
  IUserProfileImageCreateResponse,
  userProfileImageCreateQuery,
  IUserProfileImageAssignRequest,
  IUserProfileImageAssignResponse,
  userProfileImageAssignQuery,
} from '@corede_package'
import { UserDmsEndpointDefinitions } from './user-dms.api.types'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { EndpointQueryBuilder } from '@api_package'

export const userDmsEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => UserDmsEndpointDefinitions = (builder) => ({
  userProfileImageCreate: builder.mutation<
    IDomainFileCreateResult,
    IGraphqlVariables<IDomainFileCreateOwnInputWithMimeType>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserProfileImageCreateRequest,
      IUserProfileImageCreateResponse,
      IDomainFileCreateResult,
      IDomainFileCreateOwnInputWithMimeType
    >({
      query: userProfileImageCreateQuery,
      invalidatesTags: [],
    }),
  ),
  userProfileImageAssign: builder.mutation<
    IEntityFileAssignResult,
    IGraphqlVariables<IEntityFileAssignOwnInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUserProfileImageAssignRequest,
      IUserProfileImageAssignResponse,
      IEntityFileAssignResult,
      IEntityFileAssignOwnInput
    >({
      query: userProfileImageAssignQuery,
      invalidatesTags: [],
    }),
  ),
})
