import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import { INoteDeleteInput, INoteDeleteResult } from "../resolverTypes";

export const noteDeleteQuery = gql`
  mutation noteDelete($input: NoteDeleteInput!) {
    noteDelete(input: $input) {
      success
    }
  }
`;

export interface INoteDeleteRequest
  extends IBaseGraphqlRequest<INoteDeleteInput> {}

export interface INoteDeleteResponse
  extends IBaseGraphqlResponse<INoteDeleteInput> {
  data: {
    noteDelete: INoteDeleteResult;
  };
  errors: TGraphqlErrors<INoteDeleteInput>;
}
