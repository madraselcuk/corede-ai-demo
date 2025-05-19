import { thumbnailFileMetadataFragment } from "@common_package";
import { gql } from "graphql-tag";

export const userProfilePublicFragment = gql`
  ${thumbnailFileMetadataFragment}

  fragment UserProfilePublicFragment on UserProfilePublic {
    _id
    name
    surname
    profileImage {
      ...ThumbnailFileMetadataFragment
    }
  }
`;
