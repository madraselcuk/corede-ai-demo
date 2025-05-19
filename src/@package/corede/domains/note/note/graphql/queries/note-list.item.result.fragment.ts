import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../../user";

export const noteListItemResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment NoteListItemResultFragment on NoteListItemResult {
    _id
    title
    content
    targetType
    target {
      _id
    }
    organization {
      _id
    }
    department {
      _id
    }
    createdAt
    updatedAt
    createdBy {
      ...UserProfileMetadataFragment
    }
  }
`;
