import { gql } from "graphql-tag";

export const fileMetadataFragment = gql`
  fragment FileMetadataFragment on FileMetadata {
    fileId
    customName
    name
    mimeType
    isPrivate
    s3Key
    publicUrl
    thumbnailS3Key
    thumbnailPublicUrl
  }
`;

export const baseFileMetadataFragment = gql`
  fragment BaseFileMetadataFragment on BaseFileMetadata {
    name
    mimeType
    isPrivate
    s3Key
    publicUrl
    thumbnailPublicUrl
  }
`;

export const publicImageFileMetadataFragment = gql`
  fragment PublicImageFileMetadataFragment on FileMetadata {
    mimeType
    publicUrl
    thumbnailPublicUrl
  }
`;

export const thumbnailFileMetadataFragment = gql`
  fragment ThumbnailFileMetadataFragment on FileMetadata {
    thumbnailPublicUrl
  }
`;
