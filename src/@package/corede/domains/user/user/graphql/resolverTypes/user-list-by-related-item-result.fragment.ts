import { thumbnailFileMetadataFragment } from "@common_package";
import { gql } from "graphql-tag";

export const userListByRelatedItemResultFragment = gql`
  ${thumbnailFileMetadataFragment}

  fragment UserListByRelatedItemResultFragment on UserListByRelatedItemResult {
    _id
    name
    surname
    profileImage {
      ...ThumbnailFileMetadataFragment
    }
  }
`;
