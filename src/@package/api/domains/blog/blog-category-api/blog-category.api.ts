import { enumValues, IGraphqlVariables } from '@common_package'
import {
  IBlogCategoriesInput,
  IBlogCategoriesRequest,
  IBlogCategoriesResponse,
  IBlogCategoriesResult,
  IBlogCategoryInput,
  IBlogCategoryRequest,
  IBlogCategoryResponse,
  IBlogCategoryResult,
  ICreateBlogCategoryInput,
  ICreateBlogCategoryRequest,
  ICreateBlogCategoryResponse,
  ICreateBlogCategoryResult,
  IDeleteBlogCategoryInput,
  IDeleteBlogCategoryRequest,
  IDeleteBlogCategoryResponse,
  IDeleteBlogCategoryResult,
  IUpdateBlogCategoryFilterInput,
  IUpdateBlogCategoryInput,
  IUpdateBlogCategoryRequest,
  IUpdateBlogCategoryResponse,
  IUpdateBlogCategoryResult,
  IBlogCategoriesPublicInput,
  IBlogCategoriesRequestPublic,
  IBlogCategoriesResponsePublic,
  IBlogCategoriesPublicResult,
  blogCategoriesPublicQuery,
  blogCategoriesQuery,
  blogCategoryQuery,
  createBlogCategoryQuery,
  deleteBlogCategoryQuery,
  updateBlogCategoryQuery,
} from '@corede_package'
import { EndpointQueryBuilder } from '../../../graphql'
import { BlogCategoryTags } from './blog-category-tags.enum'
import { IApi, injectTags } from '../../../redux'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { BlogCategoryEndpointDefinitions } from './blog-category.api.types'

const blogCategoryApiReducerPath = 'blogCategoryApi'

export const injectBlogCategoryTags = (api: IApi) =>
  injectTags({
    api,
    name: blogCategoryApiReducerPath,
    tagTypes: enumValues(BlogCategoryTags),
    options: { registerTagTypes: true },
  })

export const blogCategoryEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => BlogCategoryEndpointDefinitions = (builder) => ({
  // queries
  blogCategoryList: builder.query<
    IBlogCategoriesResult,
    IGraphqlVariables<IBlogCategoriesInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogCategoriesRequest,
      IBlogCategoriesResponse,
      IBlogCategoriesResult,
      IBlogCategoriesInput
    >({
      query: blogCategoriesQuery,
    }),
    // Provides cache tags for blog categories list
  ),

  blogCategoryListPublic: builder.query<
    IBlogCategoriesPublicResult,
    IGraphqlVariables<IBlogCategoriesPublicInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogCategoriesRequestPublic,
      IBlogCategoriesResponsePublic,
      IBlogCategoriesPublicResult,
      IBlogCategoriesPublicInput
    >({
      query: blogCategoriesPublicQuery,
      providesTags: [],
    }),
  ),

  blogCategoryDetail: builder.query<
    IBlogCategoryResult,
    IGraphqlVariables<IBlogCategoryInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IBlogCategoryRequest,
      IBlogCategoryResponse,
      IBlogCategoryResult,
      IBlogCategoryInput
    >({
      query: blogCategoryQuery,
    }),
    // Provides cache tags for specific blog category
  ),

  // mutation
  blogCategoryCreate: builder.mutation<
    ICreateBlogCategoryResult,
    IGraphqlVariables<ICreateBlogCategoryInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ICreateBlogCategoryRequest,
      ICreateBlogCategoryResponse,
      ICreateBlogCategoryResult,
      ICreateBlogCategoryInput
    >({
      query: createBlogCategoryQuery,
    }),
    // Creating a category invalidates the categories list
  ),

  blogCategoryUpdate: builder.mutation<
    IUpdateBlogCategoryResult,
    IGraphqlVariables<IUpdateBlogCategoryInput, IUpdateBlogCategoryFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUpdateBlogCategoryRequest,
      IUpdateBlogCategoryResponse,
      IUpdateBlogCategoryResult,
      IUpdateBlogCategoryInput,
      IUpdateBlogCategoryFilterInput
    >({
      query: updateBlogCategoryQuery,
    }),
    // Updating invalidates both the list and the specific category
  ),
  blogCategoryDelete: builder.mutation<
    IDeleteBlogCategoryResult,
    IGraphqlVariables<IDeleteBlogCategoryInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IDeleteBlogCategoryRequest,
      IDeleteBlogCategoryResponse,
      IDeleteBlogCategoryResult,
      IDeleteBlogCategoryInput
    >({
      query: deleteBlogCategoryQuery,
    }),
    // Deleting invalidates both the list and the specific category
  ),
})
