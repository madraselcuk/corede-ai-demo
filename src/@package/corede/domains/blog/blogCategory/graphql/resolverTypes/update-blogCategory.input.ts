import { IBaseTranslation, IEntity } from "@common_package";

export interface IUpdateBlogCategoryFilterInput extends IEntity {}

export interface IUpdateBlogCategoryInput {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
  parentCategoryId?: string;
}
