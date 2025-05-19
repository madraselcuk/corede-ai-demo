import { IEntity } from "../../../../../interfaces";
import { IFileMetadata } from "../../interface";

export interface IEntityFileAssignInput extends IEntity {
  file: IFileMetadata;
}
