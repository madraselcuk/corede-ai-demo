import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";
import { INoteDetailInput } from "../resolverTypes/note-detail.input";
import { INoteDetailResult } from "../resolverTypes/note-detail.result";
import { noteDetailResultFragment } from "./note-detail.result.fragment";

export const noteDetailQuery = gql`
  ${noteDetailResultFragment}

  query noteDetail($input: NoteDetailInput!) {
    noteDetail(input: $input) {
      ...NoteDetailResultFragment
    }
  }
`;

export interface INoteDetailRequest
  extends IBaseGraphqlRequest<INoteDetailInput, undefined> {}

export interface INoteDetailResponse
  extends IBaseGraphqlResponse<INoteDetailInput> {
  data: {
    noteDetail: INoteDetailResult;
  };
  errors: TGraphqlErrors<INoteDetailInput>;
}
