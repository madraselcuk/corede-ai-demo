import {
  IDomainFileCreateOwnInputWithMimeType,
  IDomainFileCreateResult,
  IEntityFileAssignOwnInput,
  IEntityFileAssignResult,
  IGraphqlVariables,
} from '@common_package'
import { BaseQueryFn, MutationDefinition } from '@reduxjs/toolkit/query'

type userProfileImageCreateType = MutationDefinition<
  IGraphqlVariables<IDomainFileCreateOwnInputWithMimeType>,
  BaseQueryFn,
  never,
  IDomainFileCreateResult,
  'commonApi'
>

type userProfileImageAssignType = MutationDefinition<
  IGraphqlVariables<IEntityFileAssignOwnInput>,
  BaseQueryFn,
  never,
  IEntityFileAssignResult,
  'commonApi'
>

export type UserDmsEndpointDefinitions = {
  userProfileImageCreate: userProfileImageCreateType
  userProfileImageAssign: userProfileImageAssignType
}
