import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  IBaseTranslation,
} from "@common_package";

export interface IBaseFaqCategory {
  name: string;
  nameTranslation?: IBaseTranslation;
  icon?: string;
  parentCategory?: IEntity;
}

export interface IBaseFaqCategoryEntity extends IEntity, IBaseFaqCategory {}

export interface IFaqCategory
  extends IBaseFaqCategoryEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  parentCategory?: IBaseFaqCategoryEntity;
}
