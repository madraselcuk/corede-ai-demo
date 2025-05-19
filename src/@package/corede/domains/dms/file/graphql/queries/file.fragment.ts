import { gql } from "graphql-tag";
import { userProfileMetadataFragment } from "../../../../user";

export const fileFragment = gql`
  ${userProfileMetadataFragment}

  fragment FileFragment on File {
    _id
    customName
    name
    folder
    mimeType
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
