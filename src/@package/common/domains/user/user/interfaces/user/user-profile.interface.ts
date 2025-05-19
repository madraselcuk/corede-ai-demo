import { IEntity } from "../../../../../interfaces";
import { IFileMetadata, IFileMetadataForThumbnail } from "../../../../dms";

export interface IUserProfilePublic extends Omit<IUserProfile, "profileImage"> {
  profileImage?: IFileMetadataForThumbnail;
}

export interface IUserProfile extends IEntity {
  name: string;
  surname: string;
  profileImage?: IFileMetadata;
}
