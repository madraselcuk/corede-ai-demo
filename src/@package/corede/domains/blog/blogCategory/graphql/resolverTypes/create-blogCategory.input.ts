import { IBaseTranslation } from "@common_package";

export interface ICreateBlogCategoryInput {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
  parentCategoryId?: string;
}
