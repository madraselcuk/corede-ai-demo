import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IOrganizationUpdateInput } from "../resolverTypes/organization-update.input";
import { IOrganizationUpdateResult } from "../resolverTypes/organization-update.result";

export const organizationUpdateOwnQuery = gql`
  mutation organizationUpdateOwn($input: OrganizationUpdateInput!) {
    organizationUpdateOwn(input: $input) {
      _id
    }
  }
`;

export interface IOrganizationUpdateOwnRequest
  extends IBaseGraphqlRequest<IOrganizationUpdateInput> {}

export interface IOrganizationUpdateOwnResponse
  extends IBaseGraphqlResponse<IOrganizationUpdateInput> {
  data: {
    organizationUpdateOwn: IOrganizationUpdateResult;
  };
  errors: TGraphqlErrors<IOrganizationUpdateInput>;
}
