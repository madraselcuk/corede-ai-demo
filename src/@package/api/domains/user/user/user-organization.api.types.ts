import {
  IOrganizationCreateResult,
  IOrganizationCreateInput,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import { BaseQueryFn, MutationDefinition } from '@reduxjs/toolkit/query'

type organizationCreateOwnType = MutationDefinition<
  IGraphqlVariables<IOrganizationCreateInput>,
  BaseQueryFn,
  never,
  IOrganizationCreateResult,
  'commonApi'
>

export type UserOrganizationEndpointDefinitions = {
  organizationCreateOwn: organizationCreateOwnType
}
