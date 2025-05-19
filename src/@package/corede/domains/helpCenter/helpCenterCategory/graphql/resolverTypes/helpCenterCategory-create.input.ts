import { IBaseTranslation } from "@common_package";

export interface IHelpCenterCategoryCreateInput {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
  parentCategoryId?: string;
}
