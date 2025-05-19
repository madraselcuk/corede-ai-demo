import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IBaseTranslation,
} from "@common_package";

export interface IBaseHelpCenterCategory {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
  parentCategory?: IEntity;
}

export interface IBaseHelpCenterCategoryEntity extends IEntity, IBaseHelpCenterCategory {}

export interface IHelpCenterCategory
  extends IBaseHelpCenterCategoryEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  parentCategory?: IBaseHelpCenterCategoryEntity;
}
