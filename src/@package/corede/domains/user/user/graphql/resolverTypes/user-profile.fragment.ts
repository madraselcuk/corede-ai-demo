import { thumbnailFileMetadataFragment } from "@common_package";
import { gql } from "graphql-tag";

export const userProfileMetadataFragment = gql`
  ${thumbnailFileMetadataFragment}

  fragment UserProfileMetadataFragment on UserProfile {
    _id
    name
    surname
    profileImage {
      ...ThumbnailFileMetadataFragment
    }
  }
`;
