import {
  IEntity,
  IHasTimeStamp,
  IHasOptionalUserAudit,
  Language,
} from '@common_package';
import {
  IBaseFaqCategoryEntity,
  IFaqCategory,
} from '../../faqCategory/interfaces/faqCategory.interface';

export interface IBaseFaq {
  question: string; // unique
  answer: string;
  readingTime: string;
  category: IBaseFaqCategoryEntity;
  language: Language;
  popular?: boolean;
}

export interface IBaseFaqEntity extends IEntity, IBaseFaq {}

export interface IFaq
  extends IBaseFaqEntity,
    IHasTimeStamp,
    IHasOptionalUserAudit {
  category: IFaqCategory;
}
