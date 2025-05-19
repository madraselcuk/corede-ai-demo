import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import { ISubscriptionFormUserCreateInput } from '../resolverTypes/subscriptionForm-user-create.input'
import { ISubscriptionFormUserCreateResult } from '../resolverTypes/subscriptionForm-user-create.result'

export const subscriptionFormUserCreateQuery = gql`
  mutation subscriptionFormUserCreate(
    $input: SubscriptionFormUserCreateInput!
  ) {
    subscriptionFormUserCreate(input: $input) {
      _id
    }
  }
`

export interface ISubscriptionFormUserCreateRequest
  extends IBaseGraphqlRequest<ISubscriptionFormUserCreateInput> {}

export interface ISubscriptionFormUserCreateResponse
  extends IBaseGraphqlResponse<ISubscriptionFormUserCreateInput> {
  data: {
    subscriptionFormUserCreate: ISubscriptionFormUserCreateResult
  }
  errors: TGraphqlErrors<ISubscriptionFormUserCreateInput>
}
