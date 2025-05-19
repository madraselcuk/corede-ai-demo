import { enumValues, IGraphqlVariables } from '@common_package'
import {
  IAuthorDetailInput,
  IAuthorDetailRequest,
  IAuthorDetailResponse,
  IAuthorDetailResult,
  IAuthorListInput,
  IAuthorListRequest,
  IAuthorListResponse,
  IAuthorListResult,
  IAuthorCreateInput,
  IAuthorCreateRequest,
  IAuthorCreateResponse,
  IAuthorCreateResult,
  IAuthorDeleteInput,
  IAuthorDeleteRequest,
  IAuthorDeleteResponse,
  IAuthorDeleteResult,
  IAuthorUpdateFilterInput,
  IAuthorUpdateInput,
  IAuthorUpdateRequest,
  IAuthorUpdateResponse,
  IAuthorUpdateResult,
  authorDetailQuery,
  authorListQuery,
  authorCreateQuery,
  authorDeleteQuery,
  authorUpdateQuery,
} from '@corede_package'
import { AuthorTags } from './author-tags.enum'
import { EndpointQueryBuilder } from '../../../graphql'
import { IApi, injectTags } from '../../../redux'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { AuthorEndpointDefinitions } from './author.api.types'

const authorApiReducerPath = 'authorApi'

export const injectAuthorTags = (api: IApi) =>
  injectTags({
    api,
    name: authorApiReducerPath,
    tagTypes: enumValues(AuthorTags),
    options: { registerTagTypes: true },
  })

export const authorEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => AuthorEndpointDefinitions = (builder) => ({
  // queries
  authorList: builder.query<
    IAuthorListResult,
    IGraphqlVariables<IAuthorListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IAuthorListRequest,
      IAuthorListResponse,
      IAuthorListResult,
      IAuthorListInput
    >({
      query: authorListQuery,
      providesTags: [],
    }),
  ),

  authorDetail: builder.query<
    IAuthorDetailResult,
    IGraphqlVariables<IAuthorDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IAuthorDetailRequest,
      IAuthorDetailResponse,
      IAuthorDetailResult,
      IAuthorDetailInput
    >({
      query: authorDetailQuery,
      providesTags: [],
    }),
  ),

  // mutations

  authorCreate: builder.mutation<
    IAuthorCreateResult,
    IGraphqlVariables<IAuthorCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IAuthorCreateRequest,
      IAuthorCreateResponse,
      IAuthorCreateResult,
      IAuthorCreateInput
    >({
      query: authorCreateQuery,
      invalidatesTags: [],
    }),
  ),

  authorUpdate: builder.mutation<
    IAuthorUpdateResult,
    IGraphqlVariables<IAuthorUpdateInput, IAuthorUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IAuthorUpdateRequest,
      IAuthorUpdateResponse,
      IAuthorUpdateResult,
      IAuthorUpdateInput,
      IAuthorUpdateFilterInput
    >({
      query: authorUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  authorDelete: builder.mutation<
    IAuthorDeleteResult,
    IGraphqlVariables<IAuthorDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IAuthorDeleteRequest,
      IAuthorDeleteResponse,
      IAuthorDeleteResult,
      IAuthorDeleteInput
    >({
      query: authorDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
