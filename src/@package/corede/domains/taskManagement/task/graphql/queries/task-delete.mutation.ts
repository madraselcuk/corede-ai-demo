import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { ITaskDeleteInput } from "../resolverTypes";

export const taskDeleteQuery = gql`
  mutation taskDelete($input: TaskDeleteInput!) {
    taskDelete(input: $input) {
      success
    }
  }
`;

export interface ITaskDeleteRequest
  extends IBaseGraphqlRequest<ITaskDeleteInput> {}

export interface ITaskDeleteResponse
  extends IBaseGraphqlResponse<ITaskDeleteInput> {
  data: {
    taskDelete: ITaskDeleteRequest;
  };
  errors: TGraphqlErrors<ITaskDeleteInput>;
}
