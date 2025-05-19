import {
  IHelpCenterListInput,
  IHelpCenterListResult,
  IHelpCenterDetailInput,
  IHelpCenterDetailResult,
  IHelpCenterCreateInput,
  IHelpCenterCreateResult,
  IHelpCenterUpdateInput,
  IHelpCenterUpdateResult,
  IHelpCenterUpdateFilterInput,
  IHelpCenterDeleteInput,
  IHelpCenterDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type helpCenterListType = QueryDefinition<
  IGraphqlVariables<IHelpCenterListInput>,
  BaseQueryFn,
  never,
  IHelpCenterListResult,
  'commonApi'
>

type helpCenterDetailType = QueryDefinition<
  IGraphqlVariables<IHelpCenterDetailInput>,
  BaseQueryFn,
  never,
  IHelpCenterDetailResult,
  'commonApi'
>

type helpCenterCreateType = MutationDefinition<
  IGraphqlVariables<IHelpCenterCreateInput>,
  BaseQueryFn,
  never,
  IHelpCenterCreateResult,
  'commonApi'
>

type helpCenterUpdateType = MutationDefinition<
  IGraphqlVariables<IHelpCenterUpdateInput, IHelpCenterUpdateFilterInput>,
  BaseQueryFn,
  never,
  IHelpCenterUpdateResult,
  'commonApi'
>

type helpCenterDeleteType = MutationDefinition<
  IGraphqlVariables<IHelpCenterDeleteInput>,
  BaseQueryFn,
  never,
  IHelpCenterDeleteResult,
  'commonApi'
>

export type HelpCenterEndpointDefinitions = {
  helpCenterList: helpCenterListType
  helpCenterDetail: helpCenterDetailType
  helpCenterCreate: helpCenterCreateType
  helpCenterUpdate: helpCenterUpdateType
  helpCenterDelete: helpCenterDeleteType
}
