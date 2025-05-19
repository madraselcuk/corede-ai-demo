import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";

export const organizationTrialSubscriptionBeginQuery = gql`
  mutation organizationTrialSubscriptionBegin {
    organizationTrialSubscriptionBegin {
      success
    }
  }
`;

export interface IOrganizationTrialSubscriptionBeginRequest
  extends IBaseGraphqlRequest<undefined> {}

export interface IOrganizationTrialSubscriptionBeginResponse
  extends IBaseGraphqlResponse<undefined> {
  data: {
    organizationTrialSubscriptionBegin: IBaseResult;
  };
  errors: TGraphqlErrors<undefined>;
}
