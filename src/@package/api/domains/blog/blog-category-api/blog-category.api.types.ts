import { IGraphqlVariables } from '@common_package'
import {
  IBlogCategoriesInput,
  IBlogCategoriesResult,
  IBlogCategoryInput,
  IBlogCategoryResult,
  ICreateBlogCategoryInput,
  ICreateBlogCategoryResult,
  IDeleteBlogCategoryInput,
  IDeleteBlogCategoryResult,
  IUpdateBlogCategoryFilterInput,
  IUpdateBlogCategoryInput,
  IUpdateBlogCategoryResult,
} from '@corede_package'
import { BaseQueryFn, MutationDefinition } from '@reduxjs/toolkit/query'
import { QueryDefinition } from '@reduxjs/toolkit/query'

type blogCategoryListType = QueryDefinition<
  IGraphqlVariables<IBlogCategoriesInput>,
  BaseQueryFn,
  never,
  IBlogCategoriesResult,
  'commonApi'
>

type blogCategoryListPublicType = QueryDefinition<
  IGraphqlVariables<IBlogCategoriesInput>,
  BaseQueryFn,
  never,
  IBlogCategoriesResult,
  'commonApi'
>

type blogCategoryDetailType = QueryDefinition<
  IGraphqlVariables<IBlogCategoryInput>,
  BaseQueryFn,
  never,
  IBlogCategoryResult,
  'commonApi'
>

type blogCategoryCreateType = MutationDefinition<
  IGraphqlVariables<ICreateBlogCategoryInput>,
  BaseQueryFn,
  never,
  ICreateBlogCategoryResult,
  'commonApi'
>

type blogCategoryUpdateType = MutationDefinition<
  IGraphqlVariables<IUpdateBlogCategoryInput, IUpdateBlogCategoryFilterInput>,
  BaseQueryFn,
  never,
  IUpdateBlogCategoryResult,
  'commonApi'
>

type blogCategoryDeleteType = MutationDefinition<
  IGraphqlVariables<IDeleteBlogCategoryInput>,
  BaseQueryFn,
  never,
  IDeleteBlogCategoryResult,
  'commonApi'
>

export type BlogCategoryEndpointDefinitions = {
  blogCategoryList: blogCategoryListType
  blogCategoryListPublic: blogCategoryListPublicType
  blogCategoryDetail: blogCategoryDetailType
  blogCategoryCreate: blogCategoryCreateType
  blogCategoryUpdate: blogCategoryUpdateType
  blogCategoryDelete: blogCategoryDeleteType
}
