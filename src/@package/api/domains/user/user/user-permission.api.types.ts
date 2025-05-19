import {
  IUserPermissionDetailInput,
  IUserPermissionDetailResult,
  IUserPermissionUpdateInput,
  IUserPermissionUpdateResult,
  IUserPermissionUpdateFilterInput,
  IUserRoleUpdateInput,
  IUserRoleUpdateResult,
  IPermissionListItemResult,
  IUserPermissionDetailOwnResult,
  IUserPermissionDetailOwnInput,
  IUserRoleUpdateFilterInput,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type userPermissionListOwnType = QueryDefinition<
  IGraphqlVariables,
  BaseQueryFn,
  never,
  IPermissionListItemResult[],
  'commonApi'
>

type userPermissionDetailType = QueryDefinition<
  IGraphqlVariables<IUserPermissionDetailInput>,
  BaseQueryFn,
  never,
  IUserPermissionDetailResult,
  'commonApi'
>

type userPermissionDetailOwnType = QueryDefinition<
  IGraphqlVariables<IUserPermissionDetailOwnInput>,
  BaseQueryFn,
  never,
  IUserPermissionDetailOwnResult,
  'commonApi'
>

type userPermissionUpdateType = MutationDefinition<
  IGraphqlVariables<
    IUserPermissionUpdateInput,
    IUserPermissionUpdateFilterInput
  >,
  BaseQueryFn,
  never,
  IUserPermissionUpdateResult,
  'commonApi'
>

type userRoleUpdateType = MutationDefinition<
  IGraphqlVariables<IUserRoleUpdateInput, IUserRoleUpdateFilterInput>,
  BaseQueryFn,
  never,
  IUserRoleUpdateResult,
  'commonApi'
>

export type UserPermissionEndpointDefinitions = {
  userPermissionListOwn: userPermissionListOwnType
  userPermissionDetail: userPermissionDetailType
  userPermissionDetailOwn: userPermissionDetailOwnType
  userPermissionUpdate: userPermissionUpdateType
  userRoleUpdate: userRoleUpdateType
}
