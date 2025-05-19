import { enumValues, IGraphqlVariables } from '@common_package'
import {
  IWebinarInput,
  IWebinarRequest,
  IWebinarResponse,
  IWebinarResult,
  IWebinarsInput,
  IWebinarsRequest,
  IWebinarsResponse,
  IWebinarsResult,
  ICreateWebinarInput,
  ICreateWebinarRequest,
  ICreateWebinarResponse,
  ICreateWebinarResult,
  IDeleteWebinarInput,
  IDeleteWebinarRequest,
  IDeleteWebinarResponse,
  IDeleteWebinarResult,
  IUpdateWebinarFilterInput,
  IUpdateWebinarInput,
  IUpdateWebinarRequest,
  IUpdateWebinarResponse,
  IUpdateWebinarResult,
  webinarQuery,
  webinarsQuery,
  createWebinarQuery,
  deleteWebinarQuery,
  updateWebinarQuery,
  IActiveWebinarResult,
  IActiveWebinarInput,
  activeWebinarQuery,
  IActiveWebinarResponse,
  IActiveWebinarRequest,
  IJoinWebinarFilterInput,
  IJoinWebinarResult,
  IJoinWebinarInput,
  IJoinWebinarResponse,
  IJoinWebinarRequest,
  joinWebinarQuery,
} from '@corede_package'
import { WebinarTags } from './webinar-tags.enum'
import { IApi, injectTags, EndpointQueryBuilder } from '@api_package'
import { BaseQueryFn, EndpointBuilder } from '@reduxjs/toolkit/query'
import { WebinarEndpointDefinitions } from './webinar.api.types'

const webinarApiReducerPath = 'webinarApi'

export const injectWebinarTags = (api: IApi) =>
  injectTags({
    api,
    name: webinarApiReducerPath,
    tagTypes: enumValues(WebinarTags),
    options: { registerTagTypes: true },
  })

export const webinarEndpoints: (
  build: EndpointBuilder<BaseQueryFn, never, 'commonApi'>,
) => WebinarEndpointDefinitions = (builder) => ({
  // queries

  webinarList: builder.query<
    IWebinarsResult,
    IGraphqlVariables<IWebinarsInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IWebinarsRequest,
      IWebinarsResponse,
      IWebinarsResult,
      IWebinarsInput
    >({
      query: webinarsQuery,
      providesTags: [],
    }),
  ),

  webinarDetail: builder.query<
    IWebinarResult,
    IGraphqlVariables<IWebinarInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IWebinarRequest,
      IWebinarResponse,
      IWebinarResult,
      IWebinarInput
    >({
      query: webinarQuery,
      providesTags: [],
    }),
  ),

  activeWebinarPublic: builder.query<
    IActiveWebinarResult,
    IGraphqlVariables<IActiveWebinarInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IActiveWebinarRequest,
      IActiveWebinarResponse,
      IActiveWebinarResult,
      IActiveWebinarInput
    >({
      query: activeWebinarQuery,
      invalidatesTags: [],
    }),
  ),

  // mutations

  webinarCreate: builder.mutation<
    ICreateWebinarResult,
    IGraphqlVariables<ICreateWebinarInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      ICreateWebinarRequest,
      ICreateWebinarResponse,
      ICreateWebinarResult,
      ICreateWebinarInput
    >({
      query: createWebinarQuery,
      invalidatesTags: [],
    }),
  ),

  webinarUpdate: builder.mutation<
    IUpdateWebinarResult,
    IGraphqlVariables<IUpdateWebinarInput, IUpdateWebinarFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IUpdateWebinarRequest,
      IUpdateWebinarResponse,
      IUpdateWebinarResult,
      IUpdateWebinarInput,
      IUpdateWebinarFilterInput
    >({
      query: updateWebinarQuery,
      invalidatesTags: [],
    }),
  ),

  webinarDelete: builder.mutation<
    IDeleteWebinarResult,
    IGraphqlVariables<IDeleteWebinarInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IDeleteWebinarRequest,
      IDeleteWebinarResponse,
      IDeleteWebinarResult,
      IDeleteWebinarInput
    >({
      query: deleteWebinarQuery,
      invalidatesTags: [],
    }),
  ),

  webinarJoinPublic: builder.mutation<
    IJoinWebinarResult,
    IGraphqlVariables<IJoinWebinarInput, IJoinWebinarFilterInput>
  >(
    EndpointQueryBuilder.BuildGraphqlQuery<
      IJoinWebinarRequest,
      IJoinWebinarResponse,
      IJoinWebinarResult,
      IJoinWebinarInput,
      IJoinWebinarFilterInput
    >({
      query: joinWebinarQuery,
      invalidatesTags: [],
    }),
  ),
})
