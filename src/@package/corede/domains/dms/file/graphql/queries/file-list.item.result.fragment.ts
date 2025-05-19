import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../../user";

export const fileListItemResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment FileListItemResultFragment on FileListItemResult {
    _id
    customName
    name
    folder
    mimeType
    storageImpact
    extension
    type
    size
    tags
    isPrivate
    expirationDate
    downloadCount
    entity {
      _id
    }
    entityModel
    entityFieldName
    publicUrl
    thumbnailS3Key
    thumbnailPublicUrl
    organization {
      _id
    }
    createdBy {
      ...UserProfileMetadataFragment
    }
    createdAt
    updatedAt
  }
`;
