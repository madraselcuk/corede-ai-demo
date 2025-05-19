import { IEntity } from "../../../interfaces/entity.interface";

export interface IExcelImportResult {
  success: boolean;
  importedEntities: IEntity[];
}
