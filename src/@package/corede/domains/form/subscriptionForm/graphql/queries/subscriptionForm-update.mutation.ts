import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package'
import gql from 'graphql-tag'
import {
  ISubscriptionFormUpdateInput,
  ISubscriptionFormUpdateFilterInput,
  ISubscriptionFormUpdateResult,
} from '../resolverTypes/'

export const subscriptionFormUpdateQuery = gql`
  mutation subscriptionFormUpdate(
    $filter: SubscriptionFormUpdateFilterInput!
    $input: SubscriptionFormUpdateInput!
  ) {
    subscriptionFormUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`

export interface ISubscriptionFormUpdateRequest
  extends IBaseGraphqlRequest<
    ISubscriptionFormUpdateInput,
    ISubscriptionFormUpdateFilterInput
  > {}

export interface ISubscriptionFormUpdateResponse
  extends IBaseGraphqlResponse<ISubscriptionFormUpdateInput> {
  data: {
    subscriptionFormUpdate: ISubscriptionFormUpdateResult
  }
  errors: TGraphqlErrors<ISubscriptionFormUpdateInput>
}
