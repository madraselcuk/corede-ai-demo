import { IHasOptionalOrganizationId } from "../../../../user";

export interface IFileCreateInput extends IHasOptionalOrganizationId {
  customName?: string;
  name: string;
  folder: string;
  mimeType: string; // FileMimeType
  size: number;
  tags?: string[];
  isPrivate: boolean;
  s3Key: string;
  fileHash?: string;
  expirationDate?: Date;
  downloadCount?: number;
  entityId?: string;
  entityModel: string;
  entityFieldName: string;
  publicUrl?: string;
  thumbnailS3Key?: string;
  thumbnailPublicUrl?: string;
}
