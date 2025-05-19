import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  IProjectUpdateInput,
  IProjectUpdateFilterInput,
} from "../resolverTypes/project-update.input";
import { IProjectUpdateResult } from "../resolverTypes/project-update.result";

export const projectUpdateQuery = gql`
  mutation projectUpdate(
    $filter: ProjectUpdateFilterInput!
    $input: ProjectUpdateInput!
  ) {
    projectUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface IProjectUpdateRequest
  extends IBaseGraphqlRequest<IProjectUpdateInput, IProjectUpdateFilterInput> {}

export interface IProjectUpdateResponse
  extends IBaseGraphqlResponse<IProjectUpdateInput> {
  data: {
    projectUpdate: IProjectUpdateResult;
  };
  errors: TGraphqlErrors<IProjectUpdateInput>;
}
