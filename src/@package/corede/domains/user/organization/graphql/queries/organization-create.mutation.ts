import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IOrganizationCreateInput } from "../resolverTypes/organization-create.input";
import { IOrganizationCreateResult } from "../resolverTypes/organization-create.result";

export const organizationCreateQuery = gql`
  mutation organizationCreate($input: OrganizationCreateInput!) {
    organizationCreate(input: $input) {
      _id
    }
  }
`;

export interface IOrganizationCreateRequest
  extends IBaseGraphqlRequest<IOrganizationCreateInput> {}

export interface IOrganizationCreateResponse
  extends IBaseGraphqlResponse<IOrganizationCreateInput> {
  data: {
    organizationCreate: IOrganizationCreateResult;
  };
  errors: TGraphqlErrors<IOrganizationCreateInput>;
}
