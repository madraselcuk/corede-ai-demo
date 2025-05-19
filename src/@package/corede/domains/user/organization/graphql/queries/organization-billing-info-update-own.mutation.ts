import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IOrganizationBillingInfoUpdateOwnInput,
  IOrganizationBillingInfoUpdateOwnResult,
} from "../resolverTypes";

export const organizationBillingInfoUpdateOwnQuery = gql`
  mutation organizationBillingInfoUpdateOwn($input: OrganizationBillingInfoUpdateOwnInput!) {
    organizationBillingInfoUpdateOwn(input: $input) {
      success
    }
  }
`;

export interface IOrganizationBillingInfoUpdateOwnRequest
  extends IBaseGraphqlRequest<IOrganizationBillingInfoUpdateOwnInput> {}

export interface IOrganizationBillingInfoUpdateOwnResponse
  extends IBaseGraphqlResponse<IOrganizationBillingInfoUpdateOwnInput> {
  data: {
    organizationBillingInfoUpdateOwn: IOrganizationBillingInfoUpdateOwnResult;
  };
  errors: TGraphqlErrors<IOrganizationBillingInfoUpdateOwnInput>;
}
