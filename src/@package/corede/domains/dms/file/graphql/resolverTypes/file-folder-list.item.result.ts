import { IUserProfile } from "@common_package";

export interface IFileFolderListItemResult {
  folder: string;
  size: number;
  fileCount: number;
  fileCreatorList: IUserProfile[];
}
