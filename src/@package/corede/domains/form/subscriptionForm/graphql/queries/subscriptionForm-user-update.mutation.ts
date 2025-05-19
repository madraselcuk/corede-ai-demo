import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import { ISubscriptionFormUserUpdateInput } from '../resolverTypes/subscriptionForm-user-update.input'
import { ISubscriptionFormUserUpdateResult } from '../resolverTypes/subscriptionForm-user-update.result'

export const subscriptionFormUserUpdateQuery = gql`
  mutation subscriptionFormUserUpdate(
    $input: SubscriptionFormUserUpdateInput!
  ) {
    subscriptionFormUserUpdate(input: $input) {
      _id
    }
  }
`

export interface ISubscriptionFormUserUpdateRequest
  extends IBaseGraphqlRequest<ISubscriptionFormUserUpdateInput, undefined> {}

export interface ISubscriptionFormUserUpdateResponse
  extends IBaseGraphqlResponse<ISubscriptionFormUserUpdateInput> {
  data: {
    subscriptionFormUserUpdate: ISubscriptionFormUserUpdateResult
  }
  errors: TGraphqlErrors<ISubscriptionFormUserUpdateInput>
}
