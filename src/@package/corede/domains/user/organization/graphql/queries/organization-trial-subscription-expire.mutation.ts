import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";

export const organizationTrialSubscriptionExpireQuery = gql`
  mutation organizationTrialSubscriptionExpire {
    organizationTrialSubscriptionExpire {
      success
    }
  }
`;

export interface IOrganizationTrialSubscriptionExpireRequest
  extends IBaseGraphqlRequest<undefined> {}

export interface IOrganizationTrialSubscriptionExpireResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    organizationTrialSubscriptionExpire: IBaseResult;
  };
  errors: TGraphqlErrors<undefined>;
}
