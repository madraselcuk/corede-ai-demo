import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import {
  ISubscriptionFormDeleteResult,
  ISubscriptionFormDeleteInput,
} from '../resolverTypes'

export const subscriptionFormDeleteQuery = gql`
  mutation subscriptionFormDelete($input: SubscriptionFormDeleteInput!) {
    subscriptionFormDelete(input: $input) {
      success
    }
  }
`

export interface ISubscriptionFormDeleteRequest
  extends IBaseGraphqlRequest<ISubscriptionFormDeleteInput> {}

export interface ISubscriptionFormDeleteResponse
  extends IBaseGraphqlResponse<ISubscriptionFormDeleteInput> {
  data: {
    subscriptionFormDelete: ISubscriptionFormDeleteResult
  }
  errors: TGraphqlErrors<ISubscriptionFormDeleteInput>
}
