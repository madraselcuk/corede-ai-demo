'use client'

import { BlogCategoryDetailContainerUIProps } from "../blog-category-detail.container"
import { i18n } from "@/localization"

export const BlogCategoryDetailContent = ({
  blogCategoryDetailData,
  blogCategoryDetailIsLoading
}: BlogCategoryDetailContainerUIProps) => {
  if (blogCategoryDetailIsLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <b>{i18n.t("common:name")}: </b>
        </div>
        <div>{blogCategoryDetailData?.name}</div>
        <div>
          <b>{i18n.t("common:icon")}: </b>
        </div>
        <div>{blogCategoryDetailData?.icon}</div>
      </div>
    </div>
  )
}

export default BlogCategoryDetailContent
