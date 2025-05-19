import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Language,
  IFileMetadata,
} from "@common_package";
import {
  IBaseHelpCenterCategoryEntity,
  IHelpCenterCategory,
} from "../../helpCenterCategory/interfaces/helpCenterCategory.interface";

export interface IBaseHelpCenter {
  question: string; // unique
  answer: string;
  readingTime: string;
  category: IBaseHelpCenterCategoryEntity;
  language: Language;
}

export interface IBaseHelpCenterEntity extends IEntity, IBaseHelpCenter {}

export interface IHelpCenter
  extends IBaseHelpCenterEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  videoAttachment?: IFileMetadata;
  category: IHelpCenterCategory;
}
