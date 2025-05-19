import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../../user";

export const noteDetailResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment NoteDetailResultFragment on NoteDetailResult {
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
