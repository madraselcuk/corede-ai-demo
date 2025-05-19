import { gql } from "graphql-tag";

export const noteListOwnItemResultFragment = gql`
  fragment NoteListOwnItemResultFragment on NoteListOwnItemResult {
    _id
    title
    content
    targetType
    target {
      _id
    }
    createdAt
    updatedAt
  }
`;
