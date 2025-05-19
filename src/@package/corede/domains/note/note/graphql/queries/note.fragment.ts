import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../../user";

export const noteFragment = gql`
  ${userProfileMetadataFragment}

  fragment NoteFragment on Note {
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
