import {
  ISubscriptionFormListInput,
  ISubscriptionFormListResult,
  ISubscriptionFormDetailInput,
  ISubscriptionFormDetailResult,
  ISubscriptionFormDeleteInput,
  ISubscriptionFormDeleteResult,
  ISubscriptionFormUserCreateInput,
  ISubscriptionFormUserCreateResult,
  ISubscriptionFormPublicCreateInput,
  ISubscriptionFormPublicCreateResult,
  ISubscriptionFormPublicUpdateInput,
  ISubscriptionFormPublicUpdateResult,
  ISubscriptionFormPublicUpdateFilterInput,
  ISubscriptionFormUserUpdateInput,
  ISubscriptionFormUserUpdateResult,
  ISubscriptionFormUpdateInput,
  ISubscriptionFormUpdateResult,
  ISubscriptionFormUpdateFilterInput,
  ISubscriptionFormCreateInput,
  ISubscriptionFormCreateResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type subscriptionFormListType = QueryDefinition<
  IGraphqlVariables<ISubscriptionFormListInput>,
  BaseQueryFn,
  never,
  ISubscriptionFormListResult,
  'commonApi'
>

type subscriptionFormDetailType = QueryDefinition<
  IGraphqlVariables<ISubscriptionFormDetailInput>,
  BaseQueryFn,
  never,
  ISubscriptionFormDetailResult,
  'commonApi'
>

type subscriptionFormCreateType = MutationDefinition<
  IGraphqlVariables<ISubscriptionFormCreateInput>,
  BaseQueryFn,
  never,
  ISubscriptionFormCreateResult,
  'commonApi'
>

type subscriptionFormCreatePublicType = MutationDefinition<
  IGraphqlVariables<ISubscriptionFormPublicCreateInput>,
  BaseQueryFn,
  never,
  ISubscriptionFormPublicCreateResult,
  'commonApi'
>

type subscriptionFormUserCreateType = MutationDefinition<
  IGraphqlVariables<ISubscriptionFormUserCreateInput>,
  BaseQueryFn,
  never,
  ISubscriptionFormUserCreateResult,
  'commonApi'
>

type subscriptionFormUpdateType = MutationDefinition<
  IGraphqlVariables<
    ISubscriptionFormUpdateInput,
    ISubscriptionFormUpdateFilterInput
  >,
  BaseQueryFn,
  never,
  ISubscriptionFormUpdateResult,
  'commonApi'
>

type subscriptionFormPublicUpdateType = MutationDefinition<
  IGraphqlVariables<
    ISubscriptionFormPublicUpdateInput,
    ISubscriptionFormPublicUpdateFilterInput
  >,
  BaseQueryFn,
  never,
  ISubscriptionFormPublicUpdateResult,
  'commonApi'
>

type subscriptionFormUserUpdateType = MutationDefinition<
  IGraphqlVariables<ISubscriptionFormUserUpdateInput>,
  BaseQueryFn,
  never,
  ISubscriptionFormUserUpdateResult,
  'commonApi'
>

type subscriptionFormDeleteType = MutationDefinition<
  IGraphqlVariables<ISubscriptionFormDeleteInput>,
  BaseQueryFn,
  never,
  ISubscriptionFormDeleteResult,
  'commonApi'
>

export type SubscriptionFormEndpointDefinitions = {
  subscriptionFormList: subscriptionFormListType
  subscriptionFormDetail: subscriptionFormDetailType
  subscriptionFormCreate: subscriptionFormCreateType
  subscriptionFormCreatePublic: subscriptionFormCreatePublicType
  subscriptionFormCreateUser: subscriptionFormUserCreateType
  subscriptionFormUpdate: subscriptionFormUpdateType
  subscriptionFormUpdatePublic: subscriptionFormPublicUpdateType
  subscriptionFormUpdateUser: subscriptionFormUserUpdateType
  subscriptionFormDelete: subscriptionFormDeleteType
}
