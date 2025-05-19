import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from '@common_package';
import gql from 'graphql-tag';
import {
  ISubscriptionFormCreateResult,
  ISubscriptionFormCreateInput,
} from '../resolverTypes';

export const subscriptionFormCreateQuery = gql`
  mutation subscriptionFormCreate($input: SubscriptionFormCreateInput!) {
    subscriptionFormCreate(input: $input) {
      _id
    }
  }
`;

export interface ISubscriptionFormCreateRequest
  extends IBaseGraphqlRequest<ISubscriptionFormCreateInput> {}

export interface ISubscriptionFormCreateResponse
  extends IBaseGraphqlResponse<ISubscriptionFormCreateInput> {
  data: {
    subscriptionFormCreate: ISubscriptionFormCreateResult;
  };
  errors: TGraphqlErrors<ISubscriptionFormCreateInput>;
}
