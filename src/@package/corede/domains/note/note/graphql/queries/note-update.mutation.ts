import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import gql from "graphql-tag";
import {
  INoteUpdateInput,
  INoteUpdateFilterInput,
} from "../resolverTypes/note-update.input";
import { INoteUpdateResult } from "../resolverTypes/note-update.result";

export const noteUpdateQuery = gql`
  mutation noteUpdate(
    $filter: NoteUpdateFilterInput!
    $input: NoteUpdateInput!
  ) {
    noteUpdate(filter: $filter, input: $input) {
      _id
    }
  }
`;

export interface INoteUpdateRequest
  extends IBaseGraphqlRequest<INoteUpdateInput, INoteUpdateFilterInput> {}

export interface INoteUpdateResponse
  extends IBaseGraphqlResponse<INoteUpdateInput> {
  data: {
    noteUpdate: INoteUpdateResult;
  };
  errors: TGraphqlErrors<INoteUpdateInput>;
}
