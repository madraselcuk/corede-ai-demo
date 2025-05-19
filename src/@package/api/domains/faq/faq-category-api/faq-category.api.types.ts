import {
  IFaqCategoryListInput,
  IFaqCategoryListResult,
  IFaqCategoryDetailInput,
  IFaqCategoryDetailResult,
  IFaqCategoryCreateInput,
  IFaqCategoryCreateResult,
  IFaqCategoryUpdateInput,
  IFaqCategoryUpdateResult,
  IFaqCategoryUpdateFilterInput,
  IFaqCategoryDeleteInput,
  IFaqCategoryDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type faqCategoryListType = QueryDefinition<
  IGraphqlVariables<IFaqCategoryListInput>,
  BaseQueryFn,
  never,
  IFaqCategoryListResult,
  'commonApi'
>

type faqCategoryListPublicType = QueryDefinition<
  IGraphqlVariables<IFaqCategoryListInput>,
  BaseQueryFn,
  never,
  IFaqCategoryListResult,
  'commonApi'
  >

type faqCategoryDetailType = QueryDefinition<
  IGraphqlVariables<IFaqCategoryDetailInput>,
  BaseQueryFn,
  never,
  IFaqCategoryDetailResult,
  'commonApi'
>

type faqCategoryCreateType = MutationDefinition<
  IGraphqlVariables<IFaqCategoryCreateInput>,
  BaseQueryFn,
  never,
  IFaqCategoryCreateResult,
  'commonApi'
>

type faqCategoryUpdateType = MutationDefinition<
  IGraphqlVariables<IFaqCategoryUpdateInput, IFaqCategoryUpdateFilterInput>,
  BaseQueryFn,
  never,
  IFaqCategoryUpdateResult,
  'commonApi'
>

type faqCategoryDeleteType = MutationDefinition<
  IGraphqlVariables<IFaqCategoryDeleteInput>,
  BaseQueryFn,
  never,
  IFaqCategoryDeleteResult,
  'commonApi'
>

export type FaqCategoryEndpointDefinitions = {
  faqCategoryList: faqCategoryListType
  faqCategoryListPublic: faqCategoryListPublicType
  faqCategoryDetail: faqCategoryDetailType
  faqCategoryCreate: faqCategoryCreateType
  faqCategoryUpdate: faqCategoryUpdateType
  faqCategoryDelete: faqCategoryDeleteType
}
