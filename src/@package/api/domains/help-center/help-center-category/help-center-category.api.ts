import {
  IHelpCenterCategoryListInput,
  IHelpCenterCategoryListRequest,
  IHelpCenterCategoryListResponse,
  IHelpCenterCategoryListResult,
  helpCenterCategoryDetailQuery,
  helpCenterCategoryListQuery,
  IHelpCenterCategoryDetailInput,
  IHelpCenterCategoryDetailRequest,
  IHelpCenterCategoryDetailResponse,
  IHelpCenterCategoryDetailResult,
  IHelpCenterCategoryCreateInput,
  IHelpCenterCategoryCreateRequest,
  IHelpCenterCategoryCreateResponse,
  IHelpCenterCategoryCreateResult,
  helpCenterCategoryCreateQuery,
  IHelpCenterCategoryUpdateInput,
  IHelpCenterCategoryUpdateRequest,
  IHelpCenterCategoryUpdateResponse,
  IHelpCenterCategoryUpdateResult,
  helpCenterCategoryUpdateQuery,
  IHelpCenterCategoryUpdateFilterInput,
  helpCenterCategoryDeleteQuery,
  IHelpCenterCategoryDeleteInput,
  IHelpCenterCategoryDeleteRequest,
  IHelpCenterCategoryDeleteResponse,
  IHelpCenterCategoryDeleteResult,
} from '@corede_package'
import { enumValues, IGraphqlVariables } from '@common_package'
import { EndpointQueryBuilder, IApi, injectTags } from '@api_package'

import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { HelpCenterCategoryEndpointDefinitions } from './help-center-category.api.types'
import { HelpCenterCategoryTags } from './help-center-category-tags.enum'

const helpCenterCategoryApiReducerPath = 'helpCenterCategoryApi'

export const injectHelpCenterCategoryTags = (api: IApi) =>
  injectTags({
    api,
    name: helpCenterCategoryApiReducerPath,
    tagTypes: enumValues(HelpCenterCategoryTags),
    options: { registerTagTypes: true },
  })

export const helpCenterCategoryEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => HelpCenterCategoryEndpointDefinitions = (builder) => ({
  // queries
  helpCenterCategoryList: builder.query<
    IHelpCenterCategoryListResult,
    IGraphqlVariables<IHelpCenterCategoryListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IHelpCenterCategoryListRequest,
      IHelpCenterCategoryListResponse,
      IHelpCenterCategoryListResult,
      IHelpCenterCategoryListInput
    >({
      query: helpCenterCategoryListQuery,
      providesTags: [],
    }),
  ),

  helpCenterCategoryDetail: builder.query<
    IHelpCenterCategoryDetailResult,
    IGraphqlVariables<IHelpCenterCategoryDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IHelpCenterCategoryDetailRequest,
      IHelpCenterCategoryDetailResponse,
      IHelpCenterCategoryDetailResult,
      IHelpCenterCategoryDetailInput
    >({
      query: helpCenterCategoryDetailQuery,
      providesTags: [],
    }),
  ),

  // mutation
  helpCenterCategoryCreate: builder.mutation<
    IHelpCenterCategoryCreateResult,
    IGraphqlVariables<IHelpCenterCategoryCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IHelpCenterCategoryCreateRequest,
      IHelpCenterCategoryCreateResponse,
      IHelpCenterCategoryCreateResult,
      IHelpCenterCategoryCreateInput
    >({
      query: helpCenterCategoryCreateQuery,
      invalidatesTags: [],
    }),
  ),

  helpCenterCategoryUpdate: builder.mutation<
    IHelpCenterCategoryUpdateResult,
    IGraphqlVariables<
      IHelpCenterCategoryUpdateInput,
      IHelpCenterCategoryUpdateFilterInput
    >
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IHelpCenterCategoryUpdateRequest,
      IHelpCenterCategoryUpdateResponse,
      IHelpCenterCategoryUpdateResult,
      IHelpCenterCategoryUpdateInput,
      IHelpCenterCategoryUpdateFilterInput
    >({
      query: helpCenterCategoryUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  helpCenterCategoryDelete: builder.mutation<
    IHelpCenterCategoryDeleteResult,
    IGraphqlVariables<IHelpCenterCategoryDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IHelpCenterCategoryDeleteRequest,
      IHelpCenterCategoryDeleteResponse,
      IHelpCenterCategoryDeleteResult,
      IHelpCenterCategoryDeleteInput
    >({
      query: helpCenterCategoryDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
