import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IBaseTranslation,
} from "@common_package";

export interface IBaseBlogCategory {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
  parentCategory?: IEntity;
}

export interface IBaseBlogCategoryEntity extends IEntity, IBaseBlogCategory {}

export interface IBlogCategory
  extends IBaseBlogCategoryEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  parentCategory?: IBaseBlogCategoryEntity;
}
