import { gql } from 'graphql-tag'

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import {
  ISubscriptionFormDetailResult,
  ISubscriptionFormDetailInput,
} from '../resolverTypes'
import { subscriptionFormDetailResultFragment } from './subscriptionForm-detail.result.fragment'

export const subscriptionFormDetailQuery = gql`
  ${subscriptionFormDetailResultFragment}

  query subscriptionFormDetail($input: SubscriptionFormDetailInput!) {
    subscriptionFormDetail(input: $input) {
      ...SubscriptionFormDetailResultFragment
    }
  }
`

export interface ISubscriptionFormDetailRequest
  extends IBaseGraphqlRequest<ISubscriptionFormDetailInput, undefined> {}

export interface ISubscriptionFormDetailResponse
  extends IBaseGraphqlResponse<ISubscriptionFormDetailInput> {
  data: {
    subscriptionFormDetail: ISubscriptionFormDetailResult
  }
  errors: TGraphqlErrors<ISubscriptionFormDetailInput>
}
