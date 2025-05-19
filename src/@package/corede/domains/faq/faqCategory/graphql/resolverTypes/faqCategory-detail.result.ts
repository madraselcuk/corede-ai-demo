import { IBaseFaqCategoryEntity, IFaqCategory } from "../../interfaces/faqCategory.interface";

export interface IFaqCategoryDetailResult extends IFaqCategory {
  subCategories?: IBaseFaqCategoryEntity[]
}
