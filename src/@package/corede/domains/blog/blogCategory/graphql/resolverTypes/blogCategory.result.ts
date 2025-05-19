import { IBaseBlogCategoryEntity, IBlogCategory } from "../../interfaces/blogCategory.interface";

export interface IBlogCategoryResult extends IBlogCategory {
  subCategories?: IBaseBlogCategoryEntity[]
}
