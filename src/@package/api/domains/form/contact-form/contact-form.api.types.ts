import {
  IContactFormListInput,
  IContactFormListResult,
  IContactFormDetailInput,
  IContactFormDetailResult,
  IContactFormCreateInput,
  IContactFormCreateResult,
  IContactFormUpdateInput,
  IContactFormUpdateResult,
  IContactFormUpdateFilterInput,
  IContactFormDeleteInput,
  IContactFormDeleteResult,
} from '@corede_package'
import { IGraphqlVariables } from '@common_package'
import {
  BaseQueryFn,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query'

type contactFormListType = QueryDefinition<
  IGraphqlVariables<IContactFormListInput>,
  BaseQueryFn,
  never,
  IContactFormListResult,
  'commonApi'
>

type contactFormDetailType = QueryDefinition<
  IGraphqlVariables<IContactFormDetailInput>,
  BaseQueryFn,
  never,
  IContactFormDetailResult,
  'commonApi'
>

type contactFormCreateType = MutationDefinition<
  IGraphqlVariables<IContactFormCreateInput>,
  BaseQueryFn,
  never,
  IContactFormCreateResult,
  'commonApi'
>

type contactFormUpdateType = MutationDefinition<
  IGraphqlVariables<IContactFormUpdateInput, IContactFormUpdateFilterInput>,
  BaseQueryFn,
  never,
  IContactFormUpdateResult,
  'commonApi'
>

type contactFormDeleteType = MutationDefinition<
  IGraphqlVariables<IContactFormDeleteInput>,
  BaseQueryFn,
  never,
  IContactFormDeleteResult,
  'commonApi'
>

export type ContactFormEndpointDefinitions = {
  contactFormList: contactFormListType
  contactFormDetail: contactFormDetailType
  contactFormCreate: contactFormCreateType
  contactFormUpdate: contactFormUpdateType
  contactFormDelete: contactFormDeleteType
}
