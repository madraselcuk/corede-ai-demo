import { Gender, IFileMetadata } from '@common_package';

export interface IUserPermissionUpdateOwnInput {
  // personal information
  name?: string;
  surname?: string;
  birthDate?: Date;
  gender?: Gender;
  address?: string;
  profileImage?: IFileMetadata;
  backgroundImage?: IFileMetadata;
  description?: string;
  country?: string;
  city?: string;

  // settings
  language?: string;
}
