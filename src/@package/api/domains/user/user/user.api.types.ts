import {
  IUserListInput,
  IUserListResult,
  IUserDetailInput,
  IUserDetailResult,
  IUserCreateInput,
  IUserCreateResult,
  IUserUpdateInput,
  IUserUpdateResult,
  IUserUpdateFilterInput,
  IUserDeleteInput,
  IUserDeleteResult,
  IUserDetailOwnResult,
  IUserDetailOwnInput,
  IUserListByRelatedInput,
  IUserListByRelatedResult,
  IUserUpdateOwnResult,
  IUserUpdateOwnInput,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type userListType = QueryDefinition<
  IGraphqlVariables<IUserListInput>,
  BaseQueryFn,
  never,
  IUserListResult,
  'commonApi'
>

type userListByRelatedType = QueryDefinition<
  IGraphqlVariables<IUserListByRelatedInput>,
  BaseQueryFn,
  never,
  IUserListByRelatedResult,
  'commonApi'
>

type userDetailType = QueryDefinition<
  IGraphqlVariables<IUserDetailInput>,
  BaseQueryFn,
  never,
  IUserDetailResult,
  'commonApi'
>

type userDetailOwnType = QueryDefinition<
  IGraphqlVariables<IUserDetailOwnInput>,
  BaseQueryFn,
  never,
  IUserDetailOwnResult,
  'commonApi'
>

type userCreateType = MutationDefinition<
  IGraphqlVariables<IUserCreateInput>,
  BaseQueryFn,
  never,
  IUserCreateResult,
  'commonApi'
>

type userUpdateType = MutationDefinition<
  IGraphqlVariables<IUserUpdateInput, IUserUpdateFilterInput>,
  BaseQueryFn,
  never,
  IUserUpdateResult,
  'commonApi'
>

type userUpdateOwnType = MutationDefinition<
  IGraphqlVariables<IUserUpdateOwnInput>,
  BaseQueryFn,
  never,
  IUserUpdateOwnResult,
  'commonApi'
>
type userDeleteType = MutationDefinition<
  IGraphqlVariables<IUserDeleteInput>,
  BaseQueryFn,
  never,
  IUserDeleteResult,
  'commonApi'
>

export type UserEndpointDefinitions = {
  userList: userListType
  userListByRelated: userListByRelatedType
  userDetail: userDetailType
  userDetailOwn: userDetailOwnType
  userCreate: userCreateType
  userUpdate: userUpdateType
  userUpdateOwn: userUpdateOwnType
  userDelete: userDeleteType
}
