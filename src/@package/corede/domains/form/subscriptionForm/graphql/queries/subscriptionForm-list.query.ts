import { gql } from 'graphql-tag'

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import {
  ISubscriptionFormListResult,
  ISubscriptionFormListInput,
} from '../resolverTypes'
import { subscriptionFormListResultFragment } from './subscriptionForm-list.item.result.fragment'

export const subscriptionFormListQuery = gql`
  ${subscriptionFormListResultFragment}

  query subscriptionFormList($input: SubscriptionFormListInput) {
    subscriptionFormList(input: $input) {
      data {
        ...SubscriptionFormListResultFragment
      }
      count
    }
  }
`

export interface ISubscriptionFormListRequest
  extends IBaseGraphqlRequest<ISubscriptionFormListInput> {}

export interface ISubscriptionFormListResponse
  extends IBaseGraphqlResponse<ISubscriptionFormListInput> {
  data: {
    subscriptionFormList: ISubscriptionFormListResult
  }
  errors: TGraphqlErrors<ISubscriptionFormListInput>
}
