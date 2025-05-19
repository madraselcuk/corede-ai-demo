export interface IUploadPresignedUrlOutput
  extends IUploadThumbnailPresignedUrlOutput {
  uploadPresignedUrl: string;
  publicUrl?: string;
  isPrivate: boolean;
}

export interface IUploadThumbnailPresignedUrlOutput {
  uploadThumbnailPresignedUrl?: string;
  thumbnailPublicUrl?: string;
}
