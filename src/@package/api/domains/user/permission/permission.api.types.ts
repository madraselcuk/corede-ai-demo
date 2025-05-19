import {
  IPermissionListInput,
  IPermissionListResult,
  IPermissionDetailInput,
  IPermissionDetailResult,
  IPermissionCreateInput,
  IPermissionCreateResult,
  IPermissionUpdateInput,
  IPermissionUpdateResult,
  IPermissionUpdateFilterInput,
  IPermissionDeleteInput,
  IPermissionDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type permissionListType = QueryDefinition<
  IGraphqlVariables<IPermissionListInput>,
  BaseQueryFn,
  never,
  IPermissionListResult,
  'commonApi'
>

type permissionDetailType = QueryDefinition<
  IGraphqlVariables<IPermissionDetailInput>,
  BaseQueryFn,
  never,
  IPermissionDetailResult,
  'commonApi'
>

type permissionCreateType = MutationDefinition<
  IGraphqlVariables<IPermissionCreateInput>,
  BaseQueryFn,
  never,
  IPermissionCreateResult,
  'commonApi'
>

type permissionUpdateType = MutationDefinition<
  IGraphqlVariables<IPermissionUpdateInput, IPermissionUpdateFilterInput>,
  BaseQueryFn,
  never,
  IPermissionUpdateResult,
  'commonApi'
>

type permissionDeleteType = MutationDefinition<
  IGraphqlVariables<IPermissionDeleteInput>,
  BaseQueryFn,
  never,
  IPermissionDeleteResult,
  'commonApi'
>

export type PermissionEndpointDefinitions = {
  permissionList: permissionListType
  permissionDetail: permissionDetailType
  permissionCreate: permissionCreateType
  permissionUpdate: permissionUpdateType
  permissionDelete: permissionDeleteType
}
