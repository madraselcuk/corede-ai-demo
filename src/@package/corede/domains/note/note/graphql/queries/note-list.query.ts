import { gql } from "graphql-tag";

import {
  IBaseGraphqlRequest,
  IBaseGraphqlResponse,
  TGraphqlErrors,
} from "@common_package";

import { INoteListResult } from "../resolverTypes/note-list.result";
import { INoteListOwnInput } from "../resolverTypes";
import { noteListItemResultFragment } from "./note-list.item.result.fragment";

export const noteListQuery = gql`
  ${noteListItemResultFragment}

  query noteList($input: NoteListInput) {
    noteList(input: $input) {
      data {
        ...NoteListItemResultFragment
      }
      count
    }
  }
`;

export interface INoteListRequest
  extends IBaseGraphqlRequest<INoteListOwnInput, undefined> {}

export interface INoteListResponse
  extends IBaseGraphqlResponse<INoteListOwnInput> {
  data: {
    noteList: INoteListResult;
  };
  errors: TGraphqlErrors<INoteListOwnInput>;
}
