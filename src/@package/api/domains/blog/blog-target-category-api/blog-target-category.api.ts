import { enumValues, IGraphqlVariables } from '@common_package'
import {
  IBlogTargetCategoriesInput,
  IBlogTargetCategoriesRequest,
  IBlogTargetCategoriesResponse,
  IBlogTargetCategoriesResult,
  IBlogTargetCategoryInput,
  IBlogTargetCategoryRequest,
  IBlogTargetCategoryResponse,
  IBlogTargetCategoryResult,
  ICreateBlogTargetCategoryInput,
  ICreateBlogTargetCategoryRequest,
  ICreateBlogTargetCategoryResponse,
  ICreateBlogTargetCategoryResult,
  IDeleteBlogTargetCategoryInput,
  IDeleteBlogTargetCategoryRequest,
  IDeleteBlogTargetCategoryResponse,
  IDeleteBlogTargetCategoryResult,
  IUpdateBlogTargetCategoryFilterInput,
  IUpdateBlogTargetCategoryInput,
  IUpdateBlogTargetCategoryRequest,
  IUpdateBlogTargetCategoryResponse,
  IUpdateBlogTargetCategoryResult,
  blogTargetCategoriesQuery,
  blogTargetCategoryQuery,
  createBlogTargetCategoryQuery,
  deleteBlogTargetCategoryQuery,
  updateBlogTargetCategoryQuery,
} from '@corede_package'
import { EndpointQueryBuilder } from '../../../graphql'
import { BlogTargetCategoryTags } from './blog-target-category-tags.enum'
import { IApi, injectTags } from '@/@package/api/redux'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { BlogTargetCategoryEndpointDefinitions } from './blog-target-category.api.types'

const blogTargetCategoryApiReducerPath = 'blogTargetCategoryApi'

export const injectBlogTargetCategoryTags = (api: IApi) =>
  injectTags({
    api,
    name: blogTargetCategoryApiReducerPath,
    tagTypes: enumValues(BlogTargetCategoryTags),
    options: { registerTagTypes: true },
  })

export const blogTargetCategoryEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => BlogTargetCategoryEndpointDefinitions = (builder) => ({
  // queries

  blogTargetCategoryList: builder.query<
    IBlogTargetCategoriesResult,
    IGraphqlVariables<IBlogTargetCategoriesInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogTargetCategoriesRequest,
      IBlogTargetCategoriesResponse,
      IBlogTargetCategoriesResult,
      IBlogTargetCategoriesInput
    >({
      query: blogTargetCategoriesQuery,
    }),
    // Provides cache tags for target categories list
  ),

  blogTargetCategoryDetail: builder.query<
    IBlogTargetCategoryResult,
    IGraphqlVariables<IBlogTargetCategoryInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogTargetCategoryRequest,
      IBlogTargetCategoryResponse,
      IBlogTargetCategoryResult,
      IBlogTargetCategoryInput
    >({
      query: blogTargetCategoryQuery,
    }),
    // Provides cache tags for specific target category
  ),

  // mutation
  blogTargetCategoryCreate: builder.mutation<
    ICreateBlogTargetCategoryResult,
    IGraphqlVariables<ICreateBlogTargetCategoryInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ICreateBlogTargetCategoryRequest,
      ICreateBlogTargetCategoryResponse,
      ICreateBlogTargetCategoryResult,
      ICreateBlogTargetCategoryInput
    >({
      query: createBlogTargetCategoryQuery,
    }),
  ),

  blogTargetCategoryUpdate: builder.mutation<
    IUpdateBlogTargetCategoryResult,
    IGraphqlVariables<
      IUpdateBlogTargetCategoryInput,
      IUpdateBlogTargetCategoryFilterInput
    >
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUpdateBlogTargetCategoryRequest,
      IUpdateBlogTargetCategoryResponse,
      IUpdateBlogTargetCategoryResult,
      IUpdateBlogTargetCategoryInput,
      IUpdateBlogTargetCategoryFilterInput
    >({
      query: updateBlogTargetCategoryQuery,
    }),
  ),

  blogTargetCategoryDelete: builder.mutation<
    IDeleteBlogTargetCategoryResult,
    IGraphqlVariables<IDeleteBlogTargetCategoryInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IDeleteBlogTargetCategoryRequest,
      IDeleteBlogTargetCategoryResponse,
      IDeleteBlogTargetCategoryResult,
      IDeleteBlogTargetCategoryInput
    >({
      query: deleteBlogTargetCategoryQuery,
    }),
  ),
})
