import { IBaseTranslation, IEntity } from "@common_package";

export interface IUpdateBlogTargetCategoryFilterInput extends IEntity {}

export interface IUpdateBlogTargetCategoryInput {
  name?: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
}
