import {
  ISubscriptionFormListInput,
  ISubscriptionFormListRequest,
  ISubscriptionFormListResponse,
  ISubscriptionFormListResult,
  subscriptionFormDetailQuery,
  subscriptionFormListQuery,
  ISubscriptionFormDetailInput,
  ISubscriptionFormDetailRequest,
  ISubscriptionFormDetailResponse,
  ISubscriptionFormDetailResult,
  subscriptionFormDeleteQuery,
  ISubscriptionFormDeleteInput,
  ISubscriptionFormDeleteRequest,
  ISubscriptionFormDeleteResponse,
  ISubscriptionFormDeleteResult,
  ISubscriptionFormUserCreateInput,
  ISubscriptionFormUserCreateRequest,
  ISubscriptionFormUserCreateResponse,
  ISubscriptionFormUserCreateResult,
  subscriptionFormUserCreateQuery,
  ISubscriptionFormPublicCreateInput,
  ISubscriptionFormPublicCreateRequest,
  ISubscriptionFormPublicCreateResponse,
  ISubscriptionFormPublicCreateResult,
  subscriptionFormPublicCreateQuery,
  ISubscriptionFormPublicUpdateInput,
  ISubscriptionFormPublicUpdateResult,
  subscriptionFormPublicUpdateQuery,
  ISubscriptionFormPublicUpdateRequest,
  ISubscriptionFormPublicUpdateResponse,
  ISubscriptionFormPublicUpdateFilterInput,
  ISubscriptionFormUserUpdateInput,
  ISubscriptionFormUserUpdateRequest,
  ISubscriptionFormUserUpdateResponse,
  ISubscriptionFormUserUpdateResult,
  subscriptionFormUserUpdateQuery,
  ISubscriptionFormUpdateResponse,
  ISubscriptionFormUpdateInput,
  ISubscriptionFormUpdateRequest,
  ISubscriptionFormUpdateResult,
  subscriptionFormUpdateQuery,
  ISubscriptionFormUpdateFilterInput,
  ISubscriptionFormCreateInput,
  ISubscriptionFormCreateResult,
  ISubscriptionFormCreateRequest,
  ISubscriptionFormCreateResponse,
  subscriptionFormCreateQuery,
} from '@corede_package'
import { enumValues, IGraphqlVariables } from '@common_package'
import { EndpointQueryBuilder, IApi, injectTags } from '@api_package'
import { SubscriptionFormTags } from './subscription-form.tags'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { SubscriptionFormEndpointDefinitions } from './subscription-form.api.types'

const subscriptionFormApiReducerPath = 'subscriptionFormApi'

export const injectSubscriptionFormTags = (api: IApi) =>
  injectTags({
    api,
    name: subscriptionFormApiReducerPath,
    tagTypes: enumValues(SubscriptionFormTags),
    options: { registerTagTypes: true },
  })

export const subscriptionFormEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => SubscriptionFormEndpointDefinitions = (builder) => ({
  // queries
  subscriptionFormList: builder.query<
    ISubscriptionFormListResult,
    IGraphqlVariables<ISubscriptionFormListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ISubscriptionFormListRequest,
      ISubscriptionFormListResponse,
      ISubscriptionFormListResult,
      ISubscriptionFormListInput
    >({
      query: subscriptionFormListQuery,
      providesTags: [],
    }),
  ),

  subscriptionFormDetail: builder.query<
    ISubscriptionFormDetailResult,
    IGraphqlVariables<ISubscriptionFormDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ISubscriptionFormDetailRequest,
      ISubscriptionFormDetailResponse,
      ISubscriptionFormDetailResult,
      ISubscriptionFormDetailInput
    >({
      query: subscriptionFormDetailQuery,
      providesTags: [],
    }),
  ),

  // mutation
  subscriptionFormCreate: builder.mutation<
    ISubscriptionFormCreateResult,
    IGraphqlVariables<ISubscriptionFormCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ISubscriptionFormCreateRequest,
      ISubscriptionFormCreateResponse,
      ISubscriptionFormCreateResult,
      ISubscriptionFormCreateInput
    >({
      query: subscriptionFormCreateQuery,
      invalidatesTags: [],
    }),
  ),

  subscriptionFormCreateUser: builder.mutation<
    ISubscriptionFormUserCreateResult,
    IGraphqlVariables<ISubscriptionFormUserCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ISubscriptionFormUserCreateRequest,
      ISubscriptionFormUserCreateResponse,
      ISubscriptionFormUserCreateResult,
      ISubscriptionFormUserCreateInput
    >({
      query: subscriptionFormUserCreateQuery,
      invalidatesTags: [],
    }),
  ),

  subscriptionFormCreatePublic: builder.mutation<
    ISubscriptionFormPublicCreateResult,
    IGraphqlVariables<ISubscriptionFormPublicCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ISubscriptionFormPublicCreateRequest,
      ISubscriptionFormPublicCreateResponse,
      ISubscriptionFormPublicCreateResult,
      ISubscriptionFormPublicCreateInput
    >({
      query: subscriptionFormPublicCreateQuery,
      invalidatesTags: [],
    }),
  ),

  subscriptionFormUpdate: builder.mutation<
    ISubscriptionFormUpdateResult,
    IGraphqlVariables<
      ISubscriptionFormUpdateInput,
      ISubscriptionFormUpdateFilterInput
    >
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ISubscriptionFormUpdateRequest,
      ISubscriptionFormUpdateResponse,
      ISubscriptionFormUpdateResult,
      ISubscriptionFormUpdateInput,
      ISubscriptionFormUpdateFilterInput
    >({
      query: subscriptionFormUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  subscriptionFormUpdateUser: builder.mutation<
    ISubscriptionFormUserUpdateResult,
    IGraphqlVariables<ISubscriptionFormUserUpdateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ISubscriptionFormUserUpdateRequest,
      ISubscriptionFormUserUpdateResponse,
      ISubscriptionFormUserUpdateResult,
      ISubscriptionFormUserUpdateInput
    >({
      query: subscriptionFormUserUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  subscriptionFormUpdatePublic: builder.mutation<
    ISubscriptionFormPublicUpdateResult,
    IGraphqlVariables<
      ISubscriptionFormPublicUpdateInput,
      ISubscriptionFormPublicUpdateFilterInput
    >
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ISubscriptionFormPublicUpdateRequest,
      ISubscriptionFormPublicUpdateResponse,
      ISubscriptionFormPublicUpdateResult,
      ISubscriptionFormPublicUpdateInput,
      ISubscriptionFormPublicUpdateFilterInput
    >({
      query: subscriptionFormPublicUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  subscriptionFormDelete: builder.mutation<
    ISubscriptionFormDeleteResult,
    IGraphqlVariables<ISubscriptionFormDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ISubscriptionFormDeleteRequest,
      ISubscriptionFormDeleteResponse,
      ISubscriptionFormDeleteResult,
      ISubscriptionFormDeleteInput
    >({
      query: subscriptionFormDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
