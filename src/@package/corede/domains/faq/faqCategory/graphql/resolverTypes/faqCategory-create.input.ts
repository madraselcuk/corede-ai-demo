import { IBaseTranslation } from "@common_package";

export interface IFaqCategoryCreateInput {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
  parentCategoryId?: string;
}
