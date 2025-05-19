import {
  IHelpCenterListInput,
  IHelpCenterListRequest,
  IHelpCenterListResponse,
  IHelpCenterListResult,
  helpCenterDetailQuery,
  helpCenterListQuery,
  IHelpCenterDetailInput,
  IHelpCenterDetailRequest,
  IHelpCenterDetailResponse,
  IHelpCenterDetailResult,
  IHelpCenterCreateInput,
  IHelpCenterCreateRequest,
  IHelpCenterCreateResponse,
  IHelpCenterCreateResult,
  helpCenterCreateQuery,
  IHelpCenterUpdateInput,
  IHelpCenterUpdateRequest,
  IHelpCenterUpdateResponse,
  IHelpCenterUpdateResult,
  helpCenterUpdateQuery,
  IHelpCenterUpdateFilterInput,
  helpCenterDeleteQuery,
  IHelpCenterDeleteInput,
  IHelpCenterDeleteRequest,
  IHelpCenterDeleteResponse,
  IHelpCenterDeleteResult,
} from '@corede_package'
import { enumValues, IGraphqlVariables } from '@/@package/common'
import { EndpointQueryBuilder, IApi, injectTags } from '@api_package'
import { HelpCenterTags } from './help-center-tags.enum'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { HelpCenterEndpointDefinitions } from './help-center.api.types'

const helpCenterApiReducerPath = 'helpCenterApi'

export const injectHelpCenterTags = (api: IApi) =>
  injectTags({
    api,
    name: helpCenterApiReducerPath,
    tagTypes: enumValues(HelpCenterTags),
    options: { registerTagTypes: true },
  })

export const helpCenterEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => HelpCenterEndpointDefinitions = (builder) => ({
  // queries
  helpCenterList: builder.query<
    IHelpCenterListResult,
    IGraphqlVariables<IHelpCenterListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IHelpCenterListRequest,
      IHelpCenterListResponse,
      IHelpCenterListResult,
      IHelpCenterListInput
    >({
      query: helpCenterListQuery,
      providesTags: [],
    }),
  ),

  helpCenterDetail: builder.query<
    IHelpCenterDetailResult,
    IGraphqlVariables<IHelpCenterDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IHelpCenterDetailRequest,
      IHelpCenterDetailResponse,
      IHelpCenterDetailResult,
      IHelpCenterDetailInput
    >({
      query: helpCenterDetailQuery,
      providesTags: [],
    }),
  ),

  // mutation
  helpCenterCreate: builder.mutation<
    IHelpCenterCreateResult,
    IGraphqlVariables<IHelpCenterCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IHelpCenterCreateRequest,
      IHelpCenterCreateResponse,
      IHelpCenterCreateResult,
      IHelpCenterCreateInput
    >({
      query: helpCenterCreateQuery,
      invalidatesTags: [],
    }),
  ),

  helpCenterUpdate: builder.mutation<
    IHelpCenterUpdateResult,
    IGraphqlVariables<IHelpCenterUpdateInput, IHelpCenterUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IHelpCenterUpdateRequest,
      IHelpCenterUpdateResponse,
      IHelpCenterUpdateResult,
      IHelpCenterUpdateInput,
      IHelpCenterUpdateFilterInput
    >({
      query: helpCenterUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  helpCenterDelete: builder.mutation<
    IHelpCenterDeleteResult,
    IGraphqlVariables<IHelpCenterDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IHelpCenterDeleteRequest,
      IHelpCenterDeleteResponse,
      IHelpCenterDeleteResult,
      IHelpCenterDeleteInput
    >({
      query: helpCenterDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
