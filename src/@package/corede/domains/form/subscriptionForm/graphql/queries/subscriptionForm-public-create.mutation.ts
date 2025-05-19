import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import {
  ISubscriptionFormPublicCreateResult,
  ISubscriptionFormPublicCreateInput,
} from '../resolverTypes'

export const subscriptionFormPublicCreateQuery = gql`
  mutation subscriptionFormPublicCreate(
    $input: SubscriptionFormPublicCreateInput!
  ) {
    subscriptionFormPublicCreate(input: $input) {
      _id
    }
  }
`

export interface ISubscriptionFormPublicCreateRequest
  extends IBaseGraphqlRequest<ISubscriptionFormPublicCreateInput> {}

export interface ISubscriptionFormPublicCreateResponse
  extends IBaseGraphqlResponse<ISubscriptionFormPublicCreateInput> {
  data: {
    subscriptionFormPublicCreate: ISubscriptionFormPublicCreateResult
  }
  errors: TGraphqlErrors<ISubscriptionFormPublicCreateInput>
}
