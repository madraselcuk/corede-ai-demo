import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../../user";

export const fileDetailResultFragment = gql`
  ${userProfileMetadataFragment}

  fragment FileDetailResultFragment on FileDetailResult {
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
    s3Key
    fileHash
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
