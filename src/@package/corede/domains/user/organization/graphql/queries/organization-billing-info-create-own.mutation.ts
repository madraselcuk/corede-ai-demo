import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IOrganizationBillingInfoCreateOwnInput,
  IOrganizationBillingInfoCreateOwnResult,
} from "../resolverTypes";

export const organizationBillingInfoCreateOwnQuery = gql`
  mutation organizationBillingInfoCreateOwn($input: OrganizationBillingInfoCreateOwnInput!) {
    organizationBillingInfoCreateOwn(input: $input) {
      success
    }
  }
`;

export interface IOrganizationBillingInfoCreateOwnRequest
  extends IBaseGraphqlRequest<IOrganizationBillingInfoCreateOwnInput> {}

export interface IOrganizationBillingInfoCreateOwnResponse
  extends IBaseGraphqlResponse<IOrganizationBillingInfoCreateOwnInput> {
  data: {
    organizationBillingInfoCreateOwn: IOrganizationBillingInfoCreateOwnResult;
  };
  errors: TGraphqlErrors<IOrganizationBillingInfoCreateOwnInput>;
}
