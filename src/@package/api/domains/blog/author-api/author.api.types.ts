import { IGraphqlVariables } from '@common_package'
import {
  IAuthorDetailInput,
  IAuthorDetailResult,
  IAuthorListInput,
  IAuthorListResult,
  IAuthorCreateInput,
  IAuthorCreateResult,
  IAuthorDeleteInput,
  IAuthorDeleteResult,
  IAuthorUpdateFilterInput,
  IAuthorUpdateInput,
  IAuthorUpdateResult,
} from '@corede_package'
import { BaseQueryFn, QueryDefinition } from '@reduxjs/toolkit/query'
import { MutationDefinition } from '@reduxjs/toolkit/query'

type authorListType = QueryDefinition<
  IGraphqlVariables<IAuthorListInput>,
  BaseQueryFn,
  never,
  IAuthorListResult,
  'commonApi'
>

type authorDetailType = QueryDefinition<
  IGraphqlVariables<IAuthorDetailInput>,
  BaseQueryFn,
  never,
  IAuthorDetailResult,
  'commonApi'
>

type authorCreateType = MutationDefinition<
  IGraphqlVariables<IAuthorCreateInput>,
  BaseQueryFn,
  never,
  IAuthorCreateResult,
  'commonApi'
>

type authorUpdateType = MutationDefinition<
  IGraphqlVariables<IAuthorUpdateInput, IAuthorUpdateFilterInput>,
  BaseQueryFn,
  never,
  IAuthorUpdateResult,
  'commonApi'
>

type authorDeleteType = MutationDefinition<
  IGraphqlVariables<IAuthorDeleteInput>,
  BaseQueryFn,
  never,
  IAuthorDeleteResult,
  'commonApi'
>

export type AuthorEndpointDefinitions = {
  authorList: authorListType
  authorDetail: authorDetailType
  authorCreate: authorCreateType
  authorUpdate: authorUpdateType
  authorDelete: authorDeleteType
}
