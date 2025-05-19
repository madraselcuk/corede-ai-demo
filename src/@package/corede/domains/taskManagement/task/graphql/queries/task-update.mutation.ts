import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  ITaskUpdateInput,
  ITaskUpdateFilterInput,
} from "../resolverTypes/task-update.input";
import { ITaskUpdateResult } from "../resolverTypes/task-update.result";

export const taskUpdateQuery = gql`
  mutation taskUpdate(
    $filter: TaskUpdateFilterInput!
    $input: TaskUpdateInput!
  ) {
    taskUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface ITaskUpdateRequest
  extends IBaseGraphqlRequest<ITaskUpdateInput, ITaskUpdateFilterInput> {}

export interface ITaskUpdateResponse
  extends IBaseGraphqlResponse<ITaskUpdateInput> {
  data: {
    taskUpdate: ITaskUpdateResult;
  };
  errors: TGraphqlErrors<ITaskUpdateInput>;
}
