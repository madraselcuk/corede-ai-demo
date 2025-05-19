import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IProjectDeleteInput } from "../resolverTypes";

export const projectDeleteQuery = gql`
  mutation projectDelete($input: ProjectDeleteInput!) {
    projectDelete(input: $input) {
      success
    }
  }
`;

export interface IProjectDeleteRequest
  extends IBaseGraphqlRequest<IProjectDeleteInput> {}

export interface IProjectDeleteResponse
  extends IBaseGraphqlResponse<IProjectDeleteInput> {
  data: {
    projectDelete: IProjectDeleteRequest;
  };
  errors: TGraphqlErrors<IProjectDeleteInput>;
}
