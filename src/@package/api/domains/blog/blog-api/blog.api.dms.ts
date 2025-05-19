import {
  IDomainFileCreateOwnInputWithMimeType,
  IDomainFileCreateResult,
  IEntityFileAssignOwnInput,
  IEntityFileAssignResult,
  IGraphqlVariables,
} from '@common_package'
import {
  blogImageCreateQuery,
  IBlogImageCreateRequest,
  IBlogImageCreateResponse,
  IBlogImageAssignRequest,
  IBlogImageAssignResponse,
  blogImageAssignQuery,
} from '@corede_package'
import { EndpointQueryBuilder } from '../../../graphql'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { BlogDmsEndpointDefinitions } from './blog.api.dms.types'

export const blogDmsEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => BlogDmsEndpointDefinitions = (builder) => ({
  // queries

  blogImageCreate: builder.mutation<
    IDomainFileCreateResult,
    IGraphqlVariables<IDomainFileCreateOwnInputWithMimeType>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogImageCreateRequest,
      IBlogImageCreateResponse,
      IDomainFileCreateResult,
      IDomainFileCreateOwnInputWithMimeType
    >({
      query: blogImageCreateQuery,
    }),
    invalidatesTags: [],
    // No cache invalidation needed for image creation
  }),

  blogImageAssign: builder.mutation<
    IEntityFileAssignResult,
    IGraphqlVariables<IEntityFileAssignOwnInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogImageAssignRequest,
      IBlogImageAssignResponse,
      IEntityFileAssignResult,
      IEntityFileAssignOwnInput
    >({
      query: blogImageAssignQuery,
    }),
    invalidatesTags: [],
    // No cache invalidation needed for image assignment
  }),
})
