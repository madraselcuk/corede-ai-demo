import { IEntity } from "../../../../../interfaces";
import { IFileMetadata } from "../../interface";

export interface IEntityArrayFileAddInput extends IEntity {
  files: Array<IFileMetadata>;
}
