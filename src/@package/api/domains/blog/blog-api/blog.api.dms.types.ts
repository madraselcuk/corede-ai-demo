import {
  IDomainFileCreateOwnInputWithMimeType,
  IDomainFileCreateResult,
  IEntityFileAssignOwnInput,
  IEntityFileAssignResult,
  IGraphqlVariables,
} from '@common_package'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { MutationDefinition } from '@reduxjs/toolkit/query'

type blogImageCreateType = MutationDefinition<
  IGraphqlVariables<IDomainFileCreateOwnInputWithMimeType>,
  BaseQueryFn,
  never,
  IDomainFileCreateResult,
  'commonApi'
>

type blogImageAssignType = MutationDefinition<
  IGraphqlVariables<IEntityFileAssignOwnInput>,
  BaseQueryFn,
  never,
  IEntityFileAssignResult,
  'commonApi'
>

export type BlogDmsEndpointDefinitions = {
  blogImageCreate: blogImageCreateType
  blogImageAssign: blogImageAssignType
}
