import {
  faqCategoryListQuery,
  IFaqCategoryListInput,
  IFaqCategoryListRequest,
  IFaqCategoryListResponse,
  IFaqCategoryListResult,
  faqCategoryDetailQuery,
  IFaqCategoryDetailInput,
  IFaqCategoryDetailRequest,
  IFaqCategoryDetailResponse,
  IFaqCategoryDetailResult,
  faqCategoryCreateQuery,
  IFaqCategoryCreateInput,
  IFaqCategoryCreateRequest,
  IFaqCategoryCreateResponse,
  IFaqCategoryCreateResult,
  faqCategoryUpdateQuery,
  IFaqCategoryUpdateInput,
  IFaqCategoryUpdateRequest,
  IFaqCategoryUpdateResponse,
  IFaqCategoryUpdateResult,
  faqCategoryDeleteQuery,
  IFaqCategoryDeleteInput,
  IFaqCategoryDeleteRequest,
  IFaqCategoryDeleteResponse,
  IFaqCategoryDeleteResult,
  IFaqCategoryUpdateFilterInput,
  IFaqCategoryListPublicResult,
  faqCategoryListQueryPublic,
  IFaqCategoryListPublicInput,
  IFaqCategoryListRequestPublic,
  IFaqCategoryListResponsePublic,
} from '@corede_package'

import { enumValues, IGraphqlVariables } from '@common_package'
import { EndpointQueryBuilder } from '../../../graphql'
import { FaqCategoryTags } from './faq-category-tags.enum'
import { IApi, injectTags } from '../../../redux'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { FaqCategoryEndpointDefinitions } from './faq-category.api.types'

const faqCategoryApiReducerPath = 'faqCategoryApi'

export const injectFaqCategoryTags = (api: IApi) =>
  injectTags({
    api,
    name: faqCategoryApiReducerPath,
    tagTypes: enumValues(FaqCategoryTags),
    options: { registerTagTypes: true },
  })

export const faqCategoryEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => FaqCategoryEndpointDefinitions = (builder) => ({
  // queries
  faqCategoryList: builder.query<
    IFaqCategoryListResult,
    IGraphqlVariables<IFaqCategoryListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqCategoryListRequest,
      IFaqCategoryListResponse,
      IFaqCategoryListResult,
      IFaqCategoryListInput
    >({
      query: faqCategoryListQuery,
      providesTags: [FaqCategoryTags.FaqCategoryList],
    }),
  ),

  faqCategoryListPublic: builder.query<
    IFaqCategoryListPublicResult,
    IGraphqlVariables<IFaqCategoryListPublicInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqCategoryListRequestPublic,
      IFaqCategoryListResponsePublic,
      IFaqCategoryListPublicResult,
      IFaqCategoryListPublicInput
    >({
      query: faqCategoryListQueryPublic,
      providesTags: [],
    }),
  ),

  faqCategoryDetail: builder.query<
    IFaqCategoryDetailResult,
    IGraphqlVariables<IFaqCategoryDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqCategoryDetailRequest,
      IFaqCategoryDetailResponse,
      IFaqCategoryDetailResult,
      IFaqCategoryDetailInput
    >({
      query: faqCategoryDetailQuery,
      providesTags: [FaqCategoryTags.FaqCategoryDetail],
    }),
  ),

  // mutation
  faqCategoryCreate: builder.mutation<
    IFaqCategoryCreateResult,
    IGraphqlVariables<IFaqCategoryCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqCategoryCreateRequest,
      IFaqCategoryCreateResponse,
      IFaqCategoryCreateResult,
      IFaqCategoryCreateInput
    >({
      query: faqCategoryCreateQuery,
      invalidatesTags: [
        FaqCategoryTags.FaqCategoryList,
        FaqCategoryTags.FaqCategoryDetail,
      ],
    }),
  ),

  faqCategoryUpdate: builder.mutation<
    IFaqCategoryUpdateResult,
    IGraphqlVariables<IFaqCategoryUpdateInput, IFaqCategoryUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqCategoryUpdateRequest,
      IFaqCategoryUpdateResponse,
      IFaqCategoryUpdateResult,
      IFaqCategoryUpdateInput,
      IFaqCategoryUpdateFilterInput
    >({
      query: faqCategoryUpdateQuery,
      invalidatesTags: [
        FaqCategoryTags.FaqCategoryList,
        FaqCategoryTags.FaqCategoryDetail,
      ],
    }),
  ),

  faqCategoryDelete: builder.mutation<
    IFaqCategoryDeleteResult,
    IGraphqlVariables<IFaqCategoryDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IFaqCategoryDeleteRequest,
      IFaqCategoryDeleteResponse,
      IFaqCategoryDeleteResult,
      IFaqCategoryDeleteInput
    >({
      query: faqCategoryDeleteQuery,
      invalidatesTags: [
        FaqCategoryTags.FaqCategoryList,
        FaqCategoryTags.FaqCategoryDetail,
      ],
    }),
  ),
})
