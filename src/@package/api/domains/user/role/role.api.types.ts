import {
  IRoleListInput,
  IRoleListResult,
  IRoleDetailInput,
  IRoleDetailResult,
  IRoleCreateInput,
  IRoleCreateResult,
  IRoleUpdateInput,
  IRoleUpdateResult,
  IRoleUpdateFilterInput,
  IRoleDeleteInput,
  IRoleDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type roleListType = QueryDefinition<
  IGraphqlVariables<IRoleListInput>,
  BaseQueryFn,
  never,
  IRoleListResult,
  'commonApi'
>

type roleDetailType = QueryDefinition<
  IGraphqlVariables<IRoleDetailInput>,
  BaseQueryFn,
  never,
  IRoleDetailResult,
  'commonApi'
>

type roleCreateType = MutationDefinition<
  IGraphqlVariables<IRoleCreateInput>,
  BaseQueryFn,
  never,
  IRoleCreateResult,
  'commonApi'
>

type roleUpdateType = MutationDefinition<
  IGraphqlVariables<IRoleUpdateInput, IRoleUpdateFilterInput>,
  BaseQueryFn,
  never,
  IRoleUpdateResult,
  'commonApi'
>

type roleDeleteType = MutationDefinition<
  IGraphqlVariables<IRoleDeleteInput>,
  BaseQueryFn,
  never,
  IRoleDeleteResult,
  'commonApi'
>

export type RoleEndpointDefinitions = {
  roleList: roleListType
  roleDetail: roleDetailType
  roleCreate: roleCreateType
  roleUpdate: roleUpdateType
  roleDelete: roleDeleteType
}
