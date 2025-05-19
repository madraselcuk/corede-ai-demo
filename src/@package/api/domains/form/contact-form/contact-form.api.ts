import {
  IContactFormListInput,
  IContactFormListRequest,
  IContactFormListResponse,
  IContactFormListResult,
  contactFormDetailQuery,
  contactFormListQuery,
  IContactFormDetailInput,
  IContactFormDetailRequest,
  IContactFormDetailResponse,
  IContactFormDetailResult,
  contactFormDeleteQuery,
  IContactFormDeleteInput,
  IContactFormDeleteRequest,
  IContactFormDeleteResponse,
  IContactFormDeleteResult,
  IContactFormUpdateFilterInput,
  IContactFormUpdateInput,
  IContactFormUpdateRequest,
  IContactFormUpdateResponse,
  IContactFormUpdateResult,
  contactFormUpdateQuery,
  IContactFormCreateInput,
  IContactFormCreateRequest,
  IContactFormCreateResponse,
  IContactFormCreateResult,
  contactFormCreateQuery,
} from '@corede_package'
import { enumValues, IGraphqlVariables } from '@common_package'
import { IApi, injectTags, EndpointQueryBuilder } from '@api_package'
import { ContactFormTags } from './contact-form.tags'
import { ContactFormEndpointDefinitions } from './contact-form.api.types'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'

const contactFormApiReducerPath = 'contactFormApi'

export const injectContactFormTags = (api: IApi) =>
  injectTags({
    api,
    name: contactFormApiReducerPath,
    tagTypes: enumValues(ContactFormTags),
    options: { registerTagTypes: true },
  })

export const contactFormEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => ContactFormEndpointDefinitions = (builder) => ({
  // queries

  contactFormList: builder.query<
    IContactFormListResult,
    IGraphqlVariables<IContactFormListInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IContactFormListRequest,
      IContactFormListResponse,
      IContactFormListResult,
      IContactFormListInput
    >({
      query: contactFormListQuery,
      providesTags: [],
    }),
  ),

  contactFormDetail: builder.query<
    IContactFormDetailResult,
    IGraphqlVariables<IContactFormDetailInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IContactFormDetailRequest,
      IContactFormDetailResponse,
      IContactFormDetailResult,
      IContactFormDetailInput
    >({
      query: contactFormDetailQuery,
      providesTags: [],
    }),
  ),

  // mutation

  contactFormCreate: builder.mutation<
    IContactFormCreateResult,
    IGraphqlVariables<IContactFormCreateInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IContactFormCreateRequest,
      IContactFormCreateResponse,
      IContactFormCreateResult,
      IContactFormCreateInput
    >({
      query: contactFormCreateQuery,
      invalidatesTags: [],
    }),
  ),

  contactFormUpdate: builder.mutation<
    IContactFormUpdateResult,
    IGraphqlVariables<IContactFormUpdateInput, IContactFormUpdateFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IContactFormUpdateRequest,
      IContactFormUpdateResponse,
      IContactFormUpdateResult,
      IContactFormUpdateInput,
      IContactFormUpdateFilterInput
    >({
      query: contactFormUpdateQuery,
      invalidatesTags: [],
    }),
  ),

  contactFormDelete: builder.mutation<
    IContactFormDeleteResult,
    IGraphqlVariables<IContactFormDeleteInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IContactFormDeleteRequest,
      IContactFormDeleteResponse,
      IContactFormDeleteResult,
      IContactFormDeleteInput
    >({
      query: contactFormDeleteQuery,
      invalidatesTags: [],
    }),
  ),
})
