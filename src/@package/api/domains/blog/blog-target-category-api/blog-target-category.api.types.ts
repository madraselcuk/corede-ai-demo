import { IGraphqlVariables } from '@common_package'
import {
  IBlogTargetCategoriesInput,
  IBlogTargetCategoriesResult,
  IBlogTargetCategoryInput,
  IBlogTargetCategoryResult,
  ICreateBlogTargetCategoryInput,
  ICreateBlogTargetCategoryResult,
  IDeleteBlogTargetCategoryInput,
  IDeleteBlogTargetCategoryResult,
  IUpdateBlogTargetCategoryFilterInput,
  IUpdateBlogTargetCategoryInput,
  IUpdateBlogTargetCategoryResult,
} from '@corede_package'
import { BaseQueryFn, MutationDefinition } from '@reduxjs/toolkit/query'
import { QueryDefinition } from '@reduxjs/toolkit/query'

type blogTargetCategoryListType = QueryDefinition<
  IGraphqlVariables<IBlogTargetCategoriesInput>,
  BaseQueryFn,
  never,
  IBlogTargetCategoriesResult,
  'commonApi'
>

type blogTargetCategoryDetailType = QueryDefinition<
  IGraphqlVariables<IBlogTargetCategoryInput>,
  BaseQueryFn,
  never,
  IBlogTargetCategoryResult,
  'commonApi'
>

type blogTargetCategoryCreateType = MutationDefinition<
  IGraphqlVariables<ICreateBlogTargetCategoryInput>,
  BaseQueryFn,
  never,
  ICreateBlogTargetCategoryResult,
  'commonApi'
>

type blogTargetCategoryUpdateType = MutationDefinition<
  IGraphqlVariables<
    IUpdateBlogTargetCategoryInput,
    IUpdateBlogTargetCategoryFilterInput
  >,
  BaseQueryFn,
  never,
  IUpdateBlogTargetCategoryResult,
  'commonApi'
>

type blogTargetCategoryDeleteType = MutationDefinition<
  IGraphqlVariables<IDeleteBlogTargetCategoryInput>,
  BaseQueryFn,
  never,
  IDeleteBlogTargetCategoryResult,
  'commonApi'
>

export type BlogTargetCategoryEndpointDefinitions = {
  blogTargetCategoryList: blogTargetCategoryListType
  blogTargetCategoryDetail: blogTargetCategoryDetailType
  blogTargetCategoryCreate: blogTargetCategoryCreateType
  blogTargetCategoryUpdate: blogTargetCategoryUpdateType
  blogTargetCategoryDelete: blogTargetCategoryDeleteType
}
