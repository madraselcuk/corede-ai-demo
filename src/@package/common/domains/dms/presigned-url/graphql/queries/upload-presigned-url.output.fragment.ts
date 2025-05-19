import { gql } from "graphql-tag";

export const uploadPresignedUrlOutputFragment = gql`
  fragment UploadPresignedUrlOutputFragment on UploadPresignedUrlOutput {
    isPrivate
    publicUrl
    uploadPresignedUrl
    uploadThumbnailPresignedUrl
    thumbnailPublicUrl
  }
`;
