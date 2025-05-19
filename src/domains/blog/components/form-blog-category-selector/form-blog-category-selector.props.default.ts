import { i18n } from "@/localization"
import { FormBlogCategorySelectorProps } from "./form-blog-category-selector.props"

export const formBlogCategorySelectorDefaultProps: Partial<FormBlogCategorySelectorProps> =
  {
    label: {
      content: i18n.t("blog:blogCategory")
    }
  }
