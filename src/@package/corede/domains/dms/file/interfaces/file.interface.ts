import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  FileContentType,
  FileExtension,
  IUserProfile,
} from "@common_package";
import { IHasOptionalOrganization } from "../../../user";
import { FileStorageImpact } from "../enums";

export interface IBaseFile {
  customName?: string;
  name: string;
  folder: string;
  storageImpact: FileStorageImpact;
  /**
   * values: `FileMimeType`
   */
  mimeType: string;
  extension: FileExtension;
  type: FileContentType;
  /**
   * in KB
   */
  size: number;
  tags: string[];
  isPrivate: boolean;
}

export interface IBaseFileEntity extends IEntity, IBaseFile {}

export interface IFile
  extends IBaseFileEntity,
    IHasOptionalOrganization,
    IHasTimeStamp,
    IHasOptionalUserAudit<IUserProfile> {
  s3Key: string;
  fileHash?: string;
  expirationDate?: Date;
  downloadCount: number;
  /**
   * every file must be associated with an entity.
   * If there is no entity, this means file is being loaded or recently loaded and about to be assigned to an entity
   * - after a while if no entity is assigned, file will be deleted automatically
   */
  entity?: IEntity;
  entityModel: string;
  entityFieldName: string;
  publicUrl?: string;

  thumbnailS3Key?: string;
  thumbnailPublicUrl?: string;
}
