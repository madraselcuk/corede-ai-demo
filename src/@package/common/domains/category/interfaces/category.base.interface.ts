import { IEntity } from "../../../interfaces";
import { IBaseTranslation } from "../../../structures";

export interface IBaseCategory {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
}

export interface IBaseCategoryEntity extends IEntity {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
}
