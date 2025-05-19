import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IBaseTranslation,
} from "@common_package";

export interface IBaseBlogTargetCategory {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
}

export interface IBaseBlogTargetCategoryEntity
  extends IEntity,
    IBaseBlogTargetCategory {}

export interface IBlogTargetCategory
  extends IBaseBlogTargetCategoryEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {}
