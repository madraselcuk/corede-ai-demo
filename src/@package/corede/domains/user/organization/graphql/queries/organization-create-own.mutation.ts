import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IOrganizationCreateOwnInput } from "../resolverTypes/organization-create-own.input";
import { IOrganizationCreateOwnResult } from "../resolverTypes/organization-create-own.result";

export const organizationCreateOwnQuery = gql`
  mutation organizationCreateOwn($input: OrganizationCreateOwnInput!) {
    organizationCreateOwn(input: $input) {
      _id
    }
  }
`;

export interface IOrganizationCreateOwnRequest
  extends IBaseGraphqlRequest<IOrganizationCreateOwnInput> {}

export interface IOrganizationCreateOwnResponse
  extends IBaseGraphqlResponse<IOrganizationCreateOwnInput> {
  data: {
    organizationCreateOwn: IOrganizationCreateOwnResult;
  };
  errors: TGraphqlErrors<IOrganizationCreateOwnInput>;
}
