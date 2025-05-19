import { IBaseHelpCenterCategoryEntity, IHelpCenterCategory } from "../../interfaces/helpCenterCategory.interface";

export interface IHelpCenterCategoryDetailResult extends IHelpCenterCategory {
  subCategories?: IBaseHelpCenterCategoryEntity[]
}
