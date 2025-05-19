import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import {
  ISubscriptionFormPublicUpdateInput,
  ISubscriptionFormPublicUpdateFilterInput,
  ISubscriptionFormPublicUpdateResult,
} from '../resolverTypes/'

export const subscriptionFormPublicUpdateQuery = gql`
  mutation subscriptionFormPublicUpdate(
    $filter: SubscriptionFormUpdatePublicFilterInput!
    $input: SubscriptionFormUpdatePublicInput!
  ) {
    subscriptionFormPublicUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`

export interface ISubscriptionFormPublicUpdateRequest
  extends IBaseGraphqlRequest<
    ISubscriptionFormPublicUpdateInput,
    ISubscriptionFormPublicUpdateFilterInput
  > {}

export interface ISubscriptionFormPublicUpdateResponse
  extends IBaseGraphqlResponse<ISubscriptionFormPublicUpdateInput> {
  data: {
    subscriptionFormPublicUpdate: ISubscriptionFormPublicUpdateResult
  }
  errors: TGraphqlErrors<ISubscriptionFormPublicUpdateInput>
}
