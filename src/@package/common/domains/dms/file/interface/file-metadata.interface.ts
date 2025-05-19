import { IHasOptionalTimeStamp } from "../../../../interfaces";

export interface IFileMetadataForThumbnail {
  thumbnailPublicUrl?: string;
}

export interface IBaseFileMetadata {
  name: string;
  /**
   * values: `FileMimeType`
   */
  mimeType: string;
  isPrivate: boolean;
  s3Key: string;
  publicUrl?: string;

  thumbnailPublicUrl?: string;
}

export interface IFileMetadata
  extends IBaseFileMetadata,
    IHasOptionalTimeStamp {
  fileId: string;
  customName?: string;
  /**
   * values: `FileMimeType`
   */

  thumbnailS3Key?: string;
}
