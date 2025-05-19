import {
  IHelpCenterCategoryListInput,
  IHelpCenterCategoryListResult,
  IHelpCenterCategoryDetailInput,
  IHelpCenterCategoryDetailResult,
  IHelpCenterCategoryCreateInput,
  IHelpCenterCategoryCreateResult,
  IHelpCenterCategoryUpdateInput,
  IHelpCenterCategoryUpdateResult,
  IHelpCenterCategoryUpdateFilterInput,
  IHelpCenterCategoryDeleteInput,
  IHelpCenterCategoryDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type helpCenterCategoryListType = QueryDefinition<
  IGraphqlVariables<IHelpCenterCategoryListInput>,
  BaseQueryFn,
  never,
  IHelpCenterCategoryListResult,
  'commonApi'
>

type helpCenterCategoryDetailType = QueryDefinition<
  IGraphqlVariables<IHelpCenterCategoryDetailInput>,
  BaseQueryFn,
  never,
  IHelpCenterCategoryDetailResult,
  'commonApi'
>

type helpCenterCategoryCreateType = MutationDefinition<
  IGraphqlVariables<IHelpCenterCategoryCreateInput>,
  BaseQueryFn,
  never,
  IHelpCenterCategoryCreateResult,
  'commonApi'
>

type helpCenterCategoryUpdateType = MutationDefinition<
  IGraphqlVariables<
    IHelpCenterCategoryUpdateInput,
    IHelpCenterCategoryUpdateFilterInput
  >,
  BaseQueryFn,
  never,
  IHelpCenterCategoryUpdateResult,
  'commonApi'
>

type helpCenterCategoryDeleteType = MutationDefinition<
  IGraphqlVariables<IHelpCenterCategoryDeleteInput>,
  BaseQueryFn,
  never,
  IHelpCenterCategoryDeleteResult,
  'commonApi'
>

export type HelpCenterCategoryEndpointDefinitions = {
  helpCenterCategoryList: helpCenterCategoryListType
  helpCenterCategoryDetail: helpCenterCategoryDetailType
  helpCenterCategoryCreate: helpCenterCategoryCreateType
  helpCenterCategoryUpdate: helpCenterCategoryUpdateType
  helpCenterCategoryDelete: helpCenterCategoryDeleteType
}
