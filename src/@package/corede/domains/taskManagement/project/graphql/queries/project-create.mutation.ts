import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { IProjectCreateInput, IProjectCreateResult } from "../resolverTypes";

export const projectCreateQuery = gql`
  mutation projectCreate($input: ProjectCreateInput!) {
    projectCreate(input: $input) {
      _id
    }
  }
`;

export interface IProjectCreateRequest
  extends IBaseGraphqlRequest<IProjectCreateInput> {}

export interface IProjectCreateResponse
  extends IBaseGraphqlResponse<IProjectCreateInput> {
  data: {
    projectCreate: IProjectCreateResult;
  };
  errors: TGraphqlErrors<IProjectCreateInput>;
}
