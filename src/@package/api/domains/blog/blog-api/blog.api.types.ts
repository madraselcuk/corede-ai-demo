import { IGraphqlVariables } from '@common_package'
import {
  IBlogDetailInput,
  IBlogDetailResult,
  IBlogListInput,
  IBlogListResult,
  IBlogCreateInput,
  IBlogCreateResult,
  IBlogDeleteInput,
  IBlogDeleteResult,
  IBlogUpdateFilterInput,
  IBlogUpdateInput,
  IBlogUpdateResult,
} from '@corede_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type blogListType = QueryDefinition<
  IGraphqlVariables<IBlogListInput>,
  BaseQueryFn,
  never,
  IBlogListResult,
  'commonApi'
  >

type blogListPublicType = QueryDefinition<
  IGraphqlVariables<IBlogListInput>,
  BaseQueryFn,
  never,
  IBlogListResult,
  'commonApi'
>

type blogDetailType = QueryDefinition<
  IGraphqlVariables<IBlogDetailInput>,
  BaseQueryFn,
  never,
  IBlogDetailResult,
  'commonApi'
>

type blogDetailPublicType = QueryDefinition<
  IGraphqlVariables<IBlogDetailInput>,
  BaseQueryFn,
  never,
  IBlogDetailResult,
  'commonApi'
>
type blogCreateType = MutationDefinition<
  IGraphqlVariables<IBlogCreateInput>,
  BaseQueryFn,
  never,
  IBlogCreateResult,
  'commonApi'
>

type blogUpdateType = MutationDefinition<
  IGraphqlVariables<IBlogUpdateInput, IBlogUpdateFilterInput>,
  BaseQueryFn,
  never,
  IBlogUpdateResult,
  'commonApi'
>

type blogDeleteType = MutationDefinition<
  IGraphqlVariables<IBlogDeleteInput>,
  BaseQueryFn,
  never,
  IBlogDeleteResult,
  'commonApi'
>

export type BlogEndpointDefinitions = {
  blogList: blogListType
  blogListPublic: blogListPublicType
  blogDetail: blogDetailType
  blogDetailPublic: blogDetailPublicType
  blogCreate: blogCreateType
  blogUpdate: blogUpdateType
  blogDelete: blogDeleteType
}
