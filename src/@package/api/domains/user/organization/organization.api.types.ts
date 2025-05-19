import {
  IOrganizationListInput,
  IOrganizationListResult,
  IOrganizationDetailInput,
  IOrganizationDetailResult,
  IOrganizationCreateInput,
  IOrganizationCreateResult,
  IOrganizationUpdateInput,
  IOrganizationUpdateResult,
  IOrganizationUpdateFilterInput,
  IOrganizationDeleteInput,
  IOrganizationDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type organizationListType = QueryDefinition<
  IGraphqlVariables<IOrganizationListInput>,
  BaseQueryFn,
  never,
  IOrganizationListResult,
  'commonApi'
>

type organizationDetailType = QueryDefinition<
  IGraphqlVariables<IOrganizationDetailInput>,
  BaseQueryFn,
  never,
  IOrganizationDetailResult,
  'commonApi'
>

type organizationCreateType = MutationDefinition<
  IGraphqlVariables<IOrganizationCreateInput>,
  BaseQueryFn,
  never,
  IOrganizationCreateResult,
  'commonApi'
>

type organizationUpdateType = MutationDefinition<
  IGraphqlVariables<IOrganizationUpdateInput, IOrganizationUpdateFilterInput>,
  BaseQueryFn,
  never,
  IOrganizationUpdateResult,
  'commonApi'
>

type organizationDeleteType = MutationDefinition<
  IGraphqlVariables<IOrganizationDeleteInput>,
  BaseQueryFn,
  never,
  IOrganizationDeleteResult,
  'commonApi'
>

export type OrganizationEndpointDefinitions = {
  organizationList: organizationListType
  organizationDetail: organizationDetailType
  organizationCreate: organizationCreateType
  organizationUpdate: organizationUpdateType
  organizationDelete: organizationDeleteType
}
