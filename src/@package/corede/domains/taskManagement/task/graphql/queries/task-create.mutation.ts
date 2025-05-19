import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { ITaskCreateInput, ITaskCreateResult } from "../resolverTypes";

export const taskCreateQuery = gql`
  mutation taskCreate($input: TaskCreateInput!) {
    taskCreate(input: $input) {
      _id
    }
  }
`;

export interface ITaskCreateRequest
  extends IBaseGraphqlRequest<ITaskCreateInput> {}

export interface ITaskCreateResponse
  extends IBaseGraphqlResponse<ITaskCreateInput> {
  data: {
    taskCreate: ITaskCreateResult;
  };
  errors: TGraphqlErrors<ITaskCreateInput>;
}
