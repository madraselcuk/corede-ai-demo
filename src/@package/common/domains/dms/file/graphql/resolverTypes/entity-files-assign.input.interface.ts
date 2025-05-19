import { IEntity } from "../../../../../interfaces";
import { IFileMetadata } from "../../interface";

export interface IEntityFilesAssignInput extends IEntity {
  files: IFileMetadata[];
}
