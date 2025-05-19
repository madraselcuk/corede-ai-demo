import {
  faqListQuery,
  IFaqListInput,
  IFaqListRequest,
  IFaqListResponse,
  IFaqListResult,
  faqDetailQuery,
  IFaqDetailInput,
  IFaqDetailRequest,
  IFaqDetailResponse,
  IFaqDetailResult,
  faqCreateQuery,
  IFaqCreateInput,
  IFaqCreateRequest,
  IFaqCreateResponse,
  IFaqCreateResult,
  faqUpdateQuery,
  IFaqUpdateInput,
  IFaqUpdateRequest,
  IFaqUpdateResponse,
  IFaqUpdateResult,
  IFaqUpdateFilterInput,
  faqDeleteQuery,
  IFaqDeleteInput,
  IFaqDeleteRequest,
  IFaqDeleteResponse,
  IFaqDeleteResult,
  faqListPublicQuery,
  IFaqListPublicResult,
  faqDetailPublicQuery,
  IFaqDetailPublicResult,
  IFaqDetailPublicInput,
  IFaqDetailPublicRequest,
  IFaqDetailPublicResponse,
} from '@corede_package'
import { enumValues, IGraphqlVariables } from '@common_package'
import { EndpointQueryBuilder } from '../../../graphql'
import { FaqTags } from './faq-tags.enum'
import { IApi, injectTags } from '@/@package/api/redux'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { FaqEndpointDefinitions } from './faq.api.types'

const faqApiReducerPath = 'faqApi'

export const injectFaqTags = (api: IApi) =>
  injectTags({
    api,
    name: faqApiReducerPath,
    tagTypes: enumValues(FaqTags),
    options: { registerTagTypes: true },
  })

export const faqEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => FaqEndpointDefinitions = (builder) => ({
  // queries
  faqList: builder.query<IFaqListResult, IGraphqlVariables<IFaqListInput>>(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqListRequest,
      IFaqListResponse,
      IFaqListResult,
      IFaqListInput
    >({
      query: faqListQuery,
      providesTags: [FaqTags.FaqList],
    }),
  ),

  faqListPublic: builder.query<
    IFaqListPublicResult,
    IGraphqlVariables<IFaqListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqListRequest,
      IFaqListResponse,
      IFaqListResult,
      IFaqListInput
    >({
      query: faqListPublicQuery,
      providesTags: [FaqTags.FaqList],
    }),
  ),

  faqDetail: builder.query<
    IFaqDetailResult,
    IGraphqlVariables<IFaqDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqDetailRequest,
      IFaqDetailResponse,
      IFaqDetailResult,
      IFaqDetailInput
    >({
      query: faqDetailQuery,
      providesTags: [FaqTags.FaqDetail],
    }),
  ),

  faqDetailPublic: builder.query<
    IFaqDetailPublicResult,
    IGraphqlVariables<IFaqDetailPublicInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqDetailPublicRequest,
      IFaqDetailPublicResponse,
      IFaqDetailPublicResult,
      IFaqDetailPublicInput
    >({
      query: faqDetailPublicQuery,
      providesTags: [FaqTags.FaqDetail],
    }),
  ),

  // mutation
  faqCreate: builder.mutation<
    IFaqCreateResult,
    IGraphqlVariables<IFaqCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqCreateRequest,
      IFaqCreateResponse,
      IFaqCreateResult,
      IFaqCreateInput
    >({
      query: faqCreateQuery,
      invalidatesTags: [FaqTags.FaqList, FaqTags.FaqDetail],
    }),
  ),

  faqUpdate: builder.mutation<
    IFaqUpdateResult,
    IGraphqlVariables<IFaqUpdateInput, IFaqUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqUpdateRequest,
      IFaqUpdateResponse,
      IFaqUpdateResult,
      IFaqUpdateInput,
      IFaqUpdateFilterInput
    >({
      query: faqUpdateQuery,
      invalidatesTags: [FaqTags.FaqList, FaqTags.FaqDetail],
    }),
  ),

  faqDelete: builder.mutation<
    IFaqDeleteResult,
    IGraphqlVariables<IFaqDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqDeleteRequest,
      IFaqDeleteResponse,
      IFaqDeleteResult,
      IFaqDeleteInput
    >({
      query: faqDeleteQuery,
      invalidatesTags: [FaqTags.FaqList, FaqTags.FaqDetail],
    }),
  ),
})
