import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import { ICreateLeadTagInput } from '../resolverTypes/create-leadTag.input'
import { ICreateLeadTagFilterInput } from '../resolverTypes/create-leadTag.filter.input'
import { ICreateLeadTagResult } from '../resolverTypes/create-leadTag.result'

export const createLeadTagQuery = gql`
  mutation createLeadTag(
    $input: CreateLeadTagInput!
    $filter: CreateLeadTagFilterInput
  ) {
    createLeadTag(input: $input, filter: $filter) {
      _id
      leadTags
      organization {
        _id
      }
    }
  }
`

export interface ICreateLeadTagRequest
  extends IBaseGraphqlRequest<ICreateLeadTagInput, ICreateLeadTagFilterInput> {}

export interface ICreateLeadTagResponse
  extends IBaseGraphqlResponse<ICreateLeadTagInput> {
  data: {
    createLeadTag: ICreateLeadTagResult
  }
  errors: TGraphqlErrors<ICreateLeadTagInput>
}
