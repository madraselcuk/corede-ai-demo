import {
  IWebinarsInput,
  IWebinarsResult,
  IWebinarInput,
  IWebinarResult,
  ICreateWebinarInput,
  ICreateWebinarResult,
  IUpdateWebinarFilterInput,
  IUpdateWebinarInput,
  IUpdateWebinarResult,
  IDeleteWebinarInput,
  IDeleteWebinarResult,
  IJoinWebinarResult,
  IJoinWebinarInput,
  IJoinWebinarFilterInput,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type webinarListType = QueryDefinition<
  IGraphqlVariables<IWebinarsInput>,
  BaseQueryFn,
  never,
  IWebinarsResult,
  'commonApi'
>

type webinarDetailType = QueryDefinition<
  IGraphqlVariables<IWebinarInput>,
  BaseQueryFn,
  never,
  IWebinarResult,
  'commonApi'
>

type webinarCreateType = MutationDefinition<
  IGraphqlVariables<ICreateWebinarInput>,
  BaseQueryFn,
  never,
  ICreateWebinarResult,
  'commonApi'
>

type webinarUpdateType = MutationDefinition<
  IGraphqlVariables<IUpdateWebinarInput, IUpdateWebinarFilterInput>,
  BaseQueryFn,
  never,
  IUpdateWebinarResult,
  'commonApi'
>

type webinarDeleteType = MutationDefinition<
  IGraphqlVariables<IDeleteWebinarInput>,
  BaseQueryFn,
  never,
  IDeleteWebinarResult,
  'commonApi'
>

type webinarJoinPublicType = MutationDefinition<
  IGraphqlVariables<IJoinWebinarInput, IJoinWebinarFilterInput>,
  BaseQueryFn,
  never,
  IJoinWebinarResult,
  'commonApi'
>
export type WebinarEndpointDefinitions = {
  webinarList: webinarListType
  webinarDetail: webinarDetailType
  webinarCreate: webinarCreateType
  webinarUpdate: webinarUpdateType
  webinarDelete: webinarDeleteType
  webinarJoinPublic: webinarJoinPublicType
}
