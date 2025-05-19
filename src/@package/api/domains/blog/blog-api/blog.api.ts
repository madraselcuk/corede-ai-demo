import { enumValues, IGraphqlVariables } from '@common_package'
import {
  IBlogDetailInput,
  IBlogDetailRequest,
  IBlogDetailResponse,
  IBlogDetailResult,
  IBlogListInput,
  IBlogListRequest,
  IBlogListResponse,
  IBlogListResult,
  IBlogCreateInput,
  IBlogCreateRequest,
  IBlogCreateResponse,
  IBlogCreateResult,
  IBlogDeleteInput,
  IBlogDeleteRequest,
  IBlogDeleteResponse,
  IBlogDeleteResult,
  IBlogUpdateFilterInput,
  IBlogUpdateInput,
  IBlogUpdateRequest,
  IBlogUpdateResponse,
  IBlogUpdateResult,
  IBlogListPublicResult,
  IBlogListPublicInput,
  IBlogListPublicResponse,
  IBlogListPublicRequest,
  IBlogDetailPublicResult,
  IBlogDetailPublicInput,
  IBlogDetailPublicRequest,
  IBlogDetailPublicResponse,
  blogDetailPublicQuery,
  blogListPublicQuery,
  blogDetailQuery,
  blogListQuery,
  blogCreateQuery,
  blogDeleteQuery,
  blogUpdateQuery,
} from '@corede_package'
import { EndpointQueryBuilder } from '../../../graphql'
import { BlogTags } from './blog-tags.enum'
import { IApi, injectTags } from '../../../redux'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { BlogEndpointDefinitions } from './blog.api.types'

const blogApiReducerPath = 'blogApi'

export const injectBlogTags = (api: IApi) =>
  injectTags({
    api,
    name: blogApiReducerPath,
    tagTypes: enumValues(BlogTags),
    options: { registerTagTypes: true },
  })

export const blogEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => BlogEndpointDefinitions = (builder) => ({
  // queries
  blogList: builder.query<IBlogListResult, IGraphqlVariables<IBlogListInput>>({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogListRequest,
      IBlogListResponse,
      IBlogListResult,
      IBlogListInput
    >({
      query: blogListQuery,
    }),
    providesTags: [],
    // Provides cache tags for blog list data
  }),

  blogListPublic: builder.query<
    IBlogListPublicResult,
    IGraphqlVariables<IBlogListPublicInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogListPublicRequest,
      IBlogListPublicResponse,
      IBlogListPublicResult,
      IBlogListPublicInput
    >({
      query: blogListPublicQuery,
      providesTags: [],
    }),
  ),

  blogDetail: builder.query<
    IBlogDetailResult,
    IGraphqlVariables<IBlogDetailInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogDetailRequest,
      IBlogDetailResponse,
      IBlogDetailResult,
      IBlogDetailInput
    >({
      query: blogDetailQuery,
    }),
    providesTags: [],
    // Provides cache tags for blog detail data
  }),

  blogDetailPublic: builder.query<
    IBlogDetailPublicResult,
    IGraphqlVariables<IBlogDetailPublicInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogDetailPublicRequest,
      IBlogDetailPublicResponse,
      IBlogDetailPublicResult,
      IBlogDetailPublicInput
    >({
      query: blogDetailPublicQuery,
      providesTags: [],
    }),
  ),

  // mutations
  blogCreate: builder.mutation<
    IBlogCreateResult,
    IGraphqlVariables<IBlogCreateInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogCreateRequest,
      IBlogCreateResponse,
      IBlogCreateResult,
      IBlogCreateInput
    >({
      query: blogCreateQuery,
    }),
    invalidatesTags: [],
    // Creation may invalidate blog list cache
  }),

  blogUpdate: builder.mutation<
    IBlogUpdateResult,
    IGraphqlVariables<IBlogUpdateInput, IBlogUpdateFilterInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogUpdateRequest,
      IBlogUpdateResponse,
      IBlogUpdateResult,
      IBlogUpdateInput,
      IBlogUpdateFilterInput
    >({
      query: blogUpdateQuery,
    }),
    invalidatesTags: [],
    // Updates may invalidate both list and detail caches
  }),

  blogDelete: builder.mutation<
    IBlogDeleteResult,
    IGraphqlVariables<IBlogDeleteInput>
  >({
    ...EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogDeleteRequest,
      IBlogDeleteResponse,
      IBlogDeleteResult,
      IBlogDeleteInput
    >({
      query: blogDeleteQuery,
    }),
    invalidatesTags: [],
    // Deletion may invalidate blog list cache
  }),
})
