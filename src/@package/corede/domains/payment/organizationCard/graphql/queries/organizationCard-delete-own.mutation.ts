import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  IBaseResult,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IOrganizationCardDeleteOwnInput } from "../resolverTypes";

export const organizationCardDeleteOwnQuery = gql`
  mutation organizationCardDeleteOwn($input: OrganizationCardDeleteOwnInput!) {
    organizationCardDeleteOwn(input: $input) {
      success
    }
  }
`;

export interface IOrganizationCardDeleteOwnRequest
  extends IBaseGraphqlRequest<IOrganizationCardDeleteOwnInput> {}

export interface IOrganizationCardDeleteOwnResponse
  extends IBaseGraphqlResponse<IOrganizationCardDeleteOwnInput> {
  data: {
    organizationCardDeleteOwn: IBaseResult;
  };
  errors: TGraphqlErrors<IOrganizationCardDeleteOwnInput>;
}
