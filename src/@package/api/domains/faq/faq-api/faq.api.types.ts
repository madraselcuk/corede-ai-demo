import {
  IFaqListInput,
  IFaqListResult,
  IFaqDetailInput,
  IFaqDetailResult,
  IFaqCreateInput,
  IFaqCreateResult,
  IFaqUpdateInput,
  IFaqUpdateResult,
  IFaqUpdateFilterInput,
  IFaqDeleteInput,
  IFaqDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type faqListType = QueryDefinition<
  IGraphqlVariables<IFaqListInput>,
  BaseQueryFn,
  string,
  IFaqListResult,
  'commonApi'
>

type faqListPublicType = QueryDefinition<
  IGraphqlVariables<IFaqListInput>,
  BaseQueryFn,
  never,
  IFaqListResult,
  'commonApi'
>

type faqDetailType = QueryDefinition<
  IGraphqlVariables<IFaqDetailInput>,
  BaseQueryFn,
  string,
  IFaqDetailResult,
  'commonApi'
>

type faqDetailPublicType = QueryDefinition<
  IGraphqlVariables<IFaqDetailInput>,
  BaseQueryFn,
  never,
  IFaqDetailResult,
  'commonApi'
>

type faqCreateType = MutationDefinition<
  IGraphqlVariables<IFaqCreateInput>,
  BaseQueryFn,
  string,
  IFaqCreateResult,
  'commonApi'
>

type faqUpdateType = MutationDefinition<
  IGraphqlVariables<IFaqUpdateInput, IFaqUpdateFilterInput>,
  BaseQueryFn,
  string,
  IFaqUpdateResult,
  'commonApi'
>

type faqDeleteType = MutationDefinition<
  IGraphqlVariables<IFaqDeleteInput>,
  BaseQueryFn,
  string,
  IFaqDeleteResult,
  'commonApi'
>

export type FaqEndpointDefinitions = {
  faqList: faqListType
  faqListPublic: faqListPublicType
  faqDetail: faqDetailType
  faqDetailPublic: faqDetailPublicType
  faqCreate: faqCreateType
  faqUpdate: faqUpdateType
  faqDelete: faqDeleteType
}
