import { IBaseTranslation } from "@common_package";

export interface ICreateBlogTargetCategoryInput {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
}
